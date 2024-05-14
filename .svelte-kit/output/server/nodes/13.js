import * as universal from '../entries/pages/rivalry/_page.js';

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/rivalry/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/rivalry/+page.js";
export const imports = ["_app/immutable/nodes/13.6b5b53af.js","_app/immutable/chunks/leagueTransactions.e77c8e11.js","_app/immutable/chunks/leagueTeamManagers.c0fc25fc.js","_app/immutable/chunks/records.35358e58.js","_app/immutable/chunks/singletons.6c6633c9.js","_app/immutable/chunks/index.78a9f0bb.js","_app/immutable/chunks/nflState.5273b638.js","_app/immutable/chunks/players.cfc40ba6.js","_app/immutable/chunks/leagueRecords.3915b659.js","_app/immutable/chunks/leagueRosters.51b8caa5.js","_app/immutable/chunks/leagueBrackets.dc679042.js","_app/immutable/chunks/LinearProgress.dc184101.js","_app/immutable/chunks/index.svelte_svelte_type_style_lang.1b9663cd.js","_app/immutable/chunks/Matchup.b2ed9cec.js","_app/immutable/chunks/TradeTransaction.8191015c.js","_app/immutable/chunks/IconButton.4de2654b.js","_app/immutable/chunks/dispatch.297fbff5.js","_app/immutable/chunks/Ripple.7a04fcd3.js"];
export const stylesheets = ["_app/immutable/assets/13.0e732ec4.css","_app/immutable/assets/index.40cd6ed3.css"];
export const fonts = [];
