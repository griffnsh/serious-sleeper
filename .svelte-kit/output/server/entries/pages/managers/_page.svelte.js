import { c as create_ssr_component, f as add_attribute, j as escape, k as each, v as validate_component, n as is_promise, p as noop } from "../../../chunks/index3.js";
import { L as LinearProgress } from "../../../chunks/LinearProgress.js";
import "../../../chunks/index.svelte_svelte_type_style_lang.js";
import "../../../chunks/records.js";
import "fuzzyjs";
import { a as leagueName } from "../../../chunks/leagueInfo.js";
import { f as getDatesActive, h as getRosterIDFromManagerID, d as getTeamNameFromTeamManagers } from "../../../chunks/universalFunctions.js";
const css$2 = {
  code: ".manager.svelte-1svieuk{display:flex;justify-content:left;align-items:center;padding:1em 0;background-color:var(--fff);background-repeat:no-repeat;background-position:15% 50%;margin:0.5em 0;border-radius:2em;border:1px solid var(--ccc);box-shadow:0 0 6px 0 var(--bbb);cursor:pointer}.manager.svelte-1svieuk:hover{box-shadow:0 0 10px 0 bar(--g999);background-color:bar(--eee)}.photo.svelte-1svieuk{height:40px;width:40px;border-radius:100%;vertical-align:middle;margin-left:1em;box-shadow:0 0 2px 1px var(--bbb)}.name.svelte-1svieuk{text-align:center;display:inline-block;color:var(--g555);line-height:1.2em;margin-left:1em;font-weight:700}.team.svelte-1svieuk{text-align:center;display:inline-block;font-style:italic;line-height:1.2em;color:var(--g555);font-weight:300;margin-left:1em}.spacer.svelte-1svieuk{flex-grow:1}.info.svelte-1svieuk{display:flex}.infoSlot.svelte-1svieuk{text-align:center;margin:0 0.5em;width:63px}.infoIcon.svelte-1svieuk{display:inline-flex;height:40px;width:40px;justify-content:center;align-items:center;border-radius:100%;border:1px solid #ccc;overflow:hidden;background-color:var(--fff)}.infoImg.svelte-1svieuk{height:30px}.infoAnswer.svelte-1svieuk{font-size:0.8em;color:var(--g555);width:63px;text-align:center;line-height:1.2em}.avatarHolder.svelte-1svieuk{display:inline-flex;position:relative}.commissionerBadge.svelte-1svieuk{display:flex;justify-content:center;align-items:center;position:absolute;bottom:-10px;right:-10px;height:25px;width:25px;font-weight:600;border-radius:15px;background-color:var(--blueTwo);border:1px solid var(--blueOne);color:#fff}@media(max-width: 665px){.name.svelte-1svieuk{font-size:0.9em;margin-left:0.5em}.team.svelte-1svieuk{font-size:0.8em;margin-left:0.5em}}@media(max-width: 595px){.manager.svelte-1svieuk{padding:0.5em 0;margin:0.3em 0;border-radius:1.5em}.photo.svelte-1svieuk{height:30px;width:30px;margin-left:0.5em}.commissionerBadge.svelte-1svieuk{height:15px;width:15px;font-size:0.8em}.infoSlot.svelte-1svieuk{text-align:center;margin:0 0.4em;width:56px}.infoIcon.svelte-1svieuk{height:30px;width:30px}.infoImg.svelte-1svieuk{height:25px}.infoAnswer.svelte-1svieuk{font-size:0.7em;width:56px}}@media(max-width: 475px){.name.svelte-1svieuk{font-size:0.8em;margin-left:0.4em}.team.svelte-1svieuk{font-size:0.7em;margin-left:0.4em}.photo.svelte-1svieuk{height:25px;width:25px}.infoSlot.svelte-1svieuk{text-align:center;margin:0 0.4em;width:49px}.infoIcon.svelte-1svieuk{height:25px;width:25px}.infoImg.svelte-1svieuk{height:22px}.infoAnswer.svelte-1svieuk{font-size:0.6em;width:49px}}@media(max-width: 370px){.infoTeam.svelte-1svieuk{display:none}}.question.svelte-1svieuk{background-color:#fff}",
  map: null
};
const ManagerRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { manager, leagueTeamManagers, key } = $$props;
  let retired = false;
  let rosterID = manager.roster;
  let year = null;
  if (manager.managerID) {
    const dates = getDatesActive(leagueTeamManagers, manager.managerID);
    if (dates.end)
      retired = true;
    ({ rosterID, year } = getRosterIDFromManagerID(leagueTeamManagers, manager.managerID) || { rosterID, year });
  }
  const commissioner = manager.managerID ? leagueTeamManagers.users[manager.managerID].is_owner : false;
  if ($$props.manager === void 0 && $$bindings.manager && manager !== void 0)
    $$bindings.manager(manager);
  if ($$props.leagueTeamManagers === void 0 && $$bindings.leagueTeamManagers && leagueTeamManagers !== void 0)
    $$bindings.leagueTeamManagers(leagueTeamManagers);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  $$result.css.add(css$2);
  return `<div class="manager svelte-1svieuk"${add_attribute(
    "style",
    retired ? "background-image: url(/retired.png); background-color: var(--ddd)" : "",
    0
  )}><div class="avatarHolder svelte-1svieuk"><img class="photo svelte-1svieuk"${add_attribute("src", manager.photo, 0)}${add_attribute("alt", manager.name, 0)}>
        ${commissioner ? `<div class="commissionerBadge svelte-1svieuk"><span>C</span></div>` : ``}</div>
    <div class="name svelte-1svieuk">${escape(manager.name)}</div>
    <div class="team svelte-1svieuk">${escape(getTeamNameFromTeamManagers(leagueTeamManagers, rosterID, year))}</div>
    <div class="spacer svelte-1svieuk"></div>
    <div class="info svelte-1svieuk">
        <div class="infoSlot infoTeam svelte-1svieuk">${manager.favoriteTeam ? `<div class="infoIcon svelte-1svieuk"><img class="infoImg svelte-1svieuk" src="${"https://sleepercdn.com/images/team_logos/nfl/" + escape(manager.favoriteTeam, true) + ".png"}" alt="favorite team"></div>` : `<div class="infoIcon question svelte-1svieuk"><img class="infoImg svelte-1svieuk" src="/managers/question.jpg" alt="favorite team"></div>`}</div>
        
        <div class="infoSlot svelte-1svieuk">${manager.preferredContact ? `<div class="infoIcon svelte-1svieuk"><img class="infoImg svelte-1svieuk" src="${"/" + escape(manager.preferredContact, true) + ".png"}"${add_attribute("alt", manager.preferredContact, 0)}></div>
                <div class="infoAnswer svelte-1svieuk">${escape(manager.preferredContact)}</div>` : `<div class="infoIcon question svelte-1svieuk"><img class="infoImg svelte-1svieuk" src="/managers/question.jpg" alt="favorite team"></div>`}</div>
        
        ${`<div class="infoSlot infoRebuild svelte-1svieuk">${manager.mode ? `<div class="infoIcon svelte-1svieuk"><img class="infoImg svelte-1svieuk" src="${"/" + escape(manager.mode.replace(" ", "%20"), true) + ".png"}" alt="win now or rebuild"></div>
                    <div class="infoAnswer svelte-1svieuk">${escape(manager.mode)}</div>` : `<div class="infoIcon question svelte-1svieuk"><img class="infoImg svelte-1svieuk" src="/managers/question.jpg" alt="favorite team"></div>`}</div>`}</div></div>`;
});
const css$1 = {
  code: ".managerContainer.svelte-168w153{width:100%;margin:2em 0 5em}.managerConstrained.svelte-168w153{width:97%;max-width:800px;margin:0 auto}h2.svelte-168w153{text-align:center;font-size:2.8em;margin:2em 0 1.5em;line-height:1em}@media(max-width: 520px){h2.svelte-168w153{text-align:center;font-size:2em;margin:1.5em 0 1em;line-height:1em}}",
  map: null
};
const AllManagers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { managers, leagueTeamManagers } = $$props;
  if ($$props.managers === void 0 && $$bindings.managers && managers !== void 0)
    $$bindings.managers(managers);
  if ($$props.leagueTeamManagers === void 0 && $$bindings.leagueTeamManagers && leagueTeamManagers !== void 0)
    $$bindings.leagueTeamManagers(leagueTeamManagers);
  $$result.css.add(css$1);
  return `



<div class="managerContainer svelte-168w153"><h2 class="svelte-168w153">${escape(leagueName)} Managers</h2>
    <div class="managerConstrained svelte-168w153">${each(managers, (manager, key) => {
    return `${validate_component(ManagerRow, "ManagerRow").$$render($$result, { manager, leagueTeamManagers, key }, {}, {})}`;
  })}</div></div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".main.svelte-70pmkv{position:relative;z-index:1}.loading.svelte-70pmkv{display:block;width:85%;max-width:500px;margin:80px auto}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { managers, leagueTeamManagersData } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="main svelte-70pmkv">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
        
        <div class="loading svelte-70pmkv"><p>Retrieving managers...</p>
            ${validate_component(LinearProgress, "LinearProgress").$$render($$result, { indeterminate: true }, {}, {})}</div>
    `;
    }
    return function(leagueTeamManagers) {
      return `
        ${managers.length ? `${validate_component(AllManagers, "AllManagers").$$render($$result, { managers, leagueTeamManagers }, {}, {})}` : ``}
    `;
    }(__value);
  }(leagueTeamManagersData)}</div>`;
});
export {
  Page as default
};
