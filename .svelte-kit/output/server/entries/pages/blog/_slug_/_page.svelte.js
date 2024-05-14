import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index3.js";
import "../../../../chunks/index.svelte_svelte_type_style_lang.js";
import "../../../../chunks/records.js";
import "fuzzyjs";
import { L as LinearProgress } from "../../../../chunks/LinearProgress.js";
const css$1 = {
  code: ".post.svelte-14jt05k{background-color:var(--fff);border:1px solid var(--bbb);border-radius:1.5em;color:var(--g333);padding:1.5em 0 1em;margin:2em 0}h3.svelte-14jt05k{font-size:2em;text-align:center;margin:0}.body blockquote{margin:0.1em 0;border-left:3px solid rgb(231, 235, 238);margin:1em 2em;padding-left:0.875em}.body .heading-1{margin:0.4em 0;padding:0 2em;font-size:1.9em;text-align:center}.body .heading-2{margin:0.4em 0;padding:0 2em;font-size:1.8em;text-align:center}.body .heading-3{margin:0.4em 0;padding:0 2em;font-size:1.7em;text-align:center}.body .heading-4{margin:0.4em 0;padding:0 2em;font-size:1.6em;text-align:center}.body .heading-5{margin:0.4em 0;padding:0 2em;font-size:1.5em;text-align:center}.body .heading-6{margin:0.4em 0;padding:0 2em;font-size:1.4em;text-align:center}.body .bodyParagraph{margin:1em 0;padding:0 2em}.body ul{margin:1em 0;padding:0 2em 0 4em}.body ol{margin:1em 0;padding:0 2em 0 4em}.body .bodyParagraph a{color:var(--g111)}.body .blogImg{margin:1em 0;padding:0 2em;display:flex;justify-content:center}.body table{margin:1em 2em;min-width:80%;border:1px solid var(--ddd);border-collapse:collapse}.body tr:nth-child(odd){background-color:var(--ddd)}.body td{padding:0.5em 0;text-align:center}.body th{padding:0.8em 0;background-color:var(--blueOne);color:#fff}.divider.svelte-14jt05k{border:0;margin:0;width:100%;height:1px;background:var(--ddd);margin-bottom:1em}.commentDivider.svelte-14jt05k{margin:1em 0 0}.authorAndDate a{color:var(--g999)}.loading.svelte-14jt05k{display:block;width:85%;max-width:500px;margin:80px auto}",
  map: null
};
const FullPost = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { leagueTeamManagersData, postsData, postID } = $$props;
  if ($$props.leagueTeamManagersData === void 0 && $$bindings.leagueTeamManagersData && leagueTeamManagersData !== void 0)
    $$bindings.leagueTeamManagersData(leagueTeamManagersData);
  if ($$props.postsData === void 0 && $$bindings.postsData && postsData !== void 0)
    $$bindings.postsData(postsData);
  if ($$props.postID === void 0 && $$bindings.postID && postID !== void 0)
    $$bindings.postID(postID);
  $$result.css.add(css$1);
  return `

${`
    <div class="loading svelte-14jt05k"><p>Loading Blog Post...</p>
        ${validate_component(LinearProgress, "LinearProgress").$$render($$result, { indeterminate: true }, {}, {})}</div>`}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#main.svelte-sdyy6e{position:relative;z-index:1;display:block;margin:30px auto;width:95%;max-width:1000px;overflow-y:hidden}.center.svelte-sdyy6e{text-align:center;margin-bottom:2em}.viewAll.svelte-sdyy6e{text-decoration:none;background-color:#920505;color:#fff;border-radius:1em;padding:0.5em 1em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { postsData, postID, leagueTeamManagersData } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div id="main" class="svelte-sdyy6e">${validate_component(FullPost, "FullPost").$$render(
    $$result,
    {
      postsData,
      postID,
      leagueTeamManagersData
    },
    {},
    {}
  )}
    <div class="center svelte-sdyy6e"><a class="viewAll svelte-sdyy6e" href="/blog">View More Blog Posts</a></div></div>`;
});
export {
  Page as default
};
