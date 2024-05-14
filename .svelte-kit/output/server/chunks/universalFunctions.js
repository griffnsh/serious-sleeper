const QUESTION = "managers/question.jpg";
const cleanName = (name) => {
  return name.replace("Team ", "").toLowerCase().replace(/[ ’'!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~']/g, "");
};
const round = (num) => {
  if (typeof num == "string") {
    num = parseFloat(num);
  }
  return (Math.round((num + Number.EPSILON) * 100) / 100).toFixed(2);
};
const min = (stats, roundOverride, max2) => {
  const num = Math.min(...stats);
  let minAnswer = Math.floor(num / roundOverride) * roundOverride;
  if (max2 && num > 0) {
    let i = 0;
    while (minAnswer > 0 && (num - minAnswer) / (max2 - minAnswer) < 0.15) {
      minAnswer -= roundOverride;
      i++;
      if (i > 100) {
        break;
      }
    }
  }
  return minAnswer > 0 ? minAnswer : 0;
};
const max = (stats, roundOverride) => {
  const num = Math.max(...stats);
  return Math.ceil(num / roundOverride) * roundOverride;
};
const generateGraph = ({ stats, x, stat, header, field, short, secondField = null }, year, roundOverride = 10, xMinOverride = null) => {
  if (!stats) {
    return null;
  }
  const graph = {
    stats: [],
    secondStats: [],
    managerIDs: [],
    rosterIDs: [],
    labels: { x, stat },
    header,
    xMin: 0,
    xMax: 0,
    short,
    year
  };
  const sortedStats = [...stats].sort((a, b) => b[field] - a[field]);
  for (const indivStat of sortedStats) {
    graph.stats.push(indivStat[field]);
    if (secondField) {
      graph.secondStats.push(indivStat[secondField]);
    }
    if (indivStat.managerID) {
      graph.managerIDs.push(indivStat.managerID);
      graph.rosterIDs.push(null);
    } else if (indivStat.rosterID) {
      graph.managerIDs.push(null);
      graph.rosterIDs.push(indivStat.rosterID);
    }
  }
  graph.xMax = max(graph.stats, roundOverride);
  graph.xMin = min(graph.stats, roundOverride, graph.xMax);
  if (secondField) {
    graph.xMin = min(graph.secondStats, roundOverride, graph.xMax);
  }
  if (xMinOverride) {
    graph.xMin = xMinOverride;
  }
  return graph;
};
const sortHighAndLow = (arr, field) => {
  const sorted = arr.sort((a, b) => b[field] - a[field]);
  const high = sorted.slice(0, 10);
  const low = sorted.slice(-10).reverse();
  return [high, low];
};
const getManagers = (roster) => {
  const managers = [];
  if (roster.owner_id) {
    managers.push(roster.owner_id);
  }
  if (roster.co_owners) {
    for (const coOwner of roster.co_owners) {
      managers.push(coOwner);
    }
  }
  return managers;
};
const getTeamData = (users, ownerID) => {
  const user = users[ownerID];
  if (user) {
    return {
      avatar: user.metadata?.avatar ? user.metadata.avatar : `https://sleepercdn.com/avatars/thumbs/${user.avatar}`,
      name: user.metadata.team_name ? user.metadata.team_name : user.display_name
    };
  }
  return {
    avatar: `https://sleepercdn.com/images/v2/icons/player_default.webp`,
    name: "Unknown Team"
  };
};
const getAvatarFromTeamManagers = (teamManagers, rosterID, year) => {
  if (!year || year > teamManagers.currentSeason) {
    year = teamManagers.currentSeason;
  }
  const yearManagers = teamManagers.teamManagersMap[year];
  if (yearManagers == null) {
    return QUESTION;
  }
  const roster = yearManagers[rosterID];
  if (roster == null) {
    return QUESTION;
  }
  return roster.team?.avatar;
};
const getTeamNameFromTeamManagers = (teamManagers, rosterID, year) => {
  if (!year || year > teamManagers.currentSeason) {
    year = teamManagers.currentSeason;
  }
  return teamManagers.teamManagersMap[year][rosterID].team.name;
};
const renderManagerNames = (teamManagers, rosterID, year) => {
  if (!year || year > teamManagers.currentSeason) {
    year = teamManagers.currentSeason;
  }
  let managersString = "";
  for (const managerID of teamManagers.teamManagersMap[year][rosterID].managers) {
    const manager = teamManagers.users[managerID];
    if (manager) {
      if (managersString != "") {
        managersString += ", ";
      }
      managersString += manager.display_name;
    }
  }
  return managersString;
};
const getTeamFromTeamManagers = (teamManagers, rosterID, year) => {
  if (!year || year > teamManagers.currentSeason) {
    year = teamManagers.currentSeason;
  }
  return teamManagers.teamManagersMap[year][rosterID]["team"];
};
const getNestedTeamNamesFromTeamManagers = (teamManagers, year, rosterID) => {
  const originalName = teamManagers.teamManagersMap[year][rosterID]["team"]["name"];
  const currentName = teamManagers.teamManagersMap[teamManagers.currentSeason][rosterID]["team"]["name"];
  if (cleanName(originalName) != cleanName(currentName)) {
    return `${originalName}<div class="curOwner">(${currentName})</div>`;
  }
  return originalName;
};
const getDatesActive = (teamManagers, managerID) => {
  if (!managerID)
    return;
  let datesActive = { start: null, end: null };
  const years = Object.keys(teamManagers.teamManagersMap).sort((a, b) => b - a);
  for (const year of years) {
    for (const rosterID in teamManagers.teamManagersMap[year]) {
      if (teamManagers.teamManagersMap[year][rosterID].managers.indexOf(managerID) > -1) {
        datesActive.start = year;
        if (!datesActive.end) {
          datesActive.end = year;
        }
        break;
      }
    }
  }
  if (datesActive.end == teamManagers.currentSeason) {
    datesActive.end = null;
  }
  return datesActive;
};
const getRosterIDFromManagerID = (teamManagers, managerID) => {
  if (!managerID)
    return null;
  const years = Object.keys(teamManagers.teamManagersMap).sort((a, b) => b - a);
  for (const year of years) {
    for (const rosterID in teamManagers.teamManagersMap[year]) {
      if (teamManagers.teamManagersMap[year][rosterID].managers.indexOf(managerID) > -1) {
        return { rosterID, year };
      }
    }
  }
  return null;
};
const getRosterIDFromManagerIDAndYear = (teamManagers, managerID, year) => {
  if (!managerID || !year)
    return null;
  for (const rosterID in teamManagers.teamManagersMap[year]) {
    if (teamManagers.teamManagersMap[year][rosterID].managers.indexOf(managerID) > -1) {
      return rosterID;
    }
  }
  return null;
};
const checkIfManagerReceivedAward = (teamManagers, awardRosterID, year, managerID) => {
  if (!managerID)
    return false;
  return teamManagers.teamManagersMap[year][awardRosterID].managers.indexOf(managerID) > -1;
};
export {
  generateGraph as a,
  getAvatarFromTeamManagers as b,
  getNestedTeamNamesFromTeamManagers as c,
  getTeamNameFromTeamManagers as d,
  checkIfManagerReceivedAward as e,
  getDatesActive as f,
  getTeamFromTeamManagers as g,
  getRosterIDFromManagerID as h,
  renderManagerNames as i,
  getTeamData as j,
  getManagers as k,
  getRosterIDFromManagerIDAndYear as l,
  round as r,
  sortHighAndLow as s
};
