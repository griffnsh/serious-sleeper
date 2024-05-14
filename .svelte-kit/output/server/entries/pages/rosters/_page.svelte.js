import { c as create_ssr_component, v as validate_component, j as escape, f as add_attribute, k as each, n as is_promise, p as noop } from "../../../chunks/index3.js";
import { L as LinearProgress } from "../../../chunks/LinearProgress.js";
import "../../../chunks/index.svelte_svelte_type_style_lang.js";
import "../../../chunks/records.js";
import { l as loadPlayers } from "../../../chunks/players.js";
import { B as Button_1 } from "../../../chunks/Button.js";
import { I as Icon, L as Label } from "../../../chunks/index4.js";
import { R as Row, C as Cell, D as DataTable, H as Head, B as Body } from "../../../chunks/index6.js";
import "fuzzyjs";
const css$4 = {
  code: ".playerAvatar.svelte-2drnee{position:relative;vertical-align:middle;height:40px;width:40px;background-position:center;background-repeat:no-repeat;background-size:auto 45px;overflow:visible}.teamLogo.svelte-2drnee{width:21px;position:absolute;top:0;right:-16px}.pos.svelte-2drnee{display:inline-flex;align-items:center;justify-content:center;border-radius:8px;width:46px;height:32px}.QB.svelte-2drnee{background-color:var(--QB)}.WR.svelte-2drnee{background-color:var(--WR)}.RB.svelte-2drnee{background-color:var(--RB)}.TE.svelte-2drnee{background-color:var(--TE)}.FLEX.svelte-2drnee{background:linear-gradient(to right, var(--WR), var(--WR) 33.33%, var(--RB) 33.33%, var(--RB) 66.66%, var(--TE) 66.66%)}.WRRB.svelte-2drnee{background:linear-gradient(to right, var(--WR), var(--WR) 50%, var(--RB) 50%)}.K.svelte-2drnee{background-color:var(--K)}.S-FLEX.svelte-2drnee{background:linear-gradient(to right, var(--WR), var(--WR) 25%, var(--RB) 25%, var(--RB) 50%, var(--TE) 50%, var(--TE) 75%, var(--QB));background-color:#8f66ff}.R-FLEX.svelte-2drnee{background:linear-gradient(to right, var(--WR), var(--WR) 50%, var(--TE) 50%)}.DEF.svelte-2drnee{background-color:var(--DEF)}.DL.svelte-2drnee{background-color:var(--DL)}.LB.svelte-2drnee{background-color:var(--LB)}.DB.svelte-2drnee{background-color:var(--DB)}.IDP.svelte-2drnee{background:linear-gradient(to right, var(--DL), var(--DL) 33.33%, var(--LB) 33.33%, var(--LB) 66.66%, var(--DB) 66.66%)}.BN.svelte-2drnee{background-color:var(--BN)}.slot{width:22px !important;padding:1px 6px 1px 8px !important}.avatar{width:45px}.playerCell{height:45px !important;overflow-y:hidden !important}.nameCell{padding:0 5px}span.nickname.svelte-2drnee{color:#888;font-style:italic;font-size:0.8em}.injury{font-style:italic;font-weight:700;font-size:0.7em;margin-left:0.5em;vertical-align:super}.Q{color:#c09111}.OUT{color:#851313}.IR{color:#851313}.PUP{color:#851313}.additionalInfo.svelte-2drnee{display:inline-block;font-size:0.7em}.text-QB.svelte-2drnee{color:var(--QB)}.text-WR.svelte-2drnee{color:var(--WR)}.text-RB.svelte-2drnee{color:var(--RB)}.text-TE.svelte-2drnee{color:var(--TE)}.text-K.svelte-2drnee{color:var(--K)}.text-DEF.svelte-2drnee{color:var(--DEF)}.text-DL.svelte-2drnee{color:var(--DL)}.text-LB.svelte-2drnee{color:var(--LB)}.text-DB.svelte-2drnee{color:var(--DB)}@media(max-width: 460px){.nameCell{font-size:0.9em}}@media(max-width: 355px){.slot{width:22px !important;padding:1px 2px 1px 2px !important}.avatar{padding:0px 16px 0px 2px !important}.pos.svelte-2drnee{display:inline-flex;align-items:center;justify-content:center;border-radius:8px;width:42px;height:24px;font-size:0.8em}.nameCell{font-size:0.85em}}",
  map: null
};
const RosterRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { player } = $$props;
  const playerSLotClass = player.slot.replace("/", "").replace("SUPER_", "S-").replace("REC_", "R-");
  const playerSlot = player.slot.replace("SUPER_", "S ").replace("REC_", "R ");
  if ($$props.player === void 0 && $$bindings.player && player !== void 0)
    $$bindings.player(player);
  $$result.css.add(css$4);
  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Cell, "Cell").$$render($$result, { class: "slot playerCell" }, {}, {
        default: () => {
          return `<span class="${"pos " + escape(playerSLotClass, true) + " svelte-2drnee"}">${escape(playerSlot)}</span>`;
        }
      })}
	${player.avatar ? `${validate_component(Cell, "Cell").$$render($$result, { class: "avatar playerCell" }, {}, {
        default: () => {
          return `<div class="playerAvatar svelte-2drnee"${add_attribute("style", player.avatar, 0)}>${player.team && player.poss != "DEF" ? `<img src="${"https://sleepercdn.com/images/team_logos/nfl/" + escape(player.team.toLowerCase(), true) + ".png"}" class="teamLogo svelte-2drnee" alt="team logo">` : ``}</div>`;
        }
      })}` : ``}
	${validate_component(Cell, "Cell").$$render(
        $$result,
        {
          class: "playerCell nameCell",
          colspan: player.name != "Empty" ? 1 : 3
        },
        {},
        {
          default: () => {
            return `<div class="info">
            <!-- HTML_TAG_START -->${player.name}<!-- HTML_TAG_END -->
            
            ${player.poss !== "DEF" ? `<div class="additionalInfo svelte-2drnee"><span class="${"text-" + escape(player.poss, true) + " svelte-2drnee"}"><!-- HTML_TAG_START -->${player.poss}<!-- HTML_TAG_END --></span>
                    ${player.team ? ` - 
                        ${escape(player.team)}` : ``}</div>` : ``}</div>
        ${player.nickname ? `<span class="nickname svelte-2drnee">&quot;${escape(player.nickname)}</span>` : ``}`;
          }
        }
      )}`;
    }
  })}`;
});
const css$3 = {
  code: "h5.svelte-pesiwv{text-align:center;margin:0.2em auto}.teamAvatar.svelte-pesiwv{vertical-align:middle;border-radius:50%;height:40px;margin-right:15px;border:0.25px solid #777}.team.svelte-pesiwv{margin:4px 10px 10px}.clickable{cursor:pointer}.teamInner{box-shadow:0px 3px 3px -2px var(--boxShadowOne), 0px 3px 4px 0px var(--boxShadowTwo), 0px 1px 8px 0px var(--boxShadowThree);display:block;margin:0 auto}.rosterBench.svelte-pesiwv{overflow:hidden;width:100%;display:block;transition:max-height 0.7s ease-in-out}.r_1{text-align:center;background-color:var(--r1)}.r_2{text-align:center;background-color:var(--r2)}.r_3{text-align:center;background-color:var(--r3)}.record.svelte-pesiwv{width:100%;margin-bottom:5px;display:flex;justify-content:space-around}.result.svelte-pesiwv{width:11px}h3.svelte-pesiwv{font-size:1.5em;font-weight:500;margin:12px 0}h5.svelte-pesiwv{font-size:1.2em;text-align:center}@media(max-width: 500px){.team.svelte-pesiwv{font-size:0.9em}.result.svelte-pesiwv{width:9px}h3.svelte-pesiwv{font-size:1.3em;margin:3px 0}h5.svelte-pesiwv{font-size:1.1em}}@media(max-width: 340px){h3.svelte-pesiwv{font-size:1.1em;margin:6px 0}h5.svelte-pesiwv{font-size:1em}}@media(max-width: 400px){.team.svelte-pesiwv{margin:4px auto 10px}}.icon{vertical-align:middle}.italic.svelte-pesiwv{color:#aaa;font-style:italic}.interactive{vertical-align:middle;cursor:pointer}.bench{background-color:var(--ir)}",
  map: null
};
const Roster = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let team;
  let finalStarters;
  let record;
  let { roster, leagueTeamManagers, startersAndReserve, players, rosterPositions, division, expanded } = $$props;
  let i = 0;
  const digestData = (passedPlayers, rawPlayers, startingPlayers = false, reserve = false) => {
    let digestedRoster = [];
    for (const singlePlayer of rawPlayers) {
      if (!startingPlayers && !reserve && startersAndReserve.includes(singlePlayer)) {
        continue;
      }
      let player = {};
      let slot = "BN";
      if (startingPlayers) {
        slot = rosterPositions[i] == "WRRB_FLEX" ? "WR/RB" : rosterPositions[i];
      }
      if (singlePlayer == "0") {
        player = {
          name: "Empty",
          poss: null,
          team: null,
          avatar: null,
          slot
        };
        i++;
        digestedRoster.push(player);
        continue;
      }
      let injury = null;
      switch (passedPlayers[singlePlayer].is) {
        case "Questionable":
          injury = "Q";
          break;
        case "Out":
          injury = "OUT";
          break;
        case "PUP":
          injury = "PUP";
          break;
        case "IR":
          injury = "IR";
          break;
      }
      player = {
        name: `${passedPlayers[singlePlayer].fn} ${passedPlayers[singlePlayer].ln}${injury ? `<span class="injury ${injury}">${injury}</span>` : ""}`,
        nickname: roster.metadata && roster.metadata[`p_nick_${singlePlayer}`] ? roster.metadata[`p_nick_${singlePlayer}`] : null,
        poss: passedPlayers[singlePlayer].pos,
        team: passedPlayers[singlePlayer].t,
        avatar: passedPlayers[singlePlayer].pos == "DEF" ? `background-image: url(https://sleepercdn.com/images/team_logos/nfl/${singlePlayer.toLowerCase()}.png)` : `background-image: url(https://sleepercdn.com/content/nfl/players/thumb/${singlePlayer}.jpg), url(https://sleepercdn.com/images/v2/icons/player_default.webp)`,
        slot
      };
      i++;
      digestedRoster.push(player);
    }
    i = 0;
    return digestedRoster;
  };
  let finalBench = [];
  let finalIR = null;
  if (roster.reserve) {
    finalIR = digestData(players, roster.reserve, false, true);
  }
  const buildRecord = (newRoster) => {
    const innerRecord = [];
    if (!newRoster.metadata || !newRoster.metadata.record)
      return innerRecord;
    for (const c of newRoster.metadata.record) {
      switch (c) {
        case "W":
          innerRecord.push("green");
          break;
        case "L":
          innerRecord.push("red");
          break;
        default:
          innerRecord.push("gray");
          break;
      }
    }
    return innerRecord;
  };
  let selected = "0px";
  let status = "minimized";
  let innerWidth;
  const calcHeight = () => {
    const multiplier = 52;
    const benchLength = finalBench.length * multiplier + 53;
    let irLength = 0;
    if (finalIR) {
      irLength = finalIR.length * multiplier + 52;
    }
    return benchLength + irLength;
  };
  if ($$props.roster === void 0 && $$bindings.roster && roster !== void 0)
    $$bindings.roster(roster);
  if ($$props.leagueTeamManagers === void 0 && $$bindings.leagueTeamManagers && leagueTeamManagers !== void 0)
    $$bindings.leagueTeamManagers(leagueTeamManagers);
  if ($$props.startersAndReserve === void 0 && $$bindings.startersAndReserve && startersAndReserve !== void 0)
    $$bindings.startersAndReserve(startersAndReserve);
  if ($$props.players === void 0 && $$bindings.players && players !== void 0)
    $$bindings.players(players);
  if ($$props.rosterPositions === void 0 && $$bindings.rosterPositions && rosterPositions !== void 0)
    $$bindings.rosterPositions(rosterPositions);
  if ($$props.division === void 0 && $$bindings.division && division !== void 0)
    $$bindings.division(division);
  if ($$props.expanded === void 0 && $$bindings.expanded && expanded !== void 0)
    $$bindings.expanded(expanded);
  $$result.css.add(css$3);
  team = leagueTeamManagers.teamManagersMap[leagueTeamManagers.currentSeason][roster.roster_id].team;
  finalStarters = digestData(players, roster.starters, true);
  {
    if (roster.players) {
      finalBench = digestData(players, roster.players);
    }
  }
  record = buildRecord(roster);
  {
    {
      selected = expanded ? calcHeight() + "px" : "0px";
      status = expanded ? "expanded" : "minimized";
    }
  }
  return `



<div class="team svelte-pesiwv">${validate_component(DataTable, "DataTable").$$render(
    $$result,
    {
      class: "teamInner",
      "table$aria-label": "Team Name",
      style: "width: " + innerWidth * 0.95 + "px;"
    },
    {},
    {
      default: () => {
        return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
          default: () => {
            return `
			${validate_component(Row, "Row").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Cell, "Cell").$$render(
                  $$result,
                  {
                    colspan: "4",
                    class: "r_" + division + " clickable"
                  },
                  {},
                  {
                    default: () => {
                      return `<h3 class="svelte-pesiwv"><img alt="team avatar" class="teamAvatar svelte-pesiwv"${add_attribute(
                        "src",
                        team ? team.avatar : "https://sleepercdn.com/images/v2/icons/player_default.webp",
                        0
                      )}>
						${escape(team?.name ? team.name : "No Manager")}</h3>

					<div class="record svelte-pesiwv">${each(record, (result) => {
                        return `<img alt="match result" class="result svelte-pesiwv" src="${"/" + escape(result, true) + ".png"}">`;
                      })}</div>`;
                    }
                  }
                )}`;
              }
            })}`;
          }
        })}
		${validate_component(Body, "Body").$$render($$result, {}, {}, {
          default: () => {
            return `
			${each(finalStarters, (starter) => {
              return `${validate_component(RosterRow, "RosterRow").$$render($$result, { player: starter }, {}, {})}`;
            })}
			${validate_component(Row, "Row").$$render($$result, { class: "interactive" }, {}, {
              default: () => {
                return `${validate_component(Cell, "Cell").$$render($$result, { colspan: "4", class: division }, {}, {
                  default: () => {
                    return `<h5 class="svelte-pesiwv">${validate_component(Icon, "Icon").$$render($$result, { class: "material-icons icon" }, {}, {
                      default: () => {
                        return `king_bed`;
                      }
                    })} Bench <span class="italic svelte-pesiwv">(${escape(status)})</span></h5>`;
                  }
                })}`;
              }
            })}`;
          }
        })}`;
      }
    }
  )}
	<div class="rosterBench svelte-pesiwv" style="${"max-height: " + escape(selected, true)}">${validate_component(DataTable, "DataTable").$$render(
    $$result,
    {
      class: "teamInner",
      style: "width: 380px"
    },
    {},
    {
      default: () => {
        return `${validate_component(Body, "Body").$$render($$result, { class: "bench" }, {}, {
          default: () => {
            return `
				${each(finalBench, (bench) => {
              return `${validate_component(RosterRow, "RosterRow").$$render($$result, { player: bench }, {}, {})}`;
            })}
				
				
				${finalIR ? `${validate_component(Row, "Row").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Cell, "Cell").$$render($$result, { colspan: "4" }, {}, {
                  default: () => {
                    return `<h5 class="svelte-pesiwv">${validate_component(Icon, "Icon").$$render($$result, { class: "material-icons icon" }, {}, {
                      default: () => {
                        return `healing`;
                      }
                    })} Injured Reserve</h5>`;
                  }
                })}`;
              }
            })}
					${each(finalIR, (ir) => {
              return `${validate_component(RosterRow, "RosterRow").$$render($$result, { player: ir }, {}, {})}`;
            })}` : ``}
				${validate_component(Row, "Row").$$render($$result, { class: "interactive" }, {}, {
              default: () => {
                return `${validate_component(Cell, "Cell").$$render($$result, { colspan: "4", class: division }, {}, {
                  default: () => {
                    return `<h5 class="svelte-pesiwv">${validate_component(Icon, "Icon").$$render($$result, { class: "material-icons icon" }, {}, {
                      default: () => {
                        return `close_fullscreen`;
                      }
                    })}Close Bench</h5>`;
                  }
                })}`;
              }
            })}`;
          }
        })}`;
      }
    }
  )}</div></div>`;
});
const css$2 = {
  code: '.division.svelte-1pygyj4.svelte-1pygyj4{display:flex;justify-content:space-around;flex-wrap:wrap;margin:10px auto 20px;width:95%}.banner.svelte-1pygyj4.svelte-1pygyj4{display:flex;align-items:center;justify-content:center;height:140px;width:400px;border-radius:40px;margin:10px auto;background-repeat:no-repeat;background-size:auto 140px}.banner-D-1.svelte-1pygyj4.svelte-1pygyj4{background-image:url("/division-1-banner.png");background-position:left}.banner-D-2.svelte-1pygyj4.svelte-1pygyj4{background-image:url("/division-2-banner.png");background-position:right}.banner-D-3.svelte-1pygyj4.svelte-1pygyj4{background-image:url("/division-3-banner.png");background-position:left}h2.svelte-1pygyj4.svelte-1pygyj4{text-align:center;font-size:3em}@media(max-width: 460px){.banner.svelte-1pygyj4.svelte-1pygyj4{height:110px;width:315px;background-repeat:no-repeat;background-size:auto 110px}h2.svelte-1pygyj4.svelte-1pygyj4{font-size:2.5em}}@media(max-width: 360px){.banner.svelte-1pygyj4.svelte-1pygyj4{height:90px;width:258px;background-repeat:no-repeat;background-size:auto 90px}h2.svelte-1pygyj4.svelte-1pygyj4{font-size:2em}}.banner.svelte-1pygyj4 h2.svelte-1pygyj4{text-shadow:var(--fff) 0px 0px 3px, var(--fff) 0px 0px 3px, var(--fff) 0px 0px 3px,\n            		 var(--fff) 0px 0px 3px, var(--fff) 0px 0px 3px, var(--fff) 0px 0px 3px;-webkit-font-smoothing:antialiased}.minExp.svelte-1pygyj4.svelte-1pygyj4{display:block;text-align:center;margin:10px 0;cursor:pointer}.loading.svelte-1pygyj4.svelte-1pygyj4{display:block;width:85%;max-width:500px;margin:80px auto}.expandButton.svelte-1pygyj4.svelte-1pygyj4{margin:5em auto 2em;text-align:center}',
  map: null
};
const RosterSorter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { rosters, leagueTeamManagers, startersAndReserve, leagueData, players } = $$props;
  const rosterPositions = leagueData.roster_positions;
  const numDivisions = leagueData.settings.divisions || 1;
  const divisions = [];
  for (let i = 0; i < numDivisions; i++) {
    divisions.push({
      name: leagueData.metadata ? leagueData.metadata[`division_${i + 1}`] : null,
      rosters: []
    });
  }
  for (const rosterID in rosters) {
    const roster = rosters[rosterID];
    const division = !roster.settings.division || roster.settings.division > numDivisions ? 0 : roster.settings.division - 1;
    divisions[division].rosters.push(roster);
  }
  let expanded = false;
  if ($$props.rosters === void 0 && $$bindings.rosters && rosters !== void 0)
    $$bindings.rosters(rosters);
  if ($$props.leagueTeamManagers === void 0 && $$bindings.leagueTeamManagers && leagueTeamManagers !== void 0)
    $$bindings.leagueTeamManagers(leagueTeamManagers);
  if ($$props.startersAndReserve === void 0 && $$bindings.startersAndReserve && startersAndReserve !== void 0)
    $$bindings.startersAndReserve(startersAndReserve);
  if ($$props.leagueData === void 0 && $$bindings.leagueData && leagueData !== void 0)
    $$bindings.leagueData(leagueData);
  if ($$props.players === void 0 && $$bindings.players && players !== void 0)
    $$bindings.players(players);
  $$result.css.add(css$2);
  return `<div class="expandButton svelte-1pygyj4">${validate_component(Button_1, "Button").$$render($$result, { variant: "outlined" }, {}, {
    default: () => {
      return `${validate_component(Label, "Label").$$render($$result, {}, {}, {
        default: () => {
          return `${escape("Expand")} All Benches`;
        }
      })}`;
    }
  })}</div>

