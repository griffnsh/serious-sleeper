import { g as getLeagueTransactions } from "../../../chunks/leagueTransactions.js";
import { g as getLeagueTeamManagers } from "../../../chunks/leagueTeamManagers.js";
import { l as loadPlayers } from "../../../chunks/players.js";
import { g as getLeagueRecords } from "../../../chunks/leagueRecords.js";
async function load({ url, fetch }) {
  const playerOne = url?.searchParams?.get("player_one");
  const playerTwo = url?.searchParams?.get("player_two");
  return {
    leagueTeamManagerData: getLeagueTeamManagers(),
    playersData: loadPlayers(fetch),
    transactionsData: getLeagueTransactions(),
    recordsData: getLeagueRecords(),
    playerOne,
    playerTwo
  };
}
export {
  load
};
