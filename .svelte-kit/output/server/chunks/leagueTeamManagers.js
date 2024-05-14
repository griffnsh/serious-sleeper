import { l as leagueID, m as managers } from "./leagueInfo.js";
import { q as get_store_value } from "./index3.js";
import { l as leagueData, t as teamManagersStore } from "./stores.js";
import { w as waitForAll } from "./multiPromise.js";
import { j as getTeamData, k as getManagers } from "./universalFunctions.js";
const getLeagueData = async (queryLeagueID = leagueID) => {
  if (get_store_value(leagueData)[queryLeagueID]) {
    return get_store_value(leagueData)[queryLeagueID];
  }
  const res = await fetch(`https://api.sleeper.app/v1/league/${queryLeagueID}`, { compress: true }).catch((err) => {
    console.error(err);
  });
  const data = await res.json().catch((err) => {
    console.error(err);
  });
  if (res.ok) {
    leagueData.update((ld) => {
      ld[queryLeagueID] = data;
      return ld;
    });
    return data;
  } else {
    throw new Error(data);
  }
};
const getLeagueTeamManagers = async () => {
  if (get_store_value(teamManagersStore) && get_store_value(teamManagersStore).currentSeason) {
    return get_store_value(teamManagersStore);
  }
  let currentLeagueID = leagueID;
  let teamManagersMap = {};
  let finalUsers = {};
  let currentSeason = null;
  while (currentLeagueID && currentLeagueID != 0) {
    const [usersRaw, leagueData2, rostersRaw] = await waitForAll(
      fetch(`https://api.sleeper.app/v1/league/${currentLeagueID}/users`, { compress: true }),
      getLeagueData(currentLeagueID),
      fetch(`https://api.sleeper.app/v1/league/${currentLeagueID}/rosters`, { compress: true })
    ).catch((err) => {
      console.error(err);
    });
    const [users, rosters] = await waitForAll(
      usersRaw.json(),
      rostersRaw.json()
    ).catch((err) => {
      console.error(err);
    });
    const year = parseInt(leagueData2.season);
    currentLeagueID = leagueData2.previous_league_id;
    if (!currentSeason) {
      currentSeason = year;
    }
    teamManagersMap[year] = {};
    const processedUsers = processUsers(users);
    for (const processedUserKey in processedUsers) {
      if (finalUsers[processedUserKey])
        continue;
      finalUsers[processedUserKey] = processedUsers[processedUserKey];
    }
    for (const roster of rosters) {
      teamManagersMap[year][roster.roster_id] = {
        team: getTeamData(processedUsers, roster.owner_id),
        managers: getManagers(roster)
      };
    }
  }
  const response = {
    currentSeason,
    teamManagersMap,
    users: finalUsers
  };
  teamManagersStore.update(() => response);
  return response;
};
const processUsers = (rawUsers) => {
  let finalUsers = {};
  for (const user of rawUsers) {
    user.user_name = user.user_name ?? user.display_name;
    finalUsers[user.user_id] = user;
    const manager = managers.find((m) => m.managerID === user.user_id);
    if (manager) {
      finalUsers[user.user_id].display_name = manager.name;
    }
  }
  return finalUsers;
};
export {
  getLeagueData as a,
  getLeagueTeamManagers as g
};
