import { c as create_ssr_component, k as each, j as escape, f as add_attribute, v as validate_component } from "./index3.js";
import { g as getTeamFromTeamManagers } from "./universalFunctions.js";
import "./records.js";
import "./index.svelte_svelte_type_style_lang.js";
function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate" || key === "on_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const goto = /* @__PURE__ */ client_method("goto");
const css$1 = {
  code: ".move.svelte-wbmuff{text-align:center;padding:0;vertical-align:top}.originalOwner.svelte-wbmuff{color:#aaa;font-style:italic}.line.svelte-wbmuff{height:2px;width:50%;background-color:var(--aaa);position:absolute;top:34px}.lineL.svelte-wbmuff{left:0}.lineR.svelte-wbmuff{right:0}.indicator.svelte-wbmuff{vertical-align:middle}.nameHolder.svelte-wbmuff{margin:4px 0 0;display:inline-flex;justify-content:center;line-height:1.1em;flex-wrap:wrap;font-size:0.8em}.pickNameHolder.svelte-wbmuff{margin:4px 0 0;display:inline-flex;flex-direction:column;font-size:0.8em;line-height:1em}.tradeSlot.svelte-wbmuff{display:inline-block;vertical-align:middle;height:50px;width:50px;background-position:center;border:2px solid;border-radius:100%;position:relative;border-color:#51B59A;background-color:var(--eee)}.playerAvatar.svelte-wbmuff{background-repeat:no-repeat;background-size:auto 50px}.playerSlot.svelte-wbmuff{display:flex;flex-direction:column;align-items:center;justify-content:center}.playerInfo.svelte-wbmuff{font-size:0.8em;color:var(--g555);padding:0 1em}.indicator.svelte-wbmuff{position:absolute;bottom:-8px;right:-8px;color:#00ceb8;background-color:white;border-radius:50%}.avatarHolder.svelte-wbmuff{text-align:center}.cellParent.svelte-wbmuff{position:relative;display:flex;justify-content:space-evenly;align-items:center;padding:8px 0 0}.origin.svelte-wbmuff{border-style:dashed;background-color:var(--fff);height:30px;width:30px;margin-top:10px}.hidden.svelte-wbmuff{background:none}.round.svelte-wbmuff{font-size:1em;color:var(--ccc);position:absolute;transform:translate(-50%, -50%);left:50%;bottom:0%}.budget.svelte-wbmuff{font-size:1.4em;color:var(--ccc);position:absolute;transform:translate(-50%, -50%) rotate(-45deg);left:50%;bottom:0%}.pickInfo.svelte-wbmuff{padding:0;font-size:1.6em;transform:translate(-50%, -50%);position:absolute;left:50%;top:50%;color:var(--g444);font-weight:500}.pick.svelte-wbmuff{border-color:var(--PICKSfade)}.budgetHolder.svelte-wbmuff{border-color:var(--Budget)}.numEnd.svelte-wbmuff{position:absolute;top:-1em;right:-1em;font-size:0.3em}.direction.svelte-wbmuff{position:absolute;transform:translate(-50%, -50%);top:50%;left:50%;font-size:2.5em;color:var(--ccc)}@media(max-width: 420px){.nameHolder.svelte-wbmuff{font-size:0.7em}}",
  map: null
};
const TransactionMove = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { move, leagueTeamManagers, players, season } = $$props;
  const getAvatar = (pos, player) => {
    if (pos == "DEF") {
      return `background-image: url(https://sleepercdn.com/images/team_logos/nfl/${player.toLowerCase()}.png)`;
    }
    return `background-image: url(https://sleepercdn.com/content/nfl/players/thumb/${player}.jpg), url(https://sleepercdn.com/images/v2/icons/player_default.webp)`;
  };
  let origin, dest;
  for (let i = 0; i < move.length; i++) {
    if (move[i] && move[i] == "origin")
      origin = i;
    if (move[i] && (move[i].pick || move[i].player || move[i].budget)) {
      dest = i;
    }
  }
  const checkL = (cell, ix) => {
    if (!cell) {
      if (ix < origin && ix < dest)
        return true;
      if (ix > origin && ix > dest)
        return true;
      return false;
    }
    if (ix == origin) {
      return dest > origin;
    }
    return ix < origin;
  };
  const checkR = (cell, ix) => {
    if (!cell) {
      if (ix < origin && ix < dest)
        return true;
      if (ix > origin && ix > dest)
        return true;
      return false;
    }
    if (ix == origin) {
      return dest < origin;
    }
    return ix > origin;
  };
  const getNumEnd = (num) => {
    switch (num) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };
  if ($$props.move === void 0 && $$bindings.move && move !== void 0)
    $$bindings.move(move);
  if ($$props.leagueTeamManagers === void 0 && $$bindings.leagueTeamManagers && leagueTeamManagers !== void 0)
    $$bindings.leagueTeamManagers(leagueTeamManagers);
  if ($$props.players === void 0 && $$bindings.players && players !== void 0)
    $$bindings.players(players);
  if ($$props.season === void 0 && $$bindings.season && season !== void 0)
    $$bindings.season(season);
  $$result.css.add(css$1);
  return `<tr>${each(move, (cell, ix) => {
    return `<td class="move svelte-wbmuff"><div class="cellParent svelte-wbmuff"><div class="${"line lineL " + escape(checkL(cell, ix) ? "hidden" : "", true) + " svelte-wbmuff"}"></div>
                <div class="${"line lineR " + escape(checkR(cell, ix) ? "hidden" : "", true) + " svelte-wbmuff"}"></div>
                ${cell && cell.player ? `<div class="playerSlot svelte-wbmuff"><div class="tradeSlot playerAvatar svelte-wbmuff" style="${"border-color: var(--" + escape(players[cell.player].pos, true) + "); " + escape(getAvatar(players[cell.player].pos, cell.player), true)}"><i class="indicator material-icons svelte-wbmuff" aria-hidden="true">add_circle</i></div>
                        <div class="nameHolder svelte-wbmuff"><span class="name">${escape(`${players[cell.player].fn} ${players[cell.player].ln}`)}</span>
                            <span class="playerInfo svelte-wbmuff"><span>${escape(players[cell.player].pos)}</span>
                                ${players[cell.player].t ? `-
                                    <span>${escape(players[cell.player].t)}</span>` : ``}
                            </span></div>
                    </div>` : `${cell && cell.pick ? `<div class="playerSlot svelte-wbmuff"><div class="avatarHolder svelte-wbmuff"><div class="tradeSlot pick svelte-wbmuff"><span class="round svelte-wbmuff">Round</span>
                                <span class="pickInfo svelte-wbmuff">${escape(cell.pick.round)}<span class="numEnd svelte-wbmuff">${escape(getNumEnd(cell.pick.round))}</span></span>
                                <i class="indicator material-icons svelte-wbmuff" aria-hidden="true">add_circle</i>
                            </div></div>
                        <div class="pickNameHolder svelte-wbmuff"><span class="year">${escape(cell.pick.season)}</span>
                            ${cell.pick.original_owner ? `<span class="originalOwner svelte-wbmuff">${escape(getTeamFromTeamManagers(leagueTeamManagers, cell.pick.original_owner, season).name)}
                                    ${escape(getTeamFromTeamManagers(leagueTeamManagers, cell.pick.original_owner, season).name != getTeamFromTeamManagers(leagueTeamManagers, cell.pick.original_owner).name ? ` (${getTeamFromTeamManagers(leagueTeamManagers, cell.pick.original_owner).name})` : "")}
                                </span>` : ``}</div>
                    </div>` : `${cell && cell.budget ? `<div class="playerSlot svelte-wbmuff"><div class="avatarHolder svelte-wbmuff"><div class="tradeSlot budgetHolder svelte-wbmuff"><span class="budget svelte-wbmuff">faab</span>
                                <span class="pickInfo svelte-wbmuff">${escape(cell.budget.amount)}<span class="numEnd svelte-wbmuff">$</span></span>
                                <i class="indicator material-icons svelte-wbmuff" aria-hidden="true">add_circle</i>
                            </div></div>
                    </div>` : `${cell && cell == "origin" ? `<div class="playerSlot svelte-wbmuff"><div class="avatarHolder svelte-wbmuff"><div class="tradeSlot origin svelte-wbmuff">${dest - origin < 0 ? `<i class="direction material-icons svelte-wbmuff" aria-hidden="true">chevron_left</i>` : `<i class="direction material-icons svelte-wbmuff" aria-hidden="true">chevron_right</i>`}
                            </div></div>
                    </div>` : ``}`}`}`}</div>
        </td>`;
  })}</tr>`;
});
const css = {
  code: ".tradeTransaction.svelte-b1ps80{display:flex;position:relative;flex-direction:column;margin-bottom:1em}.name.svelte-b1ps80{position:relative;text-align:center}.avatar.svelte-b1ps80{border-radius:50%;height:40px;width:40px;border:2px solid #51B59A;background-color:#51B59A}.ownerName.svelte-b1ps80{display:inline-block;font-weight:normal;line-height:1em;margin:0.2em}.currentOwner.svelte-b1ps80{font-style:italic;color:var(--aaa);font-size:0.7em}.clickable.svelte-b1ps80{cursor:pointer}.date.svelte-b1ps80{color:var(--g999);font-style:italic;font-size:0.7em;text-align:center;padding:0.7em 0 1em;background-color:var(--fff);border-radius:0 0 0 40px;border-left:2px solid var(--blueOne);border-right:1px solid var(--ddd);margin-bottom:3em}table.svelte-b1ps80{width:100%;border-collapse:collapse;table-layout:fixed;height:1px}tbody.svelte-b1ps80{background-color:var(--fff);border-top:2px solid var(--blueOne);border-left:2px solid var(--blueOne);border-right:1px solid #51B59A}.holder.svelte-b1ps80{display:flex;flex-direction:column;justify-content:space-between;align-items:center;height:100%}@media(max-width: 420px){.ownerName.svelte-b1ps80{font-size:0.8em}}",
  map: null
};
const TradeTransaction = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { transaction, players, leagueTeamManagers } = $$props;
  if ($$props.transaction === void 0 && $$bindings.transaction && transaction !== void 0)
    $$bindings.transaction(transaction);
  if ($$props.players === void 0 && $$bindings.players && players !== void 0)
    $$bindings.players(players);
  if ($$props.leagueTeamManagers === void 0 && $$bindings.leagueTeamManagers && leagueTeamManagers !== void 0)
    $$bindings.leagueTeamManagers(leagueTeamManagers);
  $$result.css.add(css);
  return `<div class="tradeTransaction svelte-b1ps80"><table class="svelte-b1ps80"><thead><tr>${each(transaction.rosters, (owner) => {
    return `<th class="name clickable svelte-b1ps80" style="${"width: " + escape(1 / transaction.rosters.length * 100, true) + "%;"}"><div class="holder svelte-b1ps80"><img class="avatar svelte-b1ps80"${add_attribute("src", getTeamFromTeamManagers(leagueTeamManagers, owner, transaction.season).avatar, 0)} alt="${escape(getTeamFromTeamManagers(leagueTeamManagers, owner, transaction.season).name, true) + " avatar"}">
                            <span class="ownerName svelte-b1ps80">${escape(getTeamFromTeamManagers(leagueTeamManagers, owner, transaction.season).name)}
                                ${getTeamFromTeamManagers(leagueTeamManagers, owner, transaction.season).name != getTeamFromTeamManagers(leagueTeamManagers, owner).name ? `<br>
                                    <span class="currentOwner svelte-b1ps80">(${escape(getTeamFromTeamManagers(leagueTeamManagers, owner).name)})</span>` : ``}
                            </span></div>
                    </th>`;
  })}</tr></thead>
        <tbody class="svelte-b1ps80">${each(transaction.moves, (move) => {
    return `${validate_component(TransactionMove, "TransactionMove").$$render(
      $$result,
      {
        players,
        move,
        type: transaction.type,
        leagueTeamManagers,
        season: transaction.season
      },
      {},
      {}
    )}`;
  })}</tbody></table>
    <span class="date svelte-b1ps80">${escape(transaction.date)}</span></div>`;
});
export {
  TradeTransaction as T,
  goto as g
};
