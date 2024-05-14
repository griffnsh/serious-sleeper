import { w as writable } from "./index2.js";
const awards = writable({});
const leagueData = writable({});
const upcomingDraft = writable({});
const previousDrafts = writable([]);
const matchupsStore = writable({});
const records = writable({});
const rostersStore = writable({});
const transactionsStore = writable({});
const teamManagersStore = writable({});
const nflState = writable({});
const players = writable({});
const news = writable([]);
const brackets = writable({});
const standingsStore = writable({});
export {
  awards as a,
  nflState as b,
  players as c,
  transactionsStore as d,
  records as e,
  brackets as f,
  leagueData as l,
  matchupsStore as m,
  news as n,
  previousDrafts as p,
  rostersStore as r,
  standingsStore as s,
  teamManagersStore as t,
  upcomingDraft as u
};
