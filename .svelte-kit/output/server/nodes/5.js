import * as universal from '../entries/pages/blog/_slug_/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/5.038961ab.js","_app/immutable/chunks/singletons.6c6633c9.js","_app/immutable/chunks/index.78a9f0bb.js","_app/immutable/chunks/records.35358e58.js","_app/immutable/chunks/index.svelte_svelte_type_style_lang.1b9663cd.js","_app/immutable/chunks/LinearProgress.dc184101.js","_app/immutable/chunks/AuthorAndDate.e94e1690.js","_app/immutable/chunks/Icon.8d5b037f.js","_app/immutable/chunks/Ripple.7a04fcd3.js","_app/immutable/chunks/dispatch.297fbff5.js","_app/immutable/chunks/prefixFilter.9aa1f37f.js","_app/immutable/chunks/Button.8b34f08b.js","_app/immutable/chunks/index.fa858b0e.js","_app/immutable/chunks/focus-trap.609077c9.js"];
export const stylesheets = ["_app/immutable/assets/5.966478c0.css","_app/immutable/assets/index.40cd6ed3.css"];
export const fonts = [];
