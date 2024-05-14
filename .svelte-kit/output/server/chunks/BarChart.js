import { c as create_ssr_component, j as escape, f as add_attribute, k as each, v as validate_component } from "./index3.js";
import { G as Group } from "./index7.js";
import { b as getAvatarFromTeamManagers, d as getTeamNameFromTeamManagers, r as round } from "./universalFunctions.js";
import "./index.svelte_svelte_type_style_lang.js";
import { B as Button_1 } from "./Button.js";
import { L as Label } from "./index4.js";
const css$1 = {
  code: ".opacity{opacity:0.3}.barParent.svelte-d32t8w{position:relative;margin-bottom:-10px;height:76px}.managerName.svelte-d32t8w{position:absolute;top:0;left:80px}.teamAvatar.svelte-d32t8w{position:absolute;left:20px;top:0;bottom:0;height:40px;margin:auto;border-radius:50%;border:2px solid;z-index:14;background-color:#fff}.statBars.svelte-d32t8w{display:flex;margin:0 auto}.leftSpacer.svelte-d32t8w{width:40px;height:1px;display:inline-block}.rightSpacer.svelte-d32t8w{width:20px;height:1px;display:inline-block}.bars.svelte-d32t8w{flex-grow:2;position:relative}.bar.svelte-d32t8w{height:1.8em;border-radius:0 0.9em 0.9em 0;z-index:10}.secondBar.svelte-d32t8w{position:absolute;top:0;z-index:11;left:0}.barLabel.svelte-d32t8w{z-index:12;vertical-align:text-top;margin-left:40px}.vCenter.svelte-d32t8w{display:block;height:1.8em;position:absolute;width:100%;top:0;bottom:0;margin:auto 0}.clickable.svelte-d32t8w{cursor:pointer}@media(max-width: 600px){.barParent.svelte-d32t8w{height:57px}.managerName.svelte-d32t8w{left:60px;font-size:0.8em}.teamAvatar.svelte-d32t8w{left:10px;height:30px}.barLabel.svelte-d32t8w{margin-left:30px;vertical-align:middle;font-size:0.8em}.leftSpacer.svelte-d32t8w{width:30px}.rightSpacer.svelte-d32t8w{width:10px}.bar.svelte-d32t8w{height:1.2em;border-radius:0 0.6em 0.6em 0}.vCenter.svelte-d32t8w{height:1.2em}}",
  map: null
};
const Bar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let user;
  let { leagueTeamManagers, stat, label, xMin, xMax, secondStat, managerID, rosterID, color, year } = $$props;
  if ($$props.leagueTeamManagers === void 0 && $$bindings.leagueTeamManagers && leagueTeamManagers !== void 0)
    $$bindings.leagueTeamManagers(leagueTeamManagers);
  if ($$props.stat === void 0 && $$bindings.stat && stat !== void 0)
    $$bindings.stat(stat);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.xMin === void 0 && $$bindings.xMin && xMin !== void 0)
    $$bindings.xMin(xMin);
  if ($$props.xMax === void 0 && $$bindings.xMax && xMax !== void 0)
    $$bindings.xMax(xMax);
  if ($$props.secondStat === void 0 && $$bindings.secondStat && secondStat !== void 0)
    $$bindings.secondStat(secondStat);
  if ($$props.managerID === void 0 && $$bindings.managerID && managerID !== void 0)
    $$bindings.managerID(managerID);
  if ($$props.rosterID === void 0 && $$bindings.rosterID && rosterID !== void 0)
    $$bindings.rosterID(rosterID);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.year === void 0 && $$bindings.year && year !== void 0)
    $$bindings.year(year);
  $$result.css.add(css$1);
  user = managerID ? leagueTeamManagers.users[managerID] : null;
  return `<div class="barParent svelte-d32t8w"><img alt="team avatar" style="${"border-color: var(" + escape(color, true) + ");"}" class="teamAvatar clickable svelte-d32t8w"${add_attribute(
    "src",
    user ? `https://sleepercdn.com/avatars/thumbs/${user.avatar}` : getAvatarFromTeamManagers(leagueTeamManagers, rosterID, year),
    0
  )}>
    <span class="managerName clickable svelte-d32t8w">${user ? `${escape(user.display_name)}` : `${rosterID ? `${escape(getTeamNameFromTeamManagers(leagueTeamManagers, rosterID, year))}` : ``}`}</span>
    <div class="vCenter svelte-d32t8w"><div class="statBars svelte-d32t8w"><div class="leftSpacer svelte-d32t8w"></div>
            <div class="bars svelte-d32t8w"><div class="${"bar" + escape(!secondStat ? "" : " opacity", true) + " svelte-d32t8w"}" style="${"background-color: var(" + escape(color, true) + "); width: " + escape((stat - xMin) / (xMax - xMin == 0 ? 1 : xMax - xMin) * 100, true) + "%;"}">${!secondStat ? `<span class="barLabel svelte-d32t8w">${escape(stat)}${escape(label)}</span>` : ``}</div>
                ${secondStat ? `<div class="bar secondBar svelte-d32t8w" style="${"background-color: var(" + escape(color, true) + "); width: " + escape((secondStat - xMin) / (xMax - xMin == 0 ? 1 : xMax - xMin) * 100, true) + "%;"}"><span class="barLabel svelte-d32t8w">${escape(secondStat)}  of  ${escape(stat)}  (${escape(round(secondStat / stat * 100))}%)</span></div>` : ``}</div>
            <div class="rightSpacer svelte-d32t8w"></div></div></div></div>`;
});
const css = {
  code: ".chartWrapper.svelte-10vz2um{background-color:var(--fff);padding:1em 0 0.5em;margin:0 auto;max-width:950px;box-shadow:0px 3px 3px -2px var(--boxShadowOne), 0px 3px 4px 0px var(--boxShadowTwo), 0px 1px 8px 0px var(--boxShadowThree)}.barChart.svelte-10vz2um{display:block;position:relative;width:100%;height:100%}h6.svelte-10vz2um{font-weight:400;width:100%;text-align:center;margin:0 0 1em}.buttonHolderG.svelte-10vz2um{text-align:center;margin:1em 0 2em}@media(max-width: 1000px){.chartWrapper.svelte-10vz2um{max-width:95%}}@media(max-width: 850px){.chartWrapper.svelte-10vz2um{max-width:100%}}@media(max-width: 525px){.buttonHolderG .selectionButtons{font-size:0.6em;height:32px}}@media(max-width: 505px){.buttonHolderG .selectionButtons{height:26px}}@media(max-width: 405px){.buttonHolderG .selectionButtons{font-size:0.5em;padding:0 6px}}@media(max-width: 260px){.buttonHolderG .selectionButtons{font-size:0.4em;padding:0 2px;height:24px;min-width:40px}}",
  map: null
};
const BarChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let xMin;
  let xMax;
  let stats;
  let secondStats;
  let managerIDs;
  let rosterIDs;
  let labels;
  let header;
  let year;
  let { graphs, leagueTeamManagers, curGraph = 0 } = $$props;
  const colors = [
    "--barChartOne",
    "--barChartTwo",
    "--barChartThree",
    "--barChartFour",
    "--barChartFive",
    "--barChartSix"
  ];
  if ($$props.graphs === void 0 && $$bindings.graphs && graphs !== void 0)
    $$bindings.graphs(graphs);
  if ($$props.leagueTeamManagers === void 0 && $$bindings.leagueTeamManagers && leagueTeamManagers !== void 0)
    $$bindings.leagueTeamManagers(leagueTeamManagers);
  if ($$props.curGraph === void 0 && $$bindings.curGraph && curGraph !== void 0)
    $$bindings.curGraph(curGraph);
  $$result.css.add(css);
  xMin = graphs[curGraph].secondStats.length > 0 ? graphs[curGraph].xMin / 3 : graphs[curGraph].xMin;
  xMax = graphs[curGraph].xMax;
  stats = graphs[curGraph].stats;
  secondStats = graphs[curGraph].secondStats;
  managerIDs = graphs[curGraph].managerIDs;
  rosterIDs = graphs[curGraph].rosterIDs;
  labels = graphs[curGraph].labels;
  header = graphs[curGraph].header;
  year = graphs[curGraph].year;
  return `<h6 class="svelte-10vz2um">${escape(header)}</h6>
