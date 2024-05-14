import { a as getLeagueData } from "./leagueTeamManagers.js";
import { g as getLeagueRosters } from "./leagueRosters.js";
import { w as waitForAll } from "./multiPromise.js";
import { q as get_store_value } from "./index3.js";
import { a as awards } from "./stores.js";
const getAwards = async () => {
  if (get_store_value(awards).length) {
    return get_store_value(awards);
  }
  const leagueData = await getLeagueData().catch((err) => {
    console.error(err);
  });
  let previousSeasonID = leagueData.status == "complete" ? leagueData.league_id : leagueData.previous_league_id;
  const podiums = await getPodiums(previousSeasonID);
  awards.update(() => podiums);
  return podiums;
};
const getPodiums = async (previousSeasonID) => {
  const podiums = [];
  while (previousSeasonID && previousSeasonID != 0) {
    const previousSeasonData = await getPreviousLeagueData(previousSeasonID);
    const {
      losersData,
      winnersData,
      year,
      previousRosters,
      numDivisions,
      playoffRounds,
      toiletRounds,
      leagueMetadata
    } = previousSeasonData;
    previousSeasonID = previousSeasonData.previousSeasonID;
    const divisions = buildDivisionsAndManagers({ previousRosters, leagueMetadata, numDivisions });
    const divisionArr = [];
    for (const key in divisions) {
      divisionArr.push(divisions[key]);
    }
    const finalsMatch = winnersData.filter((m) => m.r == playoffRounds && m.t1_from.w)[0];
    const champion = finalsMatch.w;
    const second = finalsMatch.l;
    const runnersUpMatch = winnersData.filter((m) => m.r == playoffRounds && m.t1_from.l)[0];
    const third = runnersUpMatch.w;
    const toiletBowlMatch = losersData.filter((m) => m.r == toiletRounds && (!m.t1_from || m.t1_from.w))[0];
    const toilet = toiletBowlMatch.w;
    if (!champion) {
      continue;
    }
    const podium = {
      year,
      champion,
      second,
      third,
      divisions: divisionArr,
      toilet
    };
    podiums.push(podium);
  }
  return podiums;
};
const getPreviousLeagueData = async (previousSeasonID) => {
  const resPromises = [
    fetch(`https://api.sleeper.app/v1/league/${previousSeasonID}`, { compress: true }),
    getLeagueRosters(previousSeasonID),
    fetch(`https://api.sleeper.app/v1/league/${previousSeasonID}/losers_bracket`, { compress: true }),
    fetch(`https://api.sleeper.app/v1/league/${previousSeasonID}/winners_bracket`, { compress: true })
  ];
  const [leagueRes, rostersData, losersRes, winnersRes] = await waitForAll(...resPromises).catch((err) => {
    console.error(err);
  });
  if (!leagueRes.ok || !losersRes.ok || !winnersRes.ok) {
    throw new Error(data);
  }
  const jsonPromises = [
    leagueRes.json(),
    losersRes.json(),
    winnersRes.json()
  ];
  const [prevLeagueData, losersData, winnersData] = await waitForAll(...jsonPromises).catch((err) => {
    console.error(err);
  });
  const year = prevLeagueData.season;
  const previousRosters = rostersData.rosters;
  const numDivisions = prevLeagueData.settings.divisions || 1;
  previousSeasonID = prevLeagueData.previous_league_id;
  const playoffRounds = winnersData[winnersData.length - 1].r;
  const toiletRounds = losersData[losersData.length - 1].r;
  return {
    losersData,
    winnersData,
    year,
    previousRosters,
    numDivisions,
    previousSeasonID,
    playoffRounds,
    toiletRounds,
    leagueMetadata: prevLeagueData.metadata
  };
};
const buildDivisionsAndManagers = ({ previousRosters, leagueMetadata, numDivisions }) => {
  const divisions = {};
  for (let i = 1; i <= numDivisions; i++) {
    divisions[i] = {
      name: leagueMetadata ? leagueMetadata[`division_${i}`] : null,
      wins: -1,
      points: -1
    };
  }
  for (const rosterID in previousRosters) {
    const rSettings = previousRosters[rosterID].settings;
    const div = !rSettings.division || rSettings.division > numDivisions ? 1 : rSettings.division;
    if (rSettings.wins > divisions[div].wins || rSettings.wins == divisions[div].wins && rSettings.fpts + rSettings.fpts_decimal / 100 == divisions[div].points) {
      divisions[div].points = rSettings.fpts + rSettings.fpts_decimal / 100;
      divisions[div].wins = rSettings.wins;
      divisions[div].rosterID = rosterID;
    }
  }
  return divisions;
};
export {
  getAwards as g
};
