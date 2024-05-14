import * as universal from '../entries/pages/awards/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/awards/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/awards/+page.js";
export const imports = ["_app/immutable/nodes/3.17264c23.js","_app/immutable/chunks/leagueTeamManagers.c0fc25fc.js","_app/immutable/chunks/records.35358e58.js","_app/immutable/chunks/singletons.6c6633c9.js","_app/immutable/chunks/index.78a9f0bb.js","_app/immutable/chunks/leagueAwards.24f3ff46.js","_app/immutable/chunks/leagueRosters.51b8caa5.js","_app/immutable/chunks/index.svelte_svelte_type_style_lang.1b9663cd.js","_app/immutable/chunks/LinearProgress.dc184101.js"];
export const stylesheets = ["_app/immutable/assets/3.b9b67f94.css","_app/immutable/assets/index.40cd6ed3.css"];
export const fonts = [];
