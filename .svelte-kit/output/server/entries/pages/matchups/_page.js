import { a as getLeagueData, g as getLeagueTeamManagers } from "../../../chunks/leagueTeamManagers.js";
import { l as leagueID } from "../../../chunks/leagueInfo.js";
import { g as getNflState } from "../../../chunks/nflState.js";
import { w as waitForAll } from "../../../chunks/multiPromise.js";
import { q as get_store_value } from "../../../chunks/index3.js";
import { m as matchupsStore } from "../../../chunks/stores.js";
import { l as loadPlayers } from "../../../chunks/players.js";
import "../../../chunks/records.js";
import { g as getBrackets } from "../../../chunks/leagueBrackets.js";
const getLeagueMatchups = async () => {
  if (get_store_value(matchupsStore).matchupWeeks) {
    return get_store_value(matchupsStore);
  }
  const [nflState, leagueData] = await waitForAll(
    getNflState(),
    getLeagueData()
  ).catch((err) => {
    console.error(err);
  });
  let week = 1;
  if (nflState.season_type == "regular") {
    week = nflState.display_week;
  } else if (nflState.season_type == "post") {
    week = 18;
  }
  const year = leagueData.season;
  const regularSeasonLength = leagueData.settings.playoff_week_start - 1;
  const matchupsPromises = [];
  for (let i = 1; i < leagueData.settings.playoff_week_start; i++) {
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
  const matchupWeeks = [];
  for (let i = 1; i < matchupsData.length + 1; i++) {
    const processed = processMatchups(matchupsData[i - 1], i);
    if (processed) {
      matchupWeeks.push({
        matchups: processed.matchups,
        week: processed.week
      });
    }
  }
  const matchupsResponse = {
    matchupWeeks,
    year,
    week,
    regularSeasonLength
  };
  matchupsStore.update(() => matchupsResponse);
  return matchupsResponse;
};
const processMatchups = (inputMatchups, week) => {
  if (!inputMatchups || inputMatchups.length == 0) {
    return false;
  }
  const matchups = {};
  for (const match of inputMatchups) {
    if (!matchups[match.matchup_id]) {
      matchups[match.matchup_id] = [];
    }
    matchups[match.matchup_id].push({
      roster_id: match.roster_id,
      starters: match.starters,
      points: match.starters_points
    });
  }
  return { matchups, week };
};
async function load({ url, fetch: fetch2 }) {
  const queryWeek = url?.searchParams?.get("week");
  return {
    queryWeek: isNaN(queryWeek) ? null : queryWeek,
    matchupsData: getLeagueMatchups(),
    bracketsData: getBrackets(),
    leagueTeamManagersData: getLeagueTeamManagers(),
    playersData: loadPlayers(fetch2)
  };
}
export {
  load
};
