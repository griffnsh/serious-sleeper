import * as universal from '../entries/pages/manager/_page.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/manager/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/manager/+page.js";
export const imports = ["_app/immutable/nodes/8.fa6c5daf.js","_app/immutable/chunks/leagueTeamManagers.c0fc25fc.js","_app/immutable/chunks/records.35358e58.js","_app/immutable/chunks/singletons.6c6633c9.js","_app/immutable/chunks/index.78a9f0bb.js","_app/immutable/chunks/leagueTransactions.e77c8e11.js","_app/immutable/chunks/nflState.5273b638.js","_app/immutable/chunks/leagueRosters.51b8caa5.js","_app/immutable/chunks/leagueRecords.3915b659.js","_app/immutable/chunks/leagueBrackets.dc679042.js","_app/immutable/chunks/leagueAwards.24f3ff46.js","_app/immutable/chunks/LinearProgress.dc184101.js","_app/immutable/chunks/index.svelte_svelte_type_style_lang.1b9663cd.js","_app/immutable/chunks/index.efc83f0e.js","_app/immutable/chunks/Button.8b34f08b.js","_app/immutable/chunks/dispatch.297fbff5.js","_app/immutable/chunks/Ripple.7a04fcd3.js","_app/immutable/chunks/players.cfc40ba6.js","_app/immutable/chunks/Roster.dc0ca74b.js","_app/immutable/chunks/index.2d56c369.js","_app/immutable/chunks/prefixFilter.9aa1f37f.js","_app/immutable/chunks/index.fa858b0e.js","_app/immutable/chunks/TransactionsPage.d9c91e96.js","_app/immutable/chunks/Icon.8d5b037f.js","_app/immutable/chunks/TradeTransaction.8191015c.js","_app/immutable/chunks/IconButton.4de2654b.js","_app/immutable/chunks/Pagination.500383e7.js","_app/immutable/chunks/WaiverTransaction.513ea3e4.js"];
export const stylesheets = ["_app/immutable/assets/8.811069c5.css","_app/immutable/assets/index.40cd6ed3.css"];
export const fonts = [];