<div class="chartWrapper svelte-10vz2um"><div class="barChart svelte-10vz2um">${each(managerIDs, (managerID, ix) => {
    return `${validate_component(Bar, "Bar").$$render(
      $$result,
      {
        leagueTeamManagers,
        managerID,
        rosterID: rosterIDs[ix],
        xMin,
        xMax,
        stat: stats[ix],
        secondStat: secondStats[ix],
        year,
        label: labels.stat,
        color: colors[ix % colors.length]
      },
      {},
      {}
    )}`;
  })}</div></div>

${graphs.length > 1 ? `<div class="buttonHolderG svelte-10vz2um">${validate_component(Group, "Group").$$render($$result, { variant: "outlined" }, {}, {
    default: () => {
      return `${each(graphs, (graph, ix) => {
        return `${ix < 4 ? `${validate_component(Button_1, "Button").$$render(
          $$result,
          {
            class: "selectionButtons",
            variant: curGraph == ix ? "raised" : "outlined"
          },
          {},
          {
            default: () => {
              return `${validate_component(Label, "Label").$$render($$result, {}, {}, {
                default: () => {
                  return `${escape(graph.short)}`;
                }
              })}
                    `;
            }
          }
        )}` : ``}`;
      })}`;
    }
  })}
        <br>
        ${validate_component(Group, "Group").$$render($$result, { variant: "outlined" }, {}, {
    default: () => {
      return `${each(graphs, (graph, ix) => {
        return `${ix > 3 ? `${validate_component(Button_1, "Button").$$render(
          $$result,
          {
            class: "selectionButtons",
            variant: curGraph == ix ? "raised" : "outlined"
          },
          {},
          {
            default: () => {
              return `${validate_component(Label, "Label").$$render($$result, {}, {}, {
                default: () => {
                  return `${escape(graph.short)}`;
                }
              })}
                    `;
            }
          }
        )}` : ``}`;
      })}`;
    }
  })}</div>` : ``}`;
});
export {
  BarChart as B
};
