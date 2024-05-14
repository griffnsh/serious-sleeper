import * as universal from '../entries/pages/drafts/_page.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/drafts/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/drafts/+page.js";
export const imports = ["_app/immutable/nodes/7.cbb07409.js","_app/immutable/chunks/leagueTeamManagers.c0fc25fc.js","_app/immutable/chunks/records.35358e58.js","_app/immutable/chunks/singletons.6c6633c9.js","_app/immutable/chunks/index.78a9f0bb.js","_app/immutable/chunks/players.cfc40ba6.js","_app/immutable/chunks/leagueRosters.51b8caa5.js","_app/immutable/chunks/index.svelte_svelte_type_style_lang.1b9663cd.js","_app/immutable/chunks/LinearProgress.dc184101.js","_app/immutable/chunks/index.2d56c369.js","_app/immutable/chunks/dispatch.297fbff5.js","_app/immutable/chunks/prefixFilter.9aa1f37f.js"];
export const stylesheets = ["_app/immutable/assets/7.fa8ed426.css","_app/immutable/assets/index.40cd6ed3.css"];
export const fonts = [];
