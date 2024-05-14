import * as universal from '../entries/pages/standings/_page.js';

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/standings/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/standings/+page.js";
export const imports = ["_app/immutable/nodes/15.ec54dc07.js","_app/immutable/chunks/leagueTeamManagers.c0fc25fc.js","_app/immutable/chunks/records.35358e58.js","_app/immutable/chunks/singletons.6c6633c9.js","_app/immutable/chunks/index.78a9f0bb.js","_app/immutable/chunks/nflState.5273b638.js","_app/immutable/chunks/leagueRosters.51b8caa5.js","_app/immutable/chunks/index.svelte_svelte_type_style_lang.1b9663cd.js","_app/immutable/chunks/index.2d56c369.js","_app/immutable/chunks/dispatch.297fbff5.js","_app/immutable/chunks/prefixFilter.9aa1f37f.js","_app/immutable/chunks/LinearProgress.dc184101.js"];
export const stylesheets = ["_app/immutable/assets/15.0e4e8947.css","_app/immutable/assets/index.40cd6ed3.css"];
export const fonts = [];
