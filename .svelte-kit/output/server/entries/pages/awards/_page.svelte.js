import { c as create_ssr_component, j as escape, f as add_attribute, k as each, n as is_promise, p as noop, v as validate_component } from "../../../chunks/index3.js";
import "../../../chunks/index.svelte_svelte_type_style_lang.js";
import { w as waitForAll } from "../../../chunks/multiPromise.js";
import "../../../chunks/records.js";
import { b as getAvatarFromTeamManagers, c as getNestedTeamNamesFromTeamManagers } from "../../../chunks/universalFunctions.js";
import { L as LinearProgress } from "../../../chunks/LinearProgress.js";
import "fuzzyjs";
const css$1 = {
  code: ".svelte-1ctmzk0{color:var(--g555)}h3.svelte-1ctmzk0{margin:2.5em 0 1.5em}.awards.svelte-1ctmzk0{display:block;position:relative;width:100%;z-index:1}#podium.svelte-1ctmzk0{width:600px;height:500px;position:relative;margin:10px auto 30px}.podiumImage.svelte-1ctmzk0{position:absolute;bottom:0;left:0;width:100%;height:auto;z-index:3}.champ.svelte-1ctmzk0{position:absolute;width:20%;height:auto;transform:translate(-50%, -50%);border-radius:100%;border:1px solid var(--bbb);background-color:var(--fff)}.laurel.svelte-1ctmzk0{position:absolute;width:33%;height:auto;transform:translate(-50%, -50%);bottom:56.6%;left:50%;pointer-events:none}.first.svelte-1ctmzk0{bottom:70%;left:50%}.second.svelte-1ctmzk0{bottom:43%;left:20%}.third.svelte-1ctmzk0{bottom:39%;left:80%}h3.svelte-1ctmzk0{text-align:center}.leaderBlock.svelte-1ctmzk0{position:relative;width:80px;height:119px;margin:15px auto}.divisions.svelte-1ctmzk0{display:flex;justify-content:space-around}.divisionLeader.svelte-1ctmzk0{position:absolute;width:70px;height:70px;transform:translate(-50%, 0%);top:0;left:50%;border-radius:100%;border:1px solid var(--bbb);background-color:var(--fff);z-index:3}.medal.svelte-1ctmzk0{position:absolute;width:40px;height:auto;transform:translate(-50%, 0%);bottom:0;left:50%;z-index:2}.toiletBowl.svelte-1ctmzk0{position:relative;width:215px;height:190px;margin:10px auto}.toiletWinner.svelte-1ctmzk0{position:absolute;width:65px;height:65px;transform:translate(-50%, 0%);top:20px;left:55%;border-radius:100%;border:1px solid var(--bbb);z-index:3}.toilet.svelte-1ctmzk0{position:absolute;width:100%;height:auto;transform:translate(-50%, 0%);bottom:0;left:50%}.label.svelte-1ctmzk0{white-space:nowrap;line-height:1.1em;text-align:center;min-height:34px;display:flex;flex-direction:column;justify-content:center;position:absolute;transform:translate(-50%, -50%);padding:6px 30px;background-color:var(--fff);border:1px solid var(--bbb);box-shadow:0px 3px 3px -2px var(--boxShadowOne), 0px 3px 4px 0px var(--boxShadowTwo), 0px 1px 8px 0px var(--boxShadowThree)}.firstLabel.svelte-1ctmzk0{bottom:60%;left:50%}.secondLabel.svelte-1ctmzk0{bottom:40%;left:20%}.thirdLabel.svelte-1ctmzk0{bottom:36%;left:80%}.genLabel.svelte-1ctmzk0{white-space:nowrap;line-height:1.1em;min-height:34px;display:inline-flex;flex-direction:column;justify-content:center;text-align:center;margin:15px auto 20px;padding:6px 30px;background-color:var(--fff);border:1px solid var(--bbb);box-shadow:0px 3px 3px -2px var(--boxShadowOne), 0px 3px 4px 0px var(--boxShadowTwo), 0px 1px 8px 0px var(--boxShadowThree)}.division.svelte-1ctmzk0{text-align:center}.toiletParent.svelte-1ctmzk0{width:100%;text-align:center;padding:25px 0 40px;margin-top:30px;box-shadow:0 12px 9px -12px rgba(0,0,0,0.4)}.banner.svelte-1ctmzk0{display:block;width:65%;max-width:450px;margin:20px auto 0}.toilet-banner.svelte-1ctmzk0{display:block;width:50%;max-width:350px;margin:20px auto 0}.clickable.svelte-1ctmzk0{cursor:pointer}.curOwner{font-size:0.75em;color:var(--bbb);font-style:italic}@media(max-width: 680px){.label.svelte-1ctmzk0{padding:6px 8px}.genLabel.svelte-1ctmzk0{padding:6px 8px}}@media(max-width: 630px){.label.svelte-1ctmzk0{font-size:0.9em}.genLabel.svelte-1ctmzk0{font-size:0.9em}}@media(max-width: 610px){#podium.svelte-1ctmzk0{width:500px;height:417px;position:relative;margin:10px auto 30px}.firstLabel.svelte-1ctmzk0{bottom:58%}.secondLabel.svelte-1ctmzk0{bottom:35%}.thirdLabel.svelte-1ctmzk0{bottom:31%}}@media(max-width: 535px){.label.svelte-1ctmzk0{font-size:0.8em}.genLabel.svelte-1ctmzk0{font-size:0.8em}}@media(max-width: 520px){.label.svelte-1ctmzk0{font-size:0.7em;padding:2px 4px}.genLabel.svelte-1ctmzk0{font-size:0.7em;padding:2px 4px}}@media(max-width: 510px){#podium.svelte-1ctmzk0{width:400px;height:333px}}@media(max-width: 425px){.label.svelte-1ctmzk0{font-size:0.6em}.genLabel.svelte-1ctmzk0{font-size:0.6em}}@media(max-width: 410px){#podium.svelte-1ctmzk0{width:300px;height:250px}.firstLabel.svelte-1ctmzk0{bottom:53%}.secondLabel.svelte-1ctmzk0{bottom:31%}.thirdLabel.svelte-1ctmzk0{bottom:27%}}@media(max-width: 329px){.label.svelte-1ctmzk0{font-size:0.5em}.genLabel.svelte-1ctmzk0{font-size:0.5em}}",
  map: null
};
const Awards = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { podium, leagueTeamManagers } = $$props;
  const { year, champion, second, third, divisions, toilet } = podium;
  if ($$props.podium === void 0 && $$bindings.podium && podium !== void 0)
    $$bindings.podium(podium);
  if ($$props.leagueTeamManagers === void 0 && $$bindings.leagueTeamManagers && leagueTeamManagers !== void 0)
    $$bindings.leagueTeamManagers(leagueTeamManagers);
  $$result.css.add(css$1);
  return `<div class="awards svelte-1ctmzk0"><h3 class="svelte-1ctmzk0">${escape(year)} Awards</h3>

	<img src="/banner.png" class="banner svelte-1ctmzk0" alt="The Champion's Cup">

	<div id="podium" class="svelte-1ctmzk0"><img src="/podium.png" class="podiumImage svelte-1ctmzk0" alt="podium">

		
		<img${add_attribute("src", getAvatarFromTeamManagers(leagueTeamManagers, champion, year), 0)} class="first champ clickable svelte-1ctmzk0" alt="champion">
		<img src="/laurel.png" class="laurel svelte-1ctmzk0" alt="laurel">
		<span class="label firstLabel clickable svelte-1ctmzk0"><!-- HTML_TAG_START -->${getNestedTeamNamesFromTeamManagers(leagueTeamManagers, year, champion)}<!-- HTML_TAG_END --></span>

		<img${add_attribute("src", getAvatarFromTeamManagers(leagueTeamManagers, second, year), 0)} class="second champ clickable svelte-1ctmzk0" alt="2nd">
		<span class="label secondLabel clickable svelte-1ctmzk0"><!-- HTML_TAG_START -->${getNestedTeamNamesFromTeamManagers(leagueTeamManagers, year, second)}<!-- HTML_TAG_END --></span>

		<img${add_attribute("src", getAvatarFromTeamManagers(leagueTeamManagers, third, year), 0)} class="third champ clickable svelte-1ctmzk0" alt="3rd">
		<span class="label thirdLabel clickable svelte-1ctmzk0"><!-- HTML_TAG_START -->${getNestedTeamNamesFromTeamManagers(leagueTeamManagers, year, third)}<!-- HTML_TAG_END --></span></div>
	<div class="divisions svelte-1ctmzk0">${each(divisions, (division) => {
    return `${division.rosterID ? `<div class="division svelte-1ctmzk0">${division.name ? `<h6 class="svelte-1ctmzk0">${escape(division.name)} Division</h6>` : `<h6 class="svelte-1ctmzk0">Regular Season Champion</h6>`}
					<div class="leaderBlock svelte-1ctmzk0"><img${add_attribute("src", getAvatarFromTeamManagers(leagueTeamManagers, division.rosterID, year), 0)} class="divisionLeader clickable svelte-1ctmzk0" alt="${escape(division.name, true) + " champion"}">
						<img src="/medal.png" class="medal svelte-1ctmzk0" alt="champion"></div>
					<span class="genLabel clickable svelte-1ctmzk0"><!-- HTML_TAG_START -->${getNestedTeamNamesFromTeamManagers(leagueTeamManagers, year, division.rosterID)}<!-- HTML_TAG_END --></span>
				</div>` : ``}`;
  })}</div>

		
	${toilet ? `<div class="toiletParent svelte-1ctmzk0"><img src="/toilet-banner.png" class="toilet-banner svelte-1ctmzk0" alt="The Toilet Bowl">

			<div class="toiletBowl svelte-1ctmzk0"><img${add_attribute("src", getAvatarFromTeamManagers(leagueTeamManagers, toilet, year), 0)} class="toiletWinner clickable svelte-1ctmzk0" alt="toilet bowl winner">
				<img src="/toilet-bowl-2.png" class="toilet svelte-1ctmzk0" alt="toilet bowl"></div>
			<span class="genLabel clickable svelte-1ctmzk0"><!-- HTML_TAG_START -->${getNestedTeamNamesFromTeamManagers(leagueTeamManagers, year, toilet)}<!-- HTML_TAG_END --></span></div>` : ``}</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".awards.svelte-ocifrf{display:block;margin:30px auto;width:95%;max-width:1000px;position:relative;z-index:1;overflow-y:hidden}.loading.svelte-ocifrf{display:block;width:85%;max-width:500px;margin:80px auto}.nothingYet.svelte-ocifrf{display:block;width:85%;max-width:500px;margin:80px auto;text-align:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { awardsData, teamManagersData } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="awards svelte-ocifrf">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
		<div class="loading svelte-ocifrf"><p>Retrieving awards data...</p>
			${validate_component(LinearProgress, "LinearProgress").$$render($$result, { indeterminate: true }, {}, {})}</div>
	`;
    }
    return function([podiums, leagueTeamManagers]) {
      return `
		${podiums.length ? each(podiums, (podium) => {
        return `${validate_component(Awards, "Awards").$$render($$result, { podium, leagueTeamManagers }, {}, {})}`;
      }) : `<p class="nothingYet svelte-ocifrf">No seasons have been completed yet, so no awards have been earned...</p>`}
	`;
    }(__value);
  }(waitForAll(awardsData, teamManagersData))}</div>`;
});
export {
  Page as default
};
