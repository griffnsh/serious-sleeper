import { g as getLeagueTeamManagers } from "../../../chunks/leagueTeamManagers.js";
import "../../../chunks/records.js";
import { g as getAwards } from "../../../chunks/leagueAwards.js";
async function load() {
  const awardsData = getAwards();
  const teamManagersData = getLeagueTeamManagers();
  return {
    awardsData,
    teamManagersData
  };
}
export {
  load
};
