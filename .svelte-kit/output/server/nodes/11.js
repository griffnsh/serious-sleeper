import * as universal from '../entries/pages/records/_page.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/records/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/records/+page.js";
export const imports = ["_app/immutable/nodes/11.2667cd32.js","_app/immutable/chunks/leagueTransactions.e77c8e11.js","_app/immutable/chunks/leagueTeamManagers.c0fc25fc.js","_app/immutable/chunks/records.35358e58.js","_app/immutable/chunks/singletons.6c6633c9.js","_app/immutable/chunks/index.78a9f0bb.js","_app/immutable/chunks/nflState.5273b638.js","_app/immutable/chunks/leagueRecords.3915b659.js","_app/immutable/chunks/leagueRosters.51b8caa5.js","_app/immutable/chunks/leagueBrackets.dc679042.js","_app/immutable/chunks/LinearProgress.dc184101.js","_app/immutable/chunks/index.svelte_svelte_type_style_lang.1b9663cd.js","_app/immutable/chunks/index.efc83f0e.js","_app/immutable/chunks/Button.8b34f08b.js","_app/immutable/chunks/dispatch.297fbff5.js","_app/immutable/chunks/Ripple.7a04fcd3.js","_app/immutable/chunks/index.2d56c369.js","_app/immutable/chunks/prefixFilter.9aa1f37f.js","_app/immutable/chunks/BarChart.3a4f7399.js","_app/immutable/chunks/index.fa858b0e.js"];
export const stylesheets = ["_app/immutable/assets/11.da2ea604.css","_app/immutable/assets/index.40cd6ed3.css"];
export const fonts = [];
