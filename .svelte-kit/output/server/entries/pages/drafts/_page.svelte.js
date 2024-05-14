import { c as create_ssr_component, v as validate_component, k as each, j as escape, f as add_attribute, n as is_promise, p as noop } from "../../../chunks/index3.js";
import "../../../chunks/index.svelte_svelte_type_style_lang.js";
import "../../../chunks/records.js";
import "fuzzyjs";
import { w as waitForAll } from "../../../chunks/multiPromise.js";
import { L as LinearProgress } from "../../../chunks/LinearProgress.js";
import { R as Row, C as Cell, D as DataTable, H as Head, B as Body } from "../../../chunks/index6.js";
import { d as getTeamNameFromTeamManagers, b as getAvatarFromTeamManagers } from "../../../chunks/universalFunctions.js";
const css$3 = {
  code: ".draftCell{position:relative}.changedHands{background-color:var(--draftSwapped)}.draftPos.svelte-1a7exod{position:absolute;top:0.3em;left:0.3em;font-style:italic;color:#aaa}.draftPosPrev.svelte-1a7exod{position:absolute;top:0.1em;left:0.1em;font-style:italic;color:#444}.newOwner.svelte-1a7exod{font-style:italic;color:#444;text-align:center;white-space:break-spaces;line-height:1.2em}.prevQB{background-color:var(--QBfade)}.prevWR{background-color:var(--WRfade)}.prevRB{background-color:var(--RBfade)}.prevTE{background-color:var(--TEfade)}.prevK{background-color:var(--Kfade)}.prevDEF{background-color:var(--DEfadeFfade)}.prevCB{background-color:var(--CBfade)}.prevSS{background-color:var(--SSfade)}.prevFS{background-color:var(--FSfade)}.prevDE{background-color:var(--DEfade)}.prevDL{background-color:var(--DLfade)}.prevLB{background-color:var(--LBfade)}.playerAvatar.svelte-1a7exod{display:inline-block;position:absolute;transform:translate(-50%, -50%);left:50%;top:45%;height:25px;width:25px;background-position:center;border-radius:100%;background-repeat:no-repeat;background-size:auto 25px}.name.svelte-1a7exod{display:block;width:100%;text-align:center;position:absolute;left:0;white-space:break-spaces;line-height:1em;bottom:0.5em;color:rgba(0, 0, 0, 0.87)}",
  map: null
};
const DraftRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { draftRow, draftType, row, reversalRound, previous = false, players, year, leagueTeamManagers } = $$props;
  if ($$props.draftRow === void 0 && $$bindings.draftRow && draftRow !== void 0)
    $$bindings.draftRow(draftRow);
  if ($$props.draftType === void 0 && $$bindings.draftType && draftType !== void 0)
    $$bindings.draftType(draftType);
  if ($$props.row === void 0 && $$bindings.row && row !== void 0)
    $$bindings.row(row);
  if ($$props.reversalRound === void 0 && $$bindings.reversalRound && reversalRound !== void 0)
    $$bindings.reversalRound(reversalRound);
  if ($$props.previous === void 0 && $$bindings.previous && previous !== void 0)
    $$bindings.previous(previous);
  if ($$props.players === void 0 && $$bindings.players && players !== void 0)
    $$bindings.players(players);
  if ($$props.year === void 0 && $$bindings.year && year !== void 0)
    $$bindings.year(year);
  if ($$props.leagueTeamManagers === void 0 && $$bindings.leagueTeamManagers && leagueTeamManagers !== void 0)
    $$bindings.leagueTeamManagers(leagueTeamManagers);
  $$result.css.add(css$3);
  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${each(draftRow, (draftCol, col) => {
        return `${!previous || draftCol ? `${validate_component(Cell, "Cell").$$render(
          $$result,
          {
            class: "draftCell" + (draftCol ? " changedHands" : "") + (previous ? ` prev${players[draftCol.player].pos}` : "")
          },
          {},
          {
            default: () => {
              return `<span class="${"draftPos" + escape(previous ? "Prev" : "", true) + " svelte-1a7exod"}">${draftType == "auction" && previous ? `$${escape(draftCol.amount)}` : `${draftType == "snake" && !reversalRound ? `${escape(row)}.${escape(row % 2 == 0 ? draftRow.length - col : col + 1)}${escape(draftCol?.newOwner ? ` ${getTeamNameFromTeamManagers(leagueTeamManagers, draftCol.newOwner, year)}` : "")}` : `${draftType == "snake" && reversalRound ? `${row < reversalRound && row % 2 == 0 || row >= reversalRound && row % 2 == 1 ? `${escape(row)}.${escape(draftRow.length - col)}` : `${escape(row)}.${escape(col + 1)}`}
                        ${escape(draftCol?.newOwner ? ` ${getTeamNameFromTeamManagers(leagueTeamManagers, draftCol.newOwner, year)}` : "")}` : `${!reversalRound || row < reversalRound ? `${escape(row)}.${escape(col + 1)}${escape(draftCol?.newOwner ? ` ${getTeamNameFromTeamManagers(leagueTeamManagers, draftCol.newOwner, year)}` : "")}` : `${escape(row)}.${escape(draftRow.length - col)}${escape(draftCol?.newOwner ? ` ${getTeamNameFromTeamManagers(leagueTeamManagers, draftCol.newOwner, year)}` : "")}`}`}`}`}</span>
                ${draftCol && !previous ? `<div class="newOwner svelte-1a7exod">${escape(getTeamNameFromTeamManagers(leagueTeamManagers, draftCol))}</div>` : ``}
                ${previous ? `<div class="playerAvatar svelte-1a7exod"${add_attribute(
                "style",
                players[draftCol.player].pos == "DEF" ? `background-image: url(https://sleepercdn.com/images/team_logos/nfl/${draftCol.player.toLowerCase()}.png)` : `background-image: url(https://sleepercdn.com/content/nfl/players/thumb/${draftCol.player}.jpg), url(https://sleepercdn.com/images/v2/icons/player_default.webp)`,
                0
              )}></div>
                    <br>
                    <div class="name svelte-1a7exod">${escape(`${players[draftCol.player].fn} ${players[draftCol.player].ln}`)}${escape(players[draftCol.player].pos == "DEF" ? "" : ` (${players[draftCol.player].t})`)}</div>` : ``}
            `;
            }
          }
        )}` : ``}`;
      })}`;
    }
  })}`;
});
const css$2 = {
  code: ".accuracy.svelte-uyxuaj{display:block;width:80%;max-width:800px;margin:2em auto 3em}.accuracyText.svelte-uyxuaj{font-size:0.7em;color:#666}.disclaimer.svelte-uyxuaj{font-style:italic;color:#888}.draftBoard{display:block;width:95%;margin:2em auto 3em;overflow-x:auto}.draftTeam{font-size:0.8em;text-align:center;padding:5px 0;background-color:var(--transactHeader);white-space:break-spaces;line-height:1em;height:5em;vertical-align:initial}.draftBoard table{border-collapse:collapse;table-layout:fixed;width:100%;min-width:1200px}.draftBoard td{border-right:1px solid #ddd;height:7em;font-size:0.7em}.draftBoard td:last-of-type{border-right:none}.avatar.svelte-uyxuaj{border-radius:50%;height:30px;width:30px;margin:0.4em 0;border:0.25px solid #777}.clickable.svelte-uyxuaj{cursor:pointer}.curDraftName{color:#888;font-size:0.7em;font-style:italic}",
  map: null
};
const Draft = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { draftData, leagueTeamManagers, previous = false, year, players } = $$props;
  const { draftOrder, draft, accuracy, reversalRound, draftType } = draftData;
  let progress = 0;
  let closed = false;
  if ($$props.draftData === void 0 && $$bindings.draftData && draftData !== void 0)
    $$bindings.draftData(draftData);
  if ($$props.leagueTeamManagers === void 0 && $$bindings.leagueTeamManagers && leagueTeamManagers !== void 0)
    $$bindings.leagueTeamManagers(leagueTeamManagers);
  if ($$props.previous === void 0 && $$bindings.previous && previous !== void 0)
    $$bindings.previous(previous);
  if ($$props.year === void 0 && $$bindings.year && year !== void 0)
    $$bindings.year(year);
  if ($$props.players === void 0 && $$bindings.players && players !== void 0)
    $$bindings.players(players);
  $$result.css.add(css$2);
  return `${accuracy && !closed ? `<div class="accuracy svelte-uyxuaj"><div class="accuracyText svelte-uyxuaj">Upcomig draft order accuracy: ${escape(parseInt(progress * 100))}%
            <span class="disclaimer svelte-uyxuaj">(accuracy will improve as the regular season progresses)</span></div>
        ${validate_component(LinearProgress, "LinearProgress").$$render($$result, { progress, closed }, {}, {})}</div>` : ``}

${validate_component(DataTable, "DataTable").$$render($$result, { class: "draftBoard" }, {}, {
    default: () => {
      return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${each(draftOrder, (draftPosition) => {
                return `${draftPosition ? `${validate_component(Cell, "Cell").$$render($$result, { class: "draftTeam" }, {}, {
                  default: () => {
                    return `<img class="avatar clickable svelte-uyxuaj"${add_attribute("src", getAvatarFromTeamManagers(leagueTeamManagers, draftPosition, year), 0)} alt="${escape(getTeamNameFromTeamManagers(leagueTeamManagers, draftPosition, year), true) + " avatar"}">
                        <br>
                        <span class="clickable svelte-uyxuaj">${escape(getTeamNameFromTeamManagers(leagueTeamManagers, draftPosition, year))}<!-- HTML_TAG_START -->${getTeamNameFromTeamManagers(leagueTeamManagers, draftPosition, year) != getTeamNameFromTeamManagers(leagueTeamManagers, draftPosition) ? `<br /><span class="curDraftName">(${getTeamNameFromTeamManagers(leagueTeamManagers, draftPosition)})</span>` : ""}<!-- HTML_TAG_END --></span>
                    `;
                  }
                })}` : ``}`;
              })}`;
            }
          })}`;
        }
      })}
    ${validate_component(Body, "Body").$$render($$result, {}, {}, {
        default: () => {
          return `${each(draft, (draftRow, row) => {
            return `${validate_component(DraftRow, "DraftRow").$$render(
              $$result,
              {
                draftRow,
                row: row + 1,
                previous,
                reversalRound,
                draftType,
                players,
                leagueTeamManagers,
                year
              },
              {},
              {}
            )}`;
          })}`;
        }
      })}`;
    }
  })}`;
});
const css$1 = {
  code: ".loading.svelte-88vdj{display:block;width:85%;max-width:500px;margin:80px auto}h4.svelte-88vdj{text-align:center}h6.svelte-88vdj{text-align:center}",
  map: null
};
const Drafts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { upcomingDraftData, previousDraftsData, leagueTeamManagersData, playersData } = $$props;
  if ($$props.upcomingDraftData === void 0 && $$bindings.upcomingDraftData && upcomingDraftData !== void 0)
    $$bindings.upcomingDraftData(upcomingDraftData);
  if ($$props.previousDraftsData === void 0 && $$bindings.previousDraftsData && previousDraftsData !== void 0)
    $$bindings.previousDraftsData(previousDraftsData);
  if ($$props.leagueTeamManagersData === void 0 && $$bindings.leagueTeamManagersData && leagueTeamManagersData !== void 0)
    $$bindings.leagueTeamManagersData(leagueTeamManagersData);
  if ($$props.playersData === void 0 && $$bindings.playersData && playersData !== void 0)
    $$bindings.playersData(playersData);
  $$result.css.add(css$1);
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
	<div class="loading svelte-88vdj"><p>Retrieving upcoming draft...</p>
		<br>
		${validate_component(LinearProgress, "LinearProgress").$$render($$result, { indeterminate: true }, {}, {})}</div>
`;
    }
    return function([upcomingDraft, leagueTeamManagers, { players }]) {
      return `
    <h4 class="svelte-88vdj">Upcoming ${escape(upcomingDraft.year)} Draft</h4>
    ${validate_component(Draft, "Draft").$$render(
        $$result,
        {
          draftData: upcomingDraft,
          leagueTeamManagers,
          year: upcomingDraft.year,
          players
        },
        {},
        {}
      )}
`;
    }(__value);
  }(waitForAll(upcomingDraftData, leagueTeamManagersData, playersData))}


