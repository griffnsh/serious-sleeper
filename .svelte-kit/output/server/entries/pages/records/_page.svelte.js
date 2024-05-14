import { c as create_ssr_component, j as escape, f as add_attribute, v as validate_component, k as each, n as is_promise, p as noop } from "../../../chunks/index3.js";
import { L as LinearProgress } from "../../../chunks/LinearProgress.js";
import "../../../chunks/index.svelte_svelte_type_style_lang.js";
import "../../../chunks/records.js";
import "fuzzyjs";
import { G as Group } from "../../../chunks/index7.js";
import { g as getLeagueTransactions } from "../../../chunks/leagueTransactions.js";
import { g as getLeagueRecords } from "../../../chunks/leagueRecords.js";
import { b as getAvatarFromTeamManagers, d as getTeamNameFromTeamManagers, i as renderManagerNames, r as round, a as generateGraph } from "../../../chunks/universalFunctions.js";
import { D as DataTable, H as Head, R as Row, C as Cell, B as Body } from "../../../chunks/index6.js";
import { B as BarChart } from "../../../chunks/BarChart.js";
import { B as Button_1 } from "../../../chunks/Button.js";
import { L as Label } from "../../../chunks/index4.js";
const css$3 = {
  code: ".teamAvatar.svelte-gcwnj8{vertical-align:middle;border-radius:50%;height:40px;margin-right:15px;border:0.25px solid #777}.recordTeam.svelte-gcwnj8{display:flex}.name.svelte-gcwnj8{margin:auto 0}.managerNames.svelte-gcwnj8{font-size:0.75em;font-style:italic;color:var(--g999);max-width:180px;white-space:normal;text-align:left}.compressed.svelte-gcwnj8{height:30px;margin-right:6px}@media(max-width: 405px){.teamAvatar.svelte-gcwnj8{height:25px;margin-right:8px}.compressed.svelte-gcwnj8{height:20px;margin-right:4px}}@media(max-width: 295px){.teamAvatar.svelte-gcwnj8{display:none}}",
  map: null
};
const RecordTeam = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { leagueTeamManagers, managerID = null, rosterID = null, year, compressed = false, points = null } = $$props;
  let user = null;
  if (managerID) {
    user = leagueTeamManagers.users[managerID];
  }
  if ($$props.leagueTeamManagers === void 0 && $$bindings.leagueTeamManagers && leagueTeamManagers !== void 0)
    $$bindings.leagueTeamManagers(leagueTeamManagers);
  if ($$props.managerID === void 0 && $$bindings.managerID && managerID !== void 0)
    $$bindings.managerID(managerID);
  if ($$props.rosterID === void 0 && $$bindings.rosterID && rosterID !== void 0)
    $$bindings.rosterID(rosterID);
  if ($$props.year === void 0 && $$bindings.year && year !== void 0)
    $$bindings.year(year);
  if ($$props.compressed === void 0 && $$bindings.compressed && compressed !== void 0)
    $$bindings.compressed(compressed);
  if ($$props.points === void 0 && $$bindings.points && points !== void 0)
    $$bindings.points(points);
  $$result.css.add(css$3);
  return `<div class="recordTeam svelte-gcwnj8">${user ? `<img alt="team avatar" class="${"teamAvatar" + escape(compressed ? " compressed" : "", true) + " svelte-gcwnj8"}"${add_attribute("src", `https://sleepercdn.com/avatars/thumbs/${user.avatar}`, 0)}>` : `${rosterID ? `<img alt="team avatar" class="${"teamAvatar" + escape(compressed ? " compressed" : "", true) + " svelte-gcwnj8"}"${add_attribute("src", getAvatarFromTeamManagers(leagueTeamManagers, rosterID, year), 0)}>` : ``}`}
    <span class="name svelte-gcwnj8"><div class="teamName">${user ? `${escape(user.display_name)}` : `${rosterID ? `${escape(getTeamNameFromTeamManagers(leagueTeamManagers, rosterID, year))}
                ${escape(points ? ` (${points})` : "")}` : ``}`}</div>
        ${!user ? `<div class="managerNames svelte-gcwnj8">${escape(renderManagerNames(leagueTeamManagers, rosterID, year))}</div>` : ``}</span></div>`;
});
const css$2 = {
  code: ".headerPrimary{background-color:var(--headerPrimary);text-align:center}.italic.svelte-onqt6y{display:block;font-style:italic;font-size:0.9em;color:var(--g999)}.recordTable{box-shadow:0px 3px 3px -2px var(--boxShadowOne), 0px 3px 4px 0px var(--boxShadowTwo), 0px 1px 8px 0px var(--boxShadowThree);margin:2em}.rankingTable{display:table;box-shadow:0px 3px 3px -2px var(--boxShadowOne), 0px 3px 4px 0px var(--boxShadowTwo), 0px 1px 8px 0px var(--boxShadowThree);margin:2em auto 0.5em}.fullFlex.svelte-onqt6y{display:flex;flex-wrap:wrap;justify-content:space-around;margin:3em auto 5em}.rankingHolder.svelte-onqt6y{display:block;width:100%;overflow-x:hidden}.subTitle.svelte-onqt6y{font-style:italic;font-size:0.7em;color:#888;line-height:1.2em}h4.svelte-onqt6y{text-align:center;margin:2em 0 1em}.rankingTableWrapper.svelte-onqt6y{width:25%}.rankingInner.svelte-onqt6y{position:relative;display:flex;flex-wrap:nowrap;width:400%;transition:margin-left 0.8s}.buttonHolder.svelte-onqt6y{text-align:center;margin:2em 0 4em}.cellName{cursor:pointer;line-height:1.2em;padding-left:8px}.differentialName{padding:0.7em 0}.rank{padding-right:0}.vs.svelte-onqt6y{padding-left:0.6em;margin:0.5em 0}.mdc-data-table__cell, .mdc-data-table__header-cell{border-bottom-color:var(--borderOverride)}@media(max-width: 540px){.buttonHolder .selectionButtons{font-size:0.6em}}@media(max-width: 415px){.buttonHolder .selectionButtons{font-size:0.5em;padding:0 6px;height:30px}}@media(max-width: 315px){.buttonHolder .selectionButtons{font-size:0.45em;padding:0 3px}}@media(max-width: 265px){.buttonHolder .selectionButtons{font-size:0.4em;padding:0 2px;height:24px;min-width:40px}}@media(max-width: 510px){.recordTable th{font-size:0.8em;padding:1px 12px}.recordTable td{font-size:0.8em;padding:1px 12px}.vsRecord.svelte-onqt6y{margin:.6em 0}}@media(max-width: 480px){.rank{padding:1px 0 1px 5px !important}.rank{padding:1px 0 1px 5px !important}}@media(max-width: 460px){.recordTable th{font-size:0.6em;padding:1px 12px}.recordTable td{font-size:0.6em;padding:1px 12px}}@media(max-width: 365px){.recordTable th{font-size:0.5em;padding:1px 8px}.recordTable td{font-size:0.5em;padding:1px 8px}}@media(max-width: 265px){.recordTable th{font-size:0.4em;padding:1px 5px}.recordTable td{font-size:0.4em;padding:1px 5px}}@media(max-width: 570px){.rankingTable th{font-size:0.8em;max-width:110px;white-space:break-spaces;padding:1px 12px}.rankingTable td{font-size:0.8em;max-width:110px;white-space:break-spaces;padding:1px 12px}}@media(max-width: 410px){.rankingTable th{font-size:0.6em;max-width:90px;white-space:break-spaces;padding:1px 12px}.rankingTable td{font-size:0.6em;max-width:90px;white-space:break-spaces;padding:1px 12px}}@media(max-width: 340px){.rankingTable th{font-size:0.55em;max-width:80px;white-space:break-spaces;padding:1px 6px}.rankingTable td{font-size:0.55em;max-width:80px;white-space:break-spaces;padding:1px 6px}}",
  map: null
};
const RecordsAndRankings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let transactions;
  let { key, tradesData, waiversData, weekRecords, weekLows, seasonLongRecords, seasonLongLows, showTies, winPercentages, fptsHistories, lineupIQs, prefix, blowouts, closestMatchups, allTime = false, leagueTeamManagers } = $$props;
  let graphs = [];
  let curTable = 0;
  let curGraph = 0;
  let iqOffset = 0;
  let tables = ["Win Percentages", "Points", "Transactions"];
  const year = allTime ? null : prefix;
  const changeTable = (newGraph) => {
    switch (newGraph) {
      case 0 - iqOffset:
      case 4 + 99 * iqOffset:
        curTable = 0;
        break;
      case 1 - iqOffset:
      case 2 - iqOffset:
        curTable = 1 - iqOffset;
        break;
      case 3 - iqOffset:
        curTable = 2 - iqOffset;
        break;
      case 5 - 2 * iqOffset:
      case 6 - 2 * iqOffset:
        curTable = 3 - iqOffset;
        break;
      default:
        curTable = 0;
        break;
    }
  };
  const changeGraph = (newTable) => {
    switch (newTable) {
      case 0 - iqOffset:
        if (curGraph == 0 || curGraph == 4) {
          break;
        }
        curGraph = 0;
        break;
      case 1 - iqOffset:
        if (curGraph == 1 - iqOffset || curGraph == 2 - iqOffset) {
          break;
        }
        curGraph = 1 - iqOffset;
        break;
      case 2 - iqOffset:
        curGraph = 3 - iqOffset;
        break;
      case 3 - iqOffset:
        if (curGraph == 5 - 2 * iqOffset || curGraph == 6 - 2 * iqOffset) {
          break;
        }
        curGraph = 5 - 2 * iqOffset;
        break;
      default:
        curGraph = 0;
        break;
    }
  };
  const setGraphs = (wD) => {
    const lineupIQGraph = {
      stats: lineupIQs,
      x: "Lineup IQ",
      stat: "%",
      header: "Manager Lineup IQ",
      field: "iq",
      short: "Lineup IQ"
    };
    const potentialPointsGraph = {
      stats: lineupIQs,
      x: "Points",
      stat: "",
      header: "Potential Points vs Points",
      field: "potentialPoints",
      secondField: "fpts",
      short: "Potential Points"
    };
    const winsGraph = {
      stats: winPercentages,
      x: "Wins",
      stat: "",
      header: "Team Wins",
      field: "wins",
      short: "Wins"
    };
    const winPercentagesGraph = {
      stats: winPercentages,
      x: "Win Percentage",
      stat: "%",
      header: "Team Win Percentages",
      field: "percentage",
      short: "Win Percentage"
    };
    const fptsHistoriesGraph = {
      stats: fptsHistories,
      x: "Fantasy Points",
      stat: "",
      header: "Team Fantasy Points",
      field: "fptsFor",
      short: "Fantasy Points"
    };
    const tradesGraph = {
      stats: tradesData,
      x: "# of trades",
      stat: "",
      header: "Number of Trades Managers Have Made",
      field: "trades",
      short: "Trades"
    };
    const waiversGraph = {
      stats: wD,
      x: "# of Waiver Moves",
      stat: "",
      header: "Waivers Moves Managers Have Made",
      field: "waivers",
      short: "Waivers"
    };
    const gs = [];
    if (lineupIQs[0]?.potentialPoints) {
      gs.push(generateGraph(lineupIQGraph, year));
    }
    gs.push(generateGraph(winsGraph, year, 5));
    gs.push(generateGraph(winPercentagesGraph, year));
    gs.push(generateGraph(fptsHistoriesGraph, year));
    if (lineupIQs[0]?.potentialPoints) {
      gs.push(generateGraph(potentialPointsGraph, year, 10, 0));
    }
    if (key == "regularSeasonData") {
      gs.push(generateGraph(tradesGraph, year));
      gs.push(generateGraph(waiversGraph, year));
    }
    curGraph = 0;
    graphs = gs;
  };
  const setTransactionsAndGraphs = (wD) => {
    if (wD[0].rosterID) {
      for (let i = 1; i <= waiversData.length; i++) {
        if (!tradesData.find((t) => t.rosterID == i)) {
          tradesData.push({ rosterID: i, trades: 0 });
        }
      }
    }
    if (wD[0].managerID) {
      for (const userID in leagueTeamManagers.users) {
        if (!tradesData.find((t) => t.managerID == userID)) {
          tradesData.push({ managerID: userID, trades: 0 });
        }
      }
    }
    const transactions2 = [];
    for (const w of wD) {
      let trades = 0;
      if (tradesData[0].managerID) {
        trades = tradesData.find((t) => t.managerID == w.managerID)?.trades || 0;
      } else if (tradesData[0].rosterID) {
        trades = tradesData.find((t) => t.rosterID == w.rosterID)?.trades || 0;
      }
      const waivers = w.waivers;
      transactions2.push({
        rosterID: w.rosterID,
        managerID: w.managerID,
        trades,
        waivers
      });
    }
    setGraphs(wD);
    return transactions2;
  };
  const setTables = (lIQs) => {
    const t = ["Win Percentages", "Points"];
    if (key == "regularSeasonData") {
      t.push("Transactions");
    }
    if (!lIQs[0]?.potentialPoints) {
      iqOffset = 1;
    } else {
      t.unshift("Lineup IQs");
    }
    tables = t;
  };
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  if ($$props.tradesData === void 0 && $$bindings.tradesData && tradesData !== void 0)
    $$bindings.tradesData(tradesData);
  if ($$props.waiversData === void 0 && $$bindings.waiversData && waiversData !== void 0)
    $$bindings.waiversData(waiversData);
  if ($$props.weekRecords === void 0 && $$bindings.weekRecords && weekRecords !== void 0)
    $$bindings.weekRecords(weekRecords);
  if ($$props.weekLows === void 0 && $$bindings.weekLows && weekLows !== void 0)
    $$bindings.weekLows(weekLows);
  if ($$props.seasonLongRecords === void 0 && $$bindings.seasonLongRecords && seasonLongRecords !== void 0)
    $$bindings.seasonLongRecords(seasonLongRecords);
  if ($$props.seasonLongLows === void 0 && $$bindings.seasonLongLows && seasonLongLows !== void 0)
    $$bindings.seasonLongLows(seasonLongLows);
  if ($$props.showTies === void 0 && $$bindings.showTies && showTies !== void 0)
    $$bindings.showTies(showTies);
  if ($$props.winPercentages === void 0 && $$bindings.winPercentages && winPercentages !== void 0)
    $$bindings.winPercentages(winPercentages);
  if ($$props.fptsHistories === void 0 && $$bindings.fptsHistories && fptsHistories !== void 0)
    $$bindings.fptsHistories(fptsHistories);
  if ($$props.lineupIQs === void 0 && $$bindings.lineupIQs && lineupIQs !== void 0)
    $$bindings.lineupIQs(lineupIQs);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  if ($$props.blowouts === void 0 && $$bindings.blowouts && blowouts !== void 0)
    $$bindings.blowouts(blowouts);
  if ($$props.closestMatchups === void 0 && $$bindings.closestMatchups && closestMatchups !== void 0)
    $$bindings.closestMatchups(closestMatchups);
  if ($$props.allTime === void 0 && $$bindings.allTime && allTime !== void 0)
    $$bindings.allTime(allTime);
  if ($$props.leagueTeamManagers === void 0 && $$bindings.leagueTeamManagers && leagueTeamManagers !== void 0)
    $$bindings.leagueTeamManagers(leagueTeamManagers);
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    transactions = setTransactionsAndGraphs(waiversData);
    {
      changeTable(curGraph);
    }
    {
      changeGraph(curTable);
    }
    {
      setTables(lineupIQs);
    }
    $$rendered = `



<h4 class="svelte-onqt6y">${escape(prefix)} Records</h4>

<div class="fullFlex svelte-onqt6y">${weekRecords && weekRecords.length ? `${validate_component(DataTable, "DataTable").$$render($$result, { class: "recordTable" }, {}, {
      default: () => {
        return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Row, "Row").$$render($$result, { class: "rTableHeader" }, {}, {
              default: () => {
                return `${validate_component(Cell, "Cell").$$render(
                  $$result,
                  {
                    class: "header headerPrimary",
                    colspan: "4"
                  },
                  {},
                  {
                    default: () => {
                      return `${escape(prefix)} ${escape(key == "playoffData" ? "Playoff " : "")}Single Week Scoring Records`;
                    }
                  }
                )}`;
              }
            })}
                ${validate_component(Row, "Row").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Cell, "Cell").$$render($$result, { class: "header rank" }, {}, {})}
                    ${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {
                  default: () => {
                    return `Manager`;
                  }
                })}
                    ${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {
                  default: () => {
                    return `Week`;
                  }
                })}
                    ${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {
                  default: () => {
                    return `Total Points`;
                  }
                })}`;
              }
            })}`;
          }
        })}
            ${validate_component(Body, "Body").$$render($$result, {}, {}, {
          default: () => {
            return `${each(weekRecords, (leagueWeekRecord, ix) => {
              return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Cell, "Cell").$$render($$result, { class: "rank" }, {}, {
                    default: () => {
                      return `${escape(ix + 1)}`;
                    }
                  })}
                        ${validate_component(Cell, "Cell").$$render($$result, { class: "cellName" }, {}, {
                    default: () => {
                      return `${validate_component(RecordTeam, "RecordTeam").$$render(
                        $$result,
                        {
                          leagueTeamManagers,
                          rosterID: leagueWeekRecord.rosterID,
                          year: allTime ? leagueWeekRecord.year : prefix
                        },
                        {},
                        {}
                      )}
                        `;
                    }
                  })}
                        ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(allTime ? leagueWeekRecord.year + " " : "")}${escape(key == "regularSeasonData" ? "Week " : "")}${escape(leagueWeekRecord.week)}`;
                    }
                  })}
                        ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(round(leagueWeekRecord.fpts))}`;
                    }
                  })}
                    `;
                }
              })}`;
            })}`;
          }
        })}`;
      }
    })}` : ``}

    ${weekLows && weekLows.length ? `${validate_component(DataTable, "DataTable").$$render($$result, { class: "recordTable" }, {}, {
      default: () => {
        return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Cell, "Cell").$$render(
                  $$result,
                  {
                    class: "header headerPrimary",
                    colspan: "4"
                  },
                  {},
                  {
                    default: () => {
                      return `${escape(prefix)} ${escape(key == "playoffData" ? "Playoff " : "")}Single Week Scoring Lows`;
                    }
                  }
                )}`;
              }
            })}
                ${validate_component(Row, "Row").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Cell, "Cell").$$render($$result, { class: "header rank" }, {}, {})}
                    ${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {
                  default: () => {
                    return `Manager`;
                  }
                })}
                    ${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {
                  default: () => {
                    return `Week`;
                  }
                })}
                    ${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {
                  default: () => {
                    return `Total Points`;
                  }
                })}`;
              }
            })}`;
          }
        })}
            ${validate_component(Body, "Body").$$render($$result, {}, {}, {
          default: () => {
            return `${each(weekLows, (leagueWeekLow, ix) => {
              return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Cell, "Cell").$$render($$result, { class: "rank" }, {}, {
                    default: () => {
                      return `${escape(ix + 1)}`;
                    }
                  })}
                        ${validate_component(Cell, "Cell").$$render($$result, { class: "cellName" }, {}, {
                    default: () => {
                      return `${validate_component(RecordTeam, "RecordTeam").$$render(
                        $$result,
                        {
                          leagueTeamManagers,
                          rosterID: leagueWeekLow.rosterID,
                          year: allTime ? leagueWeekLow.year : prefix
                        },
                        {},
                        {}
                      )}
                        `;
                    }
                  })}
                        ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(allTime ? leagueWeekLow.year + " " : "")}${escape(key == "regularSeasonData" ? "Week " : "")}${escape(leagueWeekLow.week)}`;
                    }
                  })}
                        ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(round(leagueWeekLow.fpts))}`;
                    }
                  })}
                    `;
                }
              })}`;
            })}`;
          }
        })}`;
      }
    })}` : ``}

    ${allTime && key == "regularSeasonData" ? `${validate_component(DataTable, "DataTable").$$render($$result, { class: "recordTable" }, {}, {
      default: () => {
        return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Cell, "Cell").$$render(
                  $$result,
                  {
                    class: "header headerPrimary",
                    colspan: "5"
                  },
                  {},
                  {
                    default: () => {
                      return `All-Time Highest Season Points<span class="italic svelte-onqt6y">Ranked by PPG</span>`;
                    }
                  }
                )}`;
              }
            })}
                ${validate_component(Row, "Row").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Cell, "Cell").$$render($$result, { class: "header rank" }, {}, {})}
                    ${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {
                  default: () => {
                    return `Manager`;
                  }
                })}
                    ${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {
                  default: () => {
                    return `Year`;
                  }
                })}
                    ${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {
                  default: () => {
                    return `Total Points`;
                  }
                })}
                    ${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {
                  default: () => {
                    return `PPG`;
                  }
                })}`;
              }
            })}`;
          }
        })}
            ${validate_component(Body, "Body").$$render($$result, {}, {}, {
          default: () => {
            return `${each(seasonLongRecords, (mostSeasonLongPoint, ix) => {
              return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Cell, "Cell").$$render($$result, { class: "rank" }, {}, {
                    default: () => {
                      return `${escape(ix + 1)}`;
                    }
                  })}
                        ${validate_component(Cell, "Cell").$$render($$result, { class: "cellName" }, {}, {
                    default: () => {
                      return `${validate_component(RecordTeam, "RecordTeam").$$render(
                        $$result,
                        {
                          leagueTeamManagers,
                          rosterID: mostSeasonLongPoint.rosterID,
                          year: mostSeasonLongPoint.year
                        },
                        {},
                        {}
                      )}
                        `;
                    }
                  })}
                        ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(mostSeasonLongPoint.year)}`;
                    }
                  })}
                        ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(round(mostSeasonLongPoint.fpts))}`;
                    }
                  })}
                        ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(mostSeasonLongPoint.fptsPerGame)}`;
                    }
                  })}
                    `;
                }
              })}`;
            })}`;
          }
        })}`;
      }
    })}` : ``}
    
    ${allTime && key == "regularSeasonData" ? `${validate_component(DataTable, "DataTable").$$render($$result, { class: "recordTable" }, {}, {
      default: () => {
        return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Cell, "Cell").$$render(
                  $$result,
                  {
                    class: "header headerPrimary",
                    colspan: "5"
                  },
                  {},
                  {
                    default: () => {
                      return `All-Time Lowest Season Points<span class="italic svelte-onqt6y">Ranked by PPG</span>`;
                    }
                  }
                )}`;
              }
            })}
                ${validate_component(Row, "Row").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Cell, "Cell").$$render($$result, { class: "header rank" }, {}, {})}
                    ${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {
                  default: () => {
                    return `Manager`;
                  }
                })}
                    ${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {
                  default: () => {
                    return `Year`;
                  }
                })}
                    ${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {
                  default: () => {
                    return `Total Points`;
                  }
                })}
                    ${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {
                  default: () => {
                    return `PPG`;
                  }
                })}`;
              }
            })}`;
          }
        })}
            ${validate_component(Body, "Body").$$render($$result, {}, {}, {
          default: () => {
            return `${each(seasonLongLows, (leastSeasonLongPoint, ix) => {
              return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Cell, "Cell").$$render($$result, { class: "rank" }, {}, {
                    default: () => {
                      return `${escape(ix + 1)}`;
                    }
                  })}
                        ${validate_component(Cell, "Cell").$$render($$result, { class: "cellName" }, {}, {
                    default: () => {
                      return `${validate_component(RecordTeam, "RecordTeam").$$render(
                        $$result,
                        {
                          leagueTeamManagers,
                          rosterID: leastSeasonLongPoint.rosterID,
                          year: leastSeasonLongPoint.year
                        },
                        {},
                        {}
                      )}
                        `;
                    }
                  })}
                        ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(leastSeasonLongPoint.year)}`;
                    }
                  })}
                        ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(round(leastSeasonLongPoint.fpts))}`;
                    }
                  })}
                        ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(leastSeasonLongPoint.fptsPerGame)}`;
                    }
                  })}
                    `;
                }
              })}`;
            })}`;
          }
        })}`;
      }
    })}` : ``}

    ${blowouts && blowouts.length ? `${validate_component(DataTable, "DataTable").$$render($$result, { class: "recordTable" }, {}, {
      default: () => {
        return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Cell, "Cell").$$render(
                  $$result,
                  {
                    class: "header headerPrimary",
                    colspan: "4"
                  },
                  {},
                  {
                    default: () => {
                      return `${escape(prefix)} Largest ${escape(key == "playoffData" ? "Playoff " : "")}Blowouts`;
                    }
                  }
                )}`;
              }
            })}
                ${validate_component(Row, "Row").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Cell, "Cell").$$render($$result, { class: "header rank" }, {}, {})}
                    ${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {
                  default: () => {
                    return `Matchup`;
                  }
                })}
                    ${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {
                  default: () => {
                    return `Week`;
                  }
                })}
                    ${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {
                  default: () => {
                    return `Differential`;
                  }
                })}`;
              }
            })}`;
          }
        })}
            ${validate_component(Body, "Body").$$render($$result, {}, {}, {
          default: () => {
            return `${each(blowouts, (blowout, ix) => {
              return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Cell, "Cell").$$render($$result, { class: "rank" }, {}, {
                    default: () => {
                      return `${escape(ix + 1)}`;
                    }
                  })}
                        ${validate_component(Cell, "Cell").$$render($$result, { class: "cellName differentialName" }, {}, {
                    default: () => {
                      return `<div class="vsRecord svelte-onqt6y"><div>${validate_component(RecordTeam, "RecordTeam").$$render(
                        $$result,
                        {
                          leagueTeamManagers,
                          rosterID: blowout.home.rosterID,
                          year: allTime ? blowout.year : prefix,
                          compressed: true,
                          points: round(blowout.home.fpts)
                        },
                        {},
                        {}
                      )}</div>
                                <p class="vs svelte-onqt6y">vs
                                </p>
                                <div>${validate_component(RecordTeam, "RecordTeam").$$render(
                        $$result,
                        {
                          leagueTeamManagers,
                          rosterID: blowout.away.rosterID,
                          year: allTime ? blowout.year : prefix,
                          compressed: true,
                          points: round(blowout.away.fpts)
                        },
                        {},
                        {}
                      )}
                                </div></div>
                        `;
                    }
                  })}
                        ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(allTime ? blowout.year + " " : "")}${escape(key == "regularSeasonData" ? "Week " : "")}${escape(blowout.week)}`;
                    }
                  })}
                        ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(round(blowout.differential))}`;
                    }
                  })}
                    `;
                }
              })}`;
            })}`;
          }
        })}`;
      }
    })}` : ``}

    ${closestMatchups && closestMatchups.length ? `${validate_component(DataTable, "DataTable").$$render($$result, { class: "recordTable" }, {}, {
      default: () => {
        return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Cell, "Cell").$$render(
                  $$result,
                  {
                    class: "header headerPrimary",
                    colspan: "4"
                  },
                  {},
                  {
                    default: () => {
                      return `${escape(prefix)} Narrowest ${escape(key == "playoffData" ? "Playoff " : "")}Wins`;
                    }
                  }
                )}`;
              }
            })}
                ${validate_component(Row, "Row").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Cell, "Cell").$$render($$result, { class: "header rank" }, {}, {})}
                    ${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {
                  default: () => {
                    return `Matchup`;
                  }
                })}
                    ${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {
                  default: () => {
                    return `Week`;
                  }
                })}
                    ${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {
                  default: () => {
                    return `Differential`;
                  }
                })}`;
              }
            })}`;
          }
        })}
            ${validate_component(Body, "Body").$$render($$result, {}, {}, {
          default: () => {
            return `${each(closestMatchups, (closestMatchup, ix) => {
              return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Cell, "Cell").$$render($$result, { class: "rank" }, {}, {
                    default: () => {
                      return `${escape(ix + 1)}`;
                    }
                  })}
                        ${validate_component(Cell, "Cell").$$render($$result, { class: "cellName differentialName" }, {}, {
                    default: () => {
                      return `<div class="vsRecord svelte-onqt6y"><div>${validate_component(RecordTeam, "RecordTeam").$$render(
                        $$result,
                        {
                          leagueTeamManagers,
                          rosterID: closestMatchup.home.rosterID,
                          year: allTime ? closestMatchup.year : prefix,
                          compressed: true,
                          points: round(closestMatchup.home.fpts)
                        },
                        {},
                        {}
                      )}</div>
                                <p class="vs svelte-onqt6y">vs
                                </p>
                                <div>${validate_component(RecordTeam, "RecordTeam").$$render(
                        $$result,
                        {
                          leagueTeamManagers,
                          rosterID: closestMatchup.away.rosterID,
                          year: allTime ? closestMatchup.year : prefix,
                          compressed: true,
                          points: round(closestMatchup.away.fpts)
                        },
                        {},
                        {}
                      )}
                                </div></div>
                        `;
                    }
                  })}
                        ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(allTime ? closestMatchup.year + " " : "")}${escape(key == "regularSeasonData" ? "Week " : "")}${escape(closestMatchup.week)}`;
                    }
                  })}
                        ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(round(closestMatchup.differential))}`;
                    }
                  })}
                    `;
                }
              })}`;
            })}`;
          }
        })}`;
      }
    })}` : ``}</div>

