import { g as getLeagueTeamManagers, a as getLeagueData } from "../../../chunks/leagueTeamManagers.js";
import { w as waitForAll } from "../../../chunks/multiPromise.js";
import { g as getLeagueRosters } from "../../../chunks/leagueRosters.js";
import { l as loadPlayers } from "../../../chunks/players.js";
import "../../../chunks/records.js";
async function load({ fetch }) {
  const rostersInfo = waitForAll(
    getLeagueData(),
    getLeagueRosters(),
    getLeagueTeamManagers(),
    loadPlayers(fetch)
  );
  return {
    rostersInfo
  };
}
export {
  load
};
