import * as universal from '../entries/pages/blog/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/+page.js";
export const imports = ["_app/immutable/nodes/4.3a1a0c6e.js","_app/immutable/chunks/singletons.6c6633c9.js","_app/immutable/chunks/index.78a9f0bb.js","_app/immutable/chunks/records.35358e58.js","_app/immutable/chunks/index.svelte_svelte_type_style_lang.1b9663cd.js","_app/immutable/chunks/Pagination.500383e7.js","_app/immutable/chunks/index.fa858b0e.js","_app/immutable/chunks/AuthorAndDate.e94e1690.js","_app/immutable/chunks/LinearProgress.dc184101.js"];
export const stylesheets = ["_app/immutable/assets/4.9c4b8eb0.css","_app/immutable/assets/index.40cd6ed3.css"];
export const fonts = [];
