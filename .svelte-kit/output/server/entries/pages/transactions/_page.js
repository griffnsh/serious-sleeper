import { g as getLeagueTransactions } from "../../../chunks/leagueTransactions.js";
import { g as getLeagueTeamManagers } from "../../../chunks/leagueTeamManagers.js";
import { l as loadPlayers } from "../../../chunks/players.js";
import "../../../chunks/records.js";
async function load({ url, fetch }) {
  const show = url?.searchParams?.get("show");
  const query = url?.searchParams?.get("query");
  const curPage = url?.searchParams?.get("page");
  const transactionsData = getLeagueTransactions(false);
  const leagueTeamManagersData = getLeagueTeamManagers();
  const playersData = loadPlayers(fetch);
  const bannedValued = [
    "undefined"
  ];
  const props = {
    show: "both",
    query: "",
    playersData,
    transactionsData,
    leagueTeamManagersData,
    page: 0
  };
  if (show && (show == "trade" || show == "waiver" || show == "both")) {
    props.show = show;
  }
  if (query && !bannedValued.includes(query)) {
    props.query = query;
  }
  if (curPage && !isNaN(curPage)) {
    props.page = parseInt(curPage) - 1;
  }
  return props;
}
export {
  load
};