${each(divisions, (division, ix) => {
    return `${division.name ? `<div class="${"banner banner-D-" + escape(ix + 1, true) + " svelte-1pygyj4"}"><h2 class="svelte-1pygyj4">${escape(division.name)}</h2>
		</div>` : ``}
	<div class="division svelte-1pygyj4">${each(division.rosters, (roster) => {
      return `${validate_component(Roster, "Roster").$$render(
        $$result,
        {
          division: ix + 1,
          expanded,
          rosterPositions,
          roster,
          leagueTeamManagers,
          players,
          startersAndReserve
        },
        {},
        {}
      )}`;
    })}
	</div>`;
  })}`;
});
const css$1 = {
  code: ".rosters.svelte-kirxbm{position:relative;z-index:1}",
  map: null
};
const Rosters = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { leagueData, rosterData, leagueTeamManagers, playersInfo } = $$props;
  let players = playersInfo.players;
  const refreshPlayers = async () => {
    const newPlayersInfo = await loadPlayers(null, true);
    players = newPlayersInfo.players;
  };
  if (playersInfo.stale) {
    refreshPlayers();
  }
  if ($$props.leagueData === void 0 && $$bindings.leagueData && leagueData !== void 0)
    $$bindings.leagueData(leagueData);
  if ($$props.rosterData === void 0 && $$bindings.rosterData && rosterData !== void 0)
    $$bindings.rosterData(rosterData);
  if ($$props.leagueTeamManagers === void 0 && $$bindings.leagueTeamManagers && leagueTeamManagers !== void 0)
    $$bindings.leagueTeamManagers(leagueTeamManagers);
  if ($$props.playersInfo === void 0 && $$bindings.playersInfo && playersInfo !== void 0)
    $$bindings.playersInfo(playersInfo);
  $$result.css.add(css$1);
  return `<div class="rosters svelte-kirxbm">${validate_component(RosterSorter, "RosterSorter").$$render(
    $$result,
    {
      rosters: rosterData.rosters,
      players,
      leagueTeamManagers,
      startersAndReserve: rosterData.startersAndReserve,
      leagueData
    },
    {},
    {}
  )}</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".holder.svelte-1swuelu{position:relative;z-index:1}.loading.svelte-1swuelu{display:block;width:85%;max-width:500px;margin:80px auto}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const rostersInfo = data.rostersInfo;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="holder svelte-1swuelu">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
		<div class="loading svelte-1swuelu"><p>Retrieving roster data...</p>
			<br>
			${validate_component(LinearProgress, "LinearProgress").$$render($$result, { indeterminate: true }, {}, {})}</div>
	`;
    }
    return function([leagueData, rosterData, leagueTeamManagers, playersInfo]) {
      return `
		
		${validate_component(Rosters, "Rosters").$$render(
        $$result,
        {
          leagueData,
          rosterData,
          leagueTeamManagers,
          playersInfo
        },
        {},
        {}
      )} 
	`;
    }(__value);
  }(rostersInfo)}</div>`;
});
export {
  Page as default
};
