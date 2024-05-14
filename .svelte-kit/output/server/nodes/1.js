

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.21867734.js","_app/immutable/chunks/index.78a9f0bb.js"];
export const stylesheets = ["_app/immutable/assets/1.86b4b023.css"];
export const fonts = [];
