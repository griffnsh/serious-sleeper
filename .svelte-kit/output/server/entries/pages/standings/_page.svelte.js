import { c as create_ssr_component, j as escape, v as validate_component } from "../../../chunks/index3.js";
import "../../../chunks/index.svelte_svelte_type_style_lang.js";
import "../../../chunks/records.js";
import "fuzzyjs";
import { a as leagueName } from "../../../chunks/leagueInfo.js";
import { L as LinearProgress } from "../../../chunks/LinearProgress.js";
const css$1 = {
  code: ".loading.svelte-coyrw9{display:block;width:85%;max-width:500px;margin:80px auto}.center{text-align:center}.wrappable{white-space:normal;line-height:1.2em}h1.svelte-coyrw9{font-size:2.2em;line-height:1.3em;margin:1.5em 0 2em}.standingsTable.svelte-coyrw9{max-width:100%;overflow-x:scroll;margin:0.5em 0 5em}",
  map: null
};
const Standings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { standingsData, leagueTeamManagersData } = $$props;
  if ($$props.standingsData === void 0 && $$bindings.standingsData && standingsData !== void 0)
    $$bindings.standingsData(standingsData);
  if ($$props.leagueTeamManagersData === void 0 && $$bindings.leagueTeamManagersData && leagueTeamManagersData !== void 0)
    $$bindings.leagueTeamManagersData(leagueTeamManagersData);
  $$result.css.add(css$1);
  return `



<h1 class="svelte-coyrw9">${escape("")} ${escape(leagueName)} Standings</h1>

${`
    <div class="loading svelte-coyrw9"><p>Loading Standings...</p>
        ${validate_component(LinearProgress, "LinearProgress").$$render($$result, { indeterminate: true }, {}, {})}</div>`}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".holder.svelte-131ijax{position:relative;z-index:1;text-align:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { standingsData, leagueTeamManagersData } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="holder svelte-131ijax">${validate_component(Standings, "Standings").$$render($$result, { standingsData, leagueTeamManagersData }, {}, {})}</div>`;
});
export {
  Page as default
};
