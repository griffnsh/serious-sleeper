import { m as managers } from "../../../chunks/leagueInfo.js";
import { g as getLeagueTeamManagers } from "../../../chunks/leagueTeamManagers.js";
import "../../../chunks/records.js";
async function load() {
  if (!managers.length)
    return { managers };
  const leagueTeamManagersData = getLeagueTeamManagers();
  const props = {
    managers,
    leagueTeamManagersData
  };
  return props;
}
export {
  load
};