<h4 class="svelte-onqt6y">${escape(prefix)} ${escape(key == "playoffData" ? "Playoff " : "")}Rankings</h4>

${graphs.length ? `${validate_component(BarChart, "BarChart").$$render(
      $$result,
      { graphs, leagueTeamManagers, curGraph },
      {
        curGraph: ($$value) => {
          curGraph = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}

<div class="rankingHolder svelte-onqt6y"><div class="rankingInner svelte-onqt6y" style="${"margin-left: -" + escape(100 * curTable, true) + "%;"}">${lineupIQs[0]?.potentialPoints ? `<div class="rankingTableWrapper svelte-onqt6y">${validate_component(DataTable, "DataTable").$$render($$result, { class: "rankingTable" }, {}, {
      default: () => {
        return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Cell, "Cell").$$render(
                  $$result,
                  {
                    class: "header headerPrimary",
                    colspan: "5"
                  },
                  {},
                  {
                    default: () => {
                      return `${escape(prefix)} ${escape(key == "playoffData" ? "Playoff " : "")}Lineup IQ Rankings
                                <div class="subTitle svelte-onqt6y">The percentage of potential points each manager has captured
                                </div>`;
                    }
                  }
                )}`;
              }
            })}
                        ${validate_component(Row, "Row").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {})}
                            ${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {
                  default: () => {
                    return `Manager`;
                  }
                })}
                            ${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {
                  default: () => {
                    return `Lineup IQ`;
                  }
                })}
                            ${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {
                  default: () => {
                    return `Points`;
                  }
                })}
                            ${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {
                  default: () => {
                    return `Potential Points`;
                  }
                })}`;
              }
            })}`;
          }
        })}
                    ${validate_component(Body, "Body").$$render($$result, {}, {}, {
          default: () => {
            return `${each(lineupIQs, (lineupIQ, ix) => {
              return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(ix + 1)}`;
                    }
                  })}
                                ${validate_component(Cell, "Cell").$$render($$result, { class: "cellName" }, {}, {
                    default: () => {
                      return `${validate_component(RecordTeam, "RecordTeam").$$render(
                        $$result,
                        {
                          leagueTeamManagers,
                          managerID: lineupIQ.managerID,
                          rosterID: lineupIQ.rosterID,
                          year: allTime ? lineupIQ.year : prefix
                        },
                        {},
                        {}
                      )}
                                `;
                    }
                  })}
                                ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(lineupIQ.iq)}%`;
                    }
                  })}
                                ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(round(lineupIQ.fpts))}`;
                    }
                  })}
                                ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(round(lineupIQ.potentialPoints))}`;
                    }
                  })}
                            `;
                }
              })}`;
            })}`;
          }
        })}`;
      }
    })}</div>` : ``}

        <div class="rankingTableWrapper svelte-onqt6y">${validate_component(DataTable, "DataTable").$$render($$result, { class: "rankingTable" }, {}, {
      default: () => {
        return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Cell, "Cell").$$render(
                  $$result,
                  {
                    class: "header headerPrimary",
                    colspan: "6"
                  },
                  {},
                  {
                    default: () => {
                      return `${escape(prefix)} ${escape(key == "playoffData" ? "Playoff " : "")}Win Percentages Rankings`;
                    }
                  }
                )}`;
              }
            })}
                    ${validate_component(Row, "Row").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {})}
                        ${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {
                  default: () => {
                    return `Manager`;
                  }
                })}
                        ${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {
                  default: () => {
                    return `Win %`;
                  }
                })}
                        ${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {
                  default: () => {
                    return `Wins`;
                  }
                })}
                        ${showTies ? `${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {
                  default: () => {
                    return `Ties`;
                  }
                })}` : ``}
                        ${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {
                  default: () => {
                    return `Losses`;
                  }
                })}`;
              }
            })}`;
          }
        })}
                ${validate_component(Body, "Body").$$render($$result, {}, {}, {
          default: () => {
            return `${each(winPercentages, (winPercentage, ix) => {
              return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(ix + 1)}`;
                    }
                  })}
                            ${validate_component(Cell, "Cell").$$render($$result, { class: "cellName" }, {}, {
                    default: () => {
                      return `${validate_component(RecordTeam, "RecordTeam").$$render(
                        $$result,
                        {
                          leagueTeamManagers,
                          managerID: winPercentage.managerID,
                          rosterID: winPercentage.rosterID,
                          year: allTime ? winPercentage.year : prefix
                        },
                        {},
                        {}
                      )}
                            `;
                    }
                  })}
                            ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(winPercentage.percentage)}%`;
                    }
                  })}
                            ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(winPercentage.wins)}`;
                    }
                  })}
                            ${showTies ? `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(winPercentage.ties)}`;
                    }
                  })}` : ``}
                            ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(winPercentage.losses)}`;
                    }
                  })}
                        `;
                }
              })}`;
            })}`;
          }
        })}`;
      }
    })}</div>

        <div class="rankingTableWrapper svelte-onqt6y">${validate_component(DataTable, "DataTable").$$render($$result, { class: "rankingTable" }, {}, {
      default: () => {
        return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Cell, "Cell").$$render(
                  $$result,
                  {
                    class: "header headerPrimary",
                    colspan: "5"
                  },
                  {},
                  {
                    default: () => {
                      return `${escape(prefix)} ${escape(key == "playoffData" ? "Playoff " : "")}Fantasy Points Rankings
                        `;
                    }
                  }
                )}`;
              }
            })}
                    ${validate_component(Row, "Row").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {})}
                        ${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {
                  default: () => {
                    return `Manager`;
                  }
                })}
                        ${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {
                  default: () => {
                    return `Points For`;
                  }
                })}
                        ${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {
                  default: () => {
                    return `Points Against`;
                  }
                })}
                        ${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {
                  default: () => {
                    return `Points Per Game`;
                  }
                })}`;
              }
            })}`;
          }
        })}
                ${validate_component(Body, "Body").$$render($$result, {}, {}, {
          default: () => {
            return `${each(fptsHistories, (fptsHistory, ix) => {
              return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(ix + 1)}`;
                    }
                  })}
                            ${validate_component(Cell, "Cell").$$render($$result, { class: "cellName" }, {}, {
                    default: () => {
                      return `${validate_component(RecordTeam, "RecordTeam").$$render(
                        $$result,
                        {
                          leagueTeamManagers,
                          managerID: fptsHistory.managerID,
                          rosterID: fptsHistory.rosterID,
                          year: allTime ? fptsHistory.year : prefix
                        },
                        {},
                        {}
                      )}
                            `;
                    }
                  })}
                            ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(round(fptsHistory.fptsFor))}`;
                    }
                  })}
                            ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(round(fptsHistory.fptsAgainst))}`;
                    }
                  })}
                            ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(round(fptsHistory.fptsPerGame))}`;
                    }
                  })}
                        `;
                }
              })}`;
            })}`;
          }
        })}`;
      }
    })}</div>

        <div class="rankingTableWrapper svelte-onqt6y">${validate_component(DataTable, "DataTable").$$render($$result, { class: "rankingTable" }, {}, {
      default: () => {
        return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Cell, "Cell").$$render(
                  $$result,
                  {
                    class: "header headerPrimary",
                    colspan: "4"
                  },
                  {},
                  {
                    default: () => {
                      return `${escape(prefix)} Transaction Totals
                        `;
                    }
                  }
                )}`;
              }
            })}
                    ${validate_component(Row, "Row").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {})}
                        ${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {
                  default: () => {
                    return `Manager`;
                  }
                })}
                        ${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {
                  default: () => {
                    return `Trades`;
                  }
                })}
                        ${validate_component(Cell, "Cell").$$render($$result, { class: "header" }, {}, {
                  default: () => {
                    return `Waivers`;
                  }
                })}`;
              }
            })}`;
          }
        })}
                ${validate_component(Body, "Body").$$render($$result, {}, {}, {
          default: () => {
            return `${each(transactions, (transaction, ix) => {
              return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(ix + 1)}`;
                    }
                  })}
                            ${validate_component(Cell, "Cell").$$render($$result, { class: "cellName" }, {}, {
                    default: () => {
                      return `${validate_component(RecordTeam, "RecordTeam").$$render(
                        $$result,
                        {
                          leagueTeamManagers,
                          managerID: transaction.managerID,
                          rosterID: transaction.rosterID,
                          year: allTime ? transaction.year : prefix
                        },
                        {},
                        {}
                      )}
                            `;
                    }
                  })}
                            ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(transaction.trades)}`;
                    }
                  })}
                            ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(transaction.waivers)}`;
                    }
                  })}
                        `;
                }
              })}`;
            })}`;
          }
        })}`;
      }
    })}</div></div></div>

<div class="buttonHolder svelte-onqt6y">${validate_component(Group, "Group").$$render($$result, { variant: "outlined" }, {}, {
      default: () => {
        return `${each(tables, (table, ix) => {
          return `${validate_component(Button_1, "Button").$$render(
            $$result,
            {
              class: "selectionButtons",
              variant: curTable == ix ? "raised" : "outlined"
            },
            {},
            {
              default: () => {
                return `${validate_component(Label, "Label").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(table)}`;
                  }
                })}
            `;
              }
            }
          )}`;
        })}`;
      }
    })}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const AllTimeRecords = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { key, leagueManagerRecords, leagueTeamManagers, leagueWeekHighs, leagueWeekLows, allTimeBiggestBlowouts, allTimeClosestMatchups, mostSeasonLongPoints, leastSeasonLongPoints, transactionTotals } = $$props;
  let winPercentages = [];
  let lineupIQs = [];
  let fptsHistories = [];
  let tradesData = [];
  let waiversData = [];
  let showTies = false;
  for (const managerID in transactionTotals.allTime) {
    tradesData.push({
      managerID,
      trades: transactionTotals.allTime[managerID].trade
    });
    waiversData.push({
      managerID,
      waivers: transactionTotals.allTime[managerID].waiver
    });
  }
  const setRankingsData = (lRR) => {
    winPercentages = [];
    lineupIQs = [];
    fptsHistories = [];
    tradesData = [];
    waiversData = [];
    showTies = false;
    for (const key2 in lRR) {
      const leagueManagerRecord = lRR[key2];
      const denominator = leagueManagerRecord.wins + leagueManagerRecord.ties + leagueManagerRecord.losses > 0 ? leagueManagerRecord.wins + leagueManagerRecord.ties + leagueManagerRecord.losses : 1;
      winPercentages.push({
        managerID: key2,
        percentage: round((leagueManagerRecord.wins + leagueManagerRecord.ties / 2) / denominator * 100),
        wins: leagueManagerRecord.wins,
        ties: leagueManagerRecord.ties,
        losses: leagueManagerRecord.losses
      });
      let lineupIQ = {
        managerID: key2,
        fpts: round(leagueManagerRecord.fptsFor)
      };
      if (leagueManagerRecord.potentialPoints) {
        lineupIQ.iq = round(leagueManagerRecord.fptsFor / leagueManagerRecord.potentialPoints * 100);
        lineupIQ.potentialPoints = round(leagueManagerRecord.potentialPoints);
      }
      lineupIQs.push(lineupIQ);
      fptsHistories.push({
        managerID: key2,
        fptsFor: round(leagueManagerRecord.fptsFor),
        fptsAgainst: round(leagueManagerRecord.fptsAgainst),
        fptsPerGame: round(leagueManagerRecord.fptsFor / denominator)
      });
      if (leagueManagerRecord.ties > 0)
        showTies = true;
    }
    for (const managerID in transactionTotals.allTime) {
      tradesData.push({
        managerID,
        trades: transactionTotals.allTime[managerID].trade
      });
      waiversData.push({
        managerID,
        waivers: transactionTotals.allTime[managerID].waiver
      });
    }
    winPercentages.sort((a, b) => b.percentage - a.percentage);
    lineupIQs.sort((a, b) => b.iq - a.iq);
    fptsHistories.sort((a, b) => b.fptsFor - a.fptsFor);
    tradesData.sort((a, b) => b.trades - a.trades);
    waiversData.sort((a, b) => b.waivers - a.waivers);
  };
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  if ($$props.leagueManagerRecords === void 0 && $$bindings.leagueManagerRecords && leagueManagerRecords !== void 0)
    $$bindings.leagueManagerRecords(leagueManagerRecords);
  if ($$props.leagueTeamManagers === void 0 && $$bindings.leagueTeamManagers && leagueTeamManagers !== void 0)
    $$bindings.leagueTeamManagers(leagueTeamManagers);
  if ($$props.leagueWeekHighs === void 0 && $$bindings.leagueWeekHighs && leagueWeekHighs !== void 0)
    $$bindings.leagueWeekHighs(leagueWeekHighs);
  if ($$props.leagueWeekLows === void 0 && $$bindings.leagueWeekLows && leagueWeekLows !== void 0)
    $$bindings.leagueWeekLows(leagueWeekLows);
  if ($$props.allTimeBiggestBlowouts === void 0 && $$bindings.allTimeBiggestBlowouts && allTimeBiggestBlowouts !== void 0)
    $$bindings.allTimeBiggestBlowouts(allTimeBiggestBlowouts);
  if ($$props.allTimeClosestMatchups === void 0 && $$bindings.allTimeClosestMatchups && allTimeClosestMatchups !== void 0)
    $$bindings.allTimeClosestMatchups(allTimeClosestMatchups);
  if ($$props.mostSeasonLongPoints === void 0 && $$bindings.mostSeasonLongPoints && mostSeasonLongPoints !== void 0)
    $$bindings.mostSeasonLongPoints(mostSeasonLongPoints);
  if ($$props.leastSeasonLongPoints === void 0 && $$bindings.leastSeasonLongPoints && leastSeasonLongPoints !== void 0)
    $$bindings.leastSeasonLongPoints(leastSeasonLongPoints);
  if ($$props.transactionTotals === void 0 && $$bindings.transactionTotals && transactionTotals !== void 0)
    $$bindings.transactionTotals(transactionTotals);
  {
    setRankingsData(leagueManagerRecords);
  }
  return `${validate_component(RecordsAndRankings, "RecordsAndRankings").$$render(
    $$result,
    {
      blowouts: allTimeBiggestBlowouts,
      closestMatchups: allTimeClosestMatchups,
      weekRecords: leagueWeekHighs,
      weekLows: leagueWeekLows,
      seasonLongRecords: mostSeasonLongPoints,
      seasonLongLows: leastSeasonLongPoints,
      showTies,
      winPercentages,
      fptsHistories,
      lineupIQs,
      tradesData,
      waiversData,
      prefix: "All-Time",
      allTime: true,
      leagueTeamManagers,
      key
    },
    {},
    {}
  )}`;
});
const css$1 = {
  code: ".rankingsWrapper.svelte-1usg986{margin:0 auto;width:100%;max-width:1200px}.empty.svelte-1usg986{margin:10em 0 4em;text-align:center}.buttonHolder.svelte-1usg986{text-align:center;margin:2em 0 0}@media(max-width: 540px){.buttonHolder .selectionButtons{font-size:0.6em}}@media(max-width: 415px){.buttonHolder .selectionButtons{font-size:0.5em;padding:0 6px}}@media(max-width: 315px){.buttonHolder .selectionButtons{font-size:0.45em;padding:0 3px}}",
  map: null
};
const Records = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { leagueData, totals, stale, leagueTeamManagers } = $$props;
  const refreshTransactions = async () => {
    const newTransactions = await getLeagueTransactions(false, true);
    totals = newTransactions.totals;
  };
  let leagueManagerRecords, leagueWeekHighs, leagueWeekLows, allTimeClosestMatchups, allTimeBiggestBlowouts, mostSeasonLongPoints, leastSeasonLongPoints;
  const refreshRecords = async () => {
    const newRecords = await getLeagueRecords(true);
    leagueData = newRecords;
  };
  let key = "regularSeasonData";
  const refreshData = (lD, k) => {
    if (!lD || !lD[k])
      return;
    const selectedLeagueData = lD[k];
    leagueManagerRecords = selectedLeagueData.leagueManagerRecords;
    selectedLeagueData.leagueRosterRecords;
    leagueWeekHighs = selectedLeagueData.leagueWeekHighs;
    leagueWeekLows = selectedLeagueData.leagueWeekLows;
    allTimeClosestMatchups = selectedLeagueData.allTimeClosestMatchups;
    allTimeBiggestBlowouts = selectedLeagueData.allTimeBiggestBlowouts;
    mostSeasonLongPoints = selectedLeagueData.mostSeasonLongPoints;
    leastSeasonLongPoints = selectedLeagueData.leastSeasonLongPoints;
    selectedLeagueData.seasonWeekRecords;
    selectedLeagueData.currentYear;
    selectedLeagueData.lastYear;
  };
  if (stale) {
    refreshTransactions();
  }
  if (leagueData.stale) {
    refreshRecords();
  }
  if ($$props.leagueData === void 0 && $$bindings.leagueData && leagueData !== void 0)
    $$bindings.leagueData(leagueData);
  if ($$props.totals === void 0 && $$bindings.totals && totals !== void 0)
    $$bindings.totals(totals);
  if ($$props.stale === void 0 && $$bindings.stale && stale !== void 0)
    $$bindings.stale(stale);
  if ($$props.leagueTeamManagers === void 0 && $$bindings.leagueTeamManagers && leagueTeamManagers !== void 0)
    $$bindings.leagueTeamManagers(leagueTeamManagers);
  $$result.css.add(css$1);
  {
    refreshData(leagueData, key);
  }
  return `<div class="rankingsWrapper svelte-1usg986"><div class="buttonHolder svelte-1usg986">${validate_component(Group, "Group").$$render($$result, { variant: "outlined" }, {}, {
    default: () => {
      return `${validate_component(Button_1, "Button").$$render(
        $$result,
        {
          class: "selectionButtons",
          variant: "raised"
        },
        {},
        {
          default: () => {
            return `${validate_component(Label, "Label").$$render($$result, {}, {}, {
              default: () => {
                return `Regular Season`;
              }
            })}`;
          }
        }
      )}
            ${validate_component(Button_1, "Button").$$render(
        $$result,
        {
          class: "selectionButtons",
          variant: "outlined"
        },
        {},
        {
          default: () => {
            return `${validate_component(Label, "Label").$$render($$result, {}, {}, {
              default: () => {
                return `Playoffs`;
              }
            })}`;
          }
        }
      )}`;
    }
  })}
        <br>
        ${validate_component(Group, "Group").$$render($$result, { variant: "outlined" }, {}, {
    default: () => {
      return `${validate_component(Button_1, "Button").$$render(
        $$result,
        {
          class: "selectionButtons",
          variant: "raised"
        },
        {},
        {
          default: () => {
            return `${validate_component(Label, "Label").$$render($$result, {}, {}, {
              default: () => {
                return `All-Time Records`;
              }
            })}`;
          }
        }
      )}
            ${validate_component(Button_1, "Button").$$render(
        $$result,
        {
          class: "selectionButtons",
          variant: "outlined"
        },
        {},
        {
          default: () => {
            return `${validate_component(Label, "Label").$$render($$result, {}, {}, {
              default: () => {
                return `Season Records`;
              }
            })}`;
          }
        }
      )}`;
    }
  })}</div>

    ${`${leagueWeekHighs?.length ? `${validate_component(AllTimeRecords, "AllTimeRecords").$$render(
    $$result,
    {
      transactionTotals: totals,
      allTimeClosestMatchups,
      allTimeBiggestBlowouts,
      leagueManagerRecords,
      leagueWeekHighs,
      leagueWeekLows,
      leagueTeamManagers,
      mostSeasonLongPoints,
      leastSeasonLongPoints,
      key
    },
    {},
    {}
  )}` : `<p class="empty svelte-1usg986">No records <i>yet</i>...</p>`}`}</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#main.svelte-1k46pdo{position:relative;z-index:1}.loading.svelte-1k46pdo{display:block;width:85%;max-width:500px;margin:80px auto}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const recordsInfo = data.recordsInfo;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div id="main" class="svelte-1k46pdo">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
        
        <div class="loading svelte-1k46pdo"><p>Loading league records...</p>
            ${validate_component(LinearProgress, "LinearProgress").$$render($$result, { indeterminate: true }, {}, {})}</div>
    `;
    }
    return function([leagueData, { totals, stale }, leagueTeamManagers]) {
      return `
        ${validate_component(Records, "Records").$$render(
        $$result,
        {
          leagueData,
          totals,
          stale,
          leagueTeamManagers
        },
        {},
        {}
      )}
    `;
    }(__value);
  }(recordsInfo)}</div>`;
});
export {
  Page as default
};
