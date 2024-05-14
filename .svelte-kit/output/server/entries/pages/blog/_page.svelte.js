import { c as create_ssr_component, f as add_attribute, j as escape, v as validate_component } from "../../../chunks/index3.js";
import "../../../chunks/index.svelte_svelte_type_style_lang.js";
import "../../../chunks/records.js";
import "fuzzyjs";
import { a as leagueName } from "../../../chunks/leagueInfo.js";
import { L as LinearProgress } from "../../../chunks/LinearProgress.js";
const css$1 = {
  code: "h2.svelte-7ftbrx{font-size:3em;text-align:center;margin-bottom:0.2em}.loading.svelte-7ftbrx{display:block;position:relative;z-index:1;width:85%;max-width:500px;margin:80px auto}.filter.svelte-7ftbrx{display:inline-flex;color:#fff;border-radius:2em;font-size:0.8em;padding:0.25em 1em}.noUnderline.svelte-7ftbrx{margin:0.5em;text-decoration:none}.filterClear.svelte-7ftbrx{background-color:#920505}.filterClear.svelte-7ftbrx:hover{background-color:#720404}.filterLink.svelte-7ftbrx{background-color:#00316b}.filterLink.svelte-7ftbrx:not(.noHover):hover{background-color:#0082c3}.noHover.svelte-7ftbrx{cursor:default}.filterButtons.svelte-7ftbrx{display:flex;flex-wrap:wrap;justify-content:center;margin:1em 0 3em}.filteringBy.svelte-7ftbrx{font-size:1em}",
  map: null
};
const perPage = 10;
const Posts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { postsData, leagueTeamManagersData, queryPage = 1, filterKey = "" } = $$props;
  let page = queryPage - 1;
  let allPosts = [];
  let posts = [];
  const filterPosts = (ap, fk) => {
    if (ap.length && fk != "") {
      posts = ap.filter((p) => p.fields.type == fk);
    } else {
      posts = ap;
    }
  };
  let el;
  if ($$props.postsData === void 0 && $$bindings.postsData && postsData !== void 0)
    $$bindings.postsData(postsData);
  if ($$props.leagueTeamManagersData === void 0 && $$bindings.leagueTeamManagersData && leagueTeamManagersData !== void 0)
    $$bindings.leagueTeamManagersData(leagueTeamManagersData);
  if ($$props.queryPage === void 0 && $$bindings.queryPage && queryPage !== void 0)
    $$bindings.queryPage(queryPage);
  if ($$props.filterKey === void 0 && $$bindings.filterKey && filterKey !== void 0)
    $$bindings.filterKey(filterKey);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      filterPosts(allPosts, filterKey);
    }
    posts.length;
    posts.slice(page * perPage, (page + 1) * perPage);
    $$rendered = `<h2 class="svelte-7ftbrx"${add_attribute("this", el, 0)}>${escape(leagueName)} Blog</h2>

${`<div class="loading svelte-7ftbrx"><p>Loading league blog posts...</p>
        ${validate_component(LinearProgress, "LinearProgress").$$render($$result, { indeterminate: true }, {}, {})}</div>`}`;
  } while (!$$settled);
  return $$rendered;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#main.svelte-v5y0of{position:relative;z-index:1;display:block;margin:30px auto;width:95%;max-width:1000px;overflow-y:hidden}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { postsData, queryPage, filterKey, leagueTeamManagersData } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div id="main" class="svelte-v5y0of">${validate_component(Posts, "Posts").$$render(
    $$result,
    {
      postsData,
      queryPage,
      filterKey,
      leagueTeamManagersData
    },
    {},
    {}
  )}</div>`;
});
export {
  Page as default
};
