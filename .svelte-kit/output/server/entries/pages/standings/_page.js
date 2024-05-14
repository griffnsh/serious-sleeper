import { a as getLeagueData, g as getLeagueTeamManagers } from "../../../chunks/leagueTeamManagers.js";
import "../../../chunks/records.js";
import { l as leagueID } from "../../../chunks/leagueInfo.js";
import { g as getNflState } from "../../../chunks/nflState.js";
import { g as getLeagueRosters } from "../../../chunks/leagueRosters.js";
import { w as waitForAll } from "../../../chunks/multiPromise.js";
import { q as get_store_value } from "../../../chunks/index3.js";
import { s as standingsStore } from "../../../chunks/stores.js";
import { r as round } from "../../../chunks/universalFunctions.js";
const getLeagueStandings = async () => {
  if (get_store_value(standingsStore).standingsInfo) {
    return get_store_value(standingsStore);
  }
  const [nflState, leagueData, rostersData] = await waitForAll(
    getNflState(),
    getLeagueData(),
    getLeagueRosters()
  ).catch((err) => {
    console.error(err);
  });
  const yearData = leagueData.season;
  const regularSeasonLength = leagueData.settings.playoff_week_start - 1;
  const divisions = leagueData.settings.divisions && leagueData.settings.divisions > 1;
  const rosters = rostersData.rosters;
  if (leagueData.status != "in_season" && leagueData.status != "post_season" && leagueData.status != "complete" || nflState.week < 1) {
    return null;
  }
  let standings = {};
  for (const rosterID in rosters) {
    const roster = rosters[rosterID];
    standings[rosterID] = {
      rosterID,
      wins: roster.settings.wins,
      losses: roster.settings.losses,
      ties: roster.settings.ties,
      fpts: round(roster.settings.fpts + roster.settings.fpts_decimal / 100),
      fptsAgainst: round(roster.settings.fpts_against + roster.settings.fpts_against_decimal / 100),
      streak: roster.metadata?.streak || 0,
      divisionWins: divisions ? 0 : null,
      divisionLosses: divisions ? 0 : null,
      divisionTies: divisions ? 0 : null
    };
  }
  if (divisions) {
    let week = 0;
    if (nflState.season_type == "regular") {
      week = nflState.display_week > regularSeasonLength ? regularSeasonLength + 1 : nflState.display_week;
    } else if (nflState.season_type == "post") {
      week = regularSeasonLength + 1;
    }
    if (week < 2) {
      return null;
    }
    const matchupsPromises = [];
    for (let i = week - 1; i > 0; i--) {
      matchupsPromises.push(fetch(`https://api.sleeper.app/v1/league/${leagueID}/matchups/${i}`, { compress: true }));
    }
    const matchupsRes = await waitForAll(...matchupsPromises);
    const matchupsJsonPromises = [];
    for (const matchupRes of matchupsRes) {
      const data = matchupRes.json();
      matchupsJsonPromises.push(data);
      if (!matchupRes.ok) {
        throw new Error(data);
      }
    }
    const matchupsData = await waitForAll(...matchupsJsonPromises).catch((err) => {
      console.error(err);
    }).catch((err) => {
      console.error(err);
    });
    for (const matchup of matchupsData) {
      standings = processStandings(matchup, standings, rosters);
    }
  }
  const response = {
    standingsInfo: standings,
    yearData
  };
  standingsStore.update(() => response);
  return response;
};
const processStandings = (matchup, standingsData, rosters) => {
  const matchups = {};
  for (const match of matchup) {
    if (!matchups[match.matchup_id]) {
      matchups[match.matchup_id] = [];
    }
    const rosterID = match.roster_id;
    matchups[match.matchup_id].push({
      rosterID,
      division: rosters[rosterID].settings.division,
      points: match.points
    });
  }
  for (const matchupKey in matchups) {
    const teamA = matchups[matchupKey][0];
    const teamB = matchups[matchupKey][1];
    const divisionMatchup = teamA.division && teamB.division && teamA.division == teamB.division;
    if (divisionMatchup) {
      if (teamA.points > teamB.points) {
        standingsData[teamA.rosterID].divisionWins++;
        standingsData[teamB.rosterID].divisionLosses++;
        continue;
      } else if (teamB.points > teamA.points) {
        standingsData[teamB.rosterID].divisionWins++;
        standingsData[teamA.rosterID].divisionLosses++;
        continue;
      } else {
        standingsData[teamA.rosterID].divisionTies++;
        standingsData[teamB.rosterID].divisionTies++;
      }
    }
  }
  return standingsData;
};
async function load() {
  const standingsData = getLeagueStandings();
  const leagueTeamManagersData = getLeagueTeamManagers();
  return {
    standingsData,
    leagueTeamManagersData
  };
}
export {
  load
};
