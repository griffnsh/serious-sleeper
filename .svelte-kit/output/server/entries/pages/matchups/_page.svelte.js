import { c as create_ssr_component, v as validate_component } from "../../../chunks/index3.js";
import "../../../chunks/index.svelte_svelte_type_style_lang.js";
import "../../../chunks/records.js";
import "fuzzyjs";
import { L as LinearProgress } from "../../../chunks/LinearProgress.js";
const css$1 = {
  code: ".message.svelte-kb9n9i{display:block;width:85%;max-width:500px;margin:80px auto}.buttonHolder.svelte-kb9n9i{display:flex;flex-direction:column;align-items:center;margin:3em 0}",
  map: null
};
const MatchupsAndBrackets = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { queryWeek, leagueTeamManagersData, matchupsData, bracketsData, playersData } = $$props;
  if ($$props.queryWeek === void 0 && $$bindings.queryWeek && queryWeek !== void 0)
    $$bindings.queryWeek(queryWeek);
  if ($$props.leagueTeamManagersData === void 0 && $$bindings.leagueTeamManagersData && leagueTeamManagersData !== void 0)
    $$bindings.leagueTeamManagersData(leagueTeamManagersData);
  if ($$props.matchupsData === void 0 && $$bindings.matchupsData && matchupsData !== void 0)
    $$bindings.matchupsData(matchupsData);
  if ($$props.bracketsData === void 0 && $$bindings.bracketsData && bracketsData !== void 0)
    $$bindings.bracketsData(bracketsData);
  if ($$props.playersData === void 0 && $$bindings.playersData && playersData !== void 0)
    $$bindings.playersData(playersData);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${`
    <div class="message svelte-kb9n9i"><p>Loading league matchups...</p>
        ${validate_component(LinearProgress, "LinearProgress").$$render($$result, { indeterminate: true }, {}, {})}</div>`}`;
  } while (!$$settled);
  return $$rendered;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#main.svelte-19dg7xs{position:relative;z-index:1}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { queryWeek, matchupsData, bracketsData, playersData, leagueTeamManagersData } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div id="main" class="svelte-19dg7xs">${validate_component(MatchupsAndBrackets, "MatchupsAndBrackets").$$render(
    $$result,
    {
      queryWeek,
      matchupsData,
      bracketsData,
      playersData,
      leagueTeamManagersData
    },
    {},
    {}
  )}</div>`;
});
export {
  Page as default
};
