import { g as getLeagueTransactions } from "../../../chunks/leagueTransactions.js";
import { g as getLeagueTeamManagers } from "../../../chunks/leagueTeamManagers.js";
import { w as waitForAll } from "../../../chunks/multiPromise.js";
import { g as getLeagueRecords } from "../../../chunks/leagueRecords.js";
async function load() {
  const recordsInfo = waitForAll(
    getLeagueRecords(false),
    getLeagueTransactions(false),
    getLeagueTeamManagers()
  );
  return {
    recordsInfo
  };
}
export {
  load
};
