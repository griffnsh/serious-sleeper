import { a as getLeagueData, g as getLeagueTeamManagers } from "../../../chunks/leagueTeamManagers.js";
import { m as managers } from "../../../chunks/leagueInfo.js";
import { g as getLeagueTransactions } from "../../../chunks/leagueTransactions.js";
import { g as getLeagueRosters } from "../../../chunks/leagueRosters.js";
import { w as waitForAll } from "../../../chunks/multiPromise.js";
import { g as getLeagueRecords } from "../../../chunks/leagueRecords.js";
import { g as getAwards } from "../../../chunks/leagueAwards.js";
async function load({ url }) {
  if (!managers.length)
    return false;
  const managersInfo = waitForAll(
    getLeagueRosters(),
    getLeagueTeamManagers(),
    getLeagueData(),
    getLeagueTransactions(),
    getAwards(),
    getLeagueRecords()
  );
  const manager = url?.searchParams?.get("manager");
  const props = {
    manager: manager && manager < managers.length ? manager : -1,
    managers,
    managersInfo
  };
  return props;
}
export {
  load
};
