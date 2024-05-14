import * as universal from '../entries/pages/managers/_page.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/managers/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/managers/+page.js";
export const imports = ["_app/immutable/nodes/9.4ccc2771.js","_app/immutable/chunks/records.35358e58.js","_app/immutable/chunks/singletons.6c6633c9.js","_app/immutable/chunks/index.78a9f0bb.js","_app/immutable/chunks/leagueTeamManagers.c0fc25fc.js","_app/immutable/chunks/LinearProgress.dc184101.js","_app/immutable/chunks/index.svelte_svelte_type_style_lang.1b9663cd.js"];
export const stylesheets = ["_app/immutable/assets/8.811069c5.css","_app/immutable/assets/index.40cd6ed3.css"];
export const fonts = [];
