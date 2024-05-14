import { l as leagueID } from "./leagueInfo.js";
import { q as get_store_value } from "./index3.js";
import { r as rostersStore } from "./stores.js";
const getLeagueRosters = async (queryLeagueID = leagueID) => {
  const storedRoster = get_store_value(rostersStore)[queryLeagueID];
  if (storedRoster && typeof storedRoster.rosters === "object" && !Array.isArray(storedRoster.rosters) && storedRoster.rosters !== null) {
    return storedRoster;
  }
  const res = await fetch(`https://api.sleeper.app/v1/league/${queryLeagueID}/rosters`, { compress: true }).catch((err) => {
    console.error(err);
  });
  const data = await res.json().catch((err) => {
    console.error(err);
  });
  if (res.ok) {
    const processedRosters = processRosters(data);
    rostersStore.update((r) => {
      r[queryLeagueID] = processedRosters;
      return r;
    });
    return processedRosters;
  } else {
    throw new Error(data);
  }
};
const processRosters = (rosters) => {
  const startersAndReserve = [];
  const rosterMap = {};
  for (const roster of rosters) {
    for (const starter of roster.starters) {
      startersAndReserve.push(starter);
    }
    if (roster.reserve) {
      for (const ir of roster.reserve) {
        startersAndReserve.push(ir);
      }
    }
    rosterMap[roster.roster_id] = roster;
  }
  return { rosters: rosterMap, startersAndReserve };
};
export {
  getLeagueRosters as g
};
