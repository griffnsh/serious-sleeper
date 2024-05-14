import * as universal from '../entries/pages/constitution/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/constitution/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/constitution/+page.js";
export const imports = ["_app/immutable/nodes/6.83ff7e2d.js","_app/immutable/chunks/index.78a9f0bb.js","_app/immutable/chunks/records.35358e58.js","_app/immutable/chunks/singletons.6c6633c9.js"];
export const stylesheets = ["_app/immutable/assets/6.51b22bdf.css"];
export const fonts = [];
