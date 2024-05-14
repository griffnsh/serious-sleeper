import * as universal from '../entries/pages/resources/_page.js';

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/resources/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/resources/+page.js";
export const imports = ["_app/immutable/nodes/12.01a2b491.js","_app/immutable/chunks/singletons.6c6633c9.js","_app/immutable/chunks/index.78a9f0bb.js","_app/immutable/chunks/records.35358e58.js","_app/immutable/chunks/LinearProgress.dc184101.js","_app/immutable/chunks/index.svelte_svelte_type_style_lang.1b9663cd.js","_app/immutable/chunks/Pagination.500383e7.js","_app/immutable/chunks/index.fa858b0e.js","_app/immutable/chunks/index.0ed6abb3.js","_app/immutable/chunks/dispatch.297fbff5.js","_app/immutable/chunks/Ripple.7a04fcd3.js"];
export const stylesheets = ["_app/immutable/assets/12.6c21b1e1.css","_app/immutable/assets/index.40cd6ed3.css"];
export const fonts = [];