${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
	<hr>
	<h4 class="svelte-88vdj">Previous Drafts</h4>
	<div class="loading svelte-88vdj"><p>Retrieving previous drafts...</p>
		<br>
		${validate_component(LinearProgress, "LinearProgress").$$render($$result, { indeterminate: true }, {}, {})}</div>
`;
    }
    return function([previousDrafts, leagueTeamManagers, { players }]) {
      return `
	
	${previousDrafts.length ? `<hr>
		<h4 class="svelte-88vdj">Previous Drafts</h4>
		${each(previousDrafts, (previousDraft) => {
        return `<h6 class="svelte-88vdj">${escape(previousDraft.year)} Draft</h6>
			${validate_component(Draft, "Draft").$$render(
          $$result,
          {
            draftData: previousDraft,
            previous: true,
            leagueTeamManagers,
            year: previousDraft.year,
            players
          },
          {},
          {}
        )}`;
      })}` : ``}
`;
    }(__value);
  }(waitForAll(previousDraftsData, leagueTeamManagersData, playersData))}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#main.svelte-19dg7xs{position:relative;z-index:1}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { upcomingDraftData, previousDraftsData, leagueTeamManagersData, playersData } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div id="main" class="svelte-19dg7xs">${validate_component(Drafts, "Drafts").$$render(
    $$result,
    {
      upcomingDraftData,
      previousDraftsData,
      leagueTeamManagersData,
      playersData
    },
    {},
    {}
  )}</div>`;
});
export {
  Page as default
};
