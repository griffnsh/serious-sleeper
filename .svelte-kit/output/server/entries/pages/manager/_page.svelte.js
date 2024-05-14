import { c as create_ssr_component, k as each, j as escape, f as add_attribute, v as validate_component, n as is_promise, p as noop } from "../../../chunks/index3.js";
import { L as LinearProgress } from "../../../chunks/LinearProgress.js";
import "../../../chunks/index.svelte_svelte_type_style_lang.js";
import "../../../chunks/records.js";
import "fuzzyjs";
import { G as Group } from "../../../chunks/index7.js";
import { d as getTeamNameFromTeamManagers, r as round, e as checkIfManagerReceivedAward, f as getDatesActive, h as getRosterIDFromManagerID } from "../../../chunks/universalFunctions.js";
import { L as Label } from "../../../chunks/index4.js";
import { B as Button_1 } from "../../../chunks/Button.js";
const css$2 = {
  code: ".awardsCase.svelte-7q111m{background-color:var(--fff);padding:0 0 2em;margin:3em 0 4em;border-bottom:1px solid var(--aaa);border-top:1px solid var(--aaa);box-shadow:0 0 8px 4px var(--ccc)}.awardsCaseInner.svelte-7q111m{display:flex;justify-content:space-evenly;flex-wrap:wrap}h3.svelte-7q111m{text-align:center;font-size:1.5em;margin:1.5em 0 0.5em;font-weight:200}.award.svelte-7q111m{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;margin:1em 0.5em 2em}.awardHeader.svelte-7q111m,.awardLabel.svelte-7q111m,.subText.svelte-7q111m{text-align:center;line-height:1.2em}.awardHeader.svelte-7q111m{height:2.4em;font-size:0.85em;width:110px;margin-bottom:0.5em}.awardLabel.svelte-7q111m{font-size:0.9em;margin-top:1em;font-weight:500;width:130px}.subText.svelte-7q111m{font-size:0.8em;width:130px;color:var(--g555);margin-top:0.3em;font-style:italic}.sad.svelte-7q111m{color:var(--g999);font-style:italic}.awardIcon.svelte-7q111m{height:80px;width:80px;border-radius:100%;box-shadow:0 0 4px 1px var(--ccc);text-align:center;overflow:hidden}.awardImage.svelte-7q111m{height:100%}.disclaimer.svelte-7q111m{font-size:0.8em;color:var(--g999);font-style:italic;text-align:center;margin:0;line-height:1em}@media(max-width: 730px){.awardHeader.svelte-7q111m{height:3.6em;font-size:0.8em;width:90px}.awardLabel.svelte-7q111m{width:90px}.subText.svelte-7q111m{width:90px}}@media(max-width: 530px){.awardIcon.svelte-7q111m{height:60px;width:60px}.awardHeader.svelte-7q111m{height:3.6em;font-size:0.58em;width:65px}.awardLabel.svelte-7q111m{font-size:0.7em;width:65px}.subText.svelte-7q111m{font-size:0.6em;width:65px}}",
  map: null
};
const ManagerAwards = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { awards, records, rosterID, tookOver, leagueTeamManagers, managerID } = $$props;
  let displayAwards = [];
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  let formerGlobal = false;
  const checkIfDeserves = (awardRosterID, userRosterID, year) => {
    if (!managerID || !year || !awardRosterID) {
      return awardRosterID == userRosterID;
    }
    return checkIfManagerReceivedAward(leagueTeamManagers, awardRosterID, year, managerID);
  };
  const checkIfDeservesWithManagerID = (recordManagerID, userRosterID) => {
    if (managerID) {
      return recordManagerID == managerID;
    }
    for (const year in leagueTeamManagers.teamManagersMap) {
      for (const rosterID2 in leagueTeamManagers.teamManagersMap[year]) {
        if (leagueTeamManagers.teamManagersMap[year][rosterID2].managers.indexOf(recordManagerID) > -1) {
          return rosterID2 == userRosterID;
        }
      }
    }
    return false;
  };
  const computePodiums = (cRosterID) => {
    formerGlobal = false;
    displayAwards = [];
    for (const podium of awards) {
      for (const award in podium) {
        if (award == "year")
          continue;
        if (award == "divisions") {
          for (const division of podium[award]) {
            if (checkIfDeserves(division.rosterID, cRosterID, podium.year)) {
              const former = tookOver && tookOver > podium.year;
              if (former) {
                formerGlobal = true;
              }
              let awardTitle = "Regular Season Champion";
              if (division.name) {
                awardTitle = `${division.name} Division Champion`;
              }
              displayAwards.push({
                award: awardTitle,
                icon: "/awards/division.png",
                type: "award",
                originalName: getTeamNameFromTeamManagers(leagueTeamManagers, cRosterID, podium.year),
                year: podium.year,
                former
              });
            }
          }
        } else if (checkIfDeserves(podium[award], cRosterID, podium.year)) {
          const former = tookOver && tookOver > podium.year;
          if (former) {
            formerGlobal = true;
          }
          displayAwards.push({
            award: capitalizeFirstLetter(award),
            icon: "/awards/" + award + ".png",
            type: "award",
            originalName: getTeamNameFromTeamManagers(leagueTeamManagers, cRosterID, podium.year),
            year: podium.year,
            former
          });
        }
      }
    }
    const leagueManagerRecords = [];
    for (const key in records.regularSeasonData.leagueManagerRecords) {
      const record = records.regularSeasonData.leagueManagerRecords[key];
      record.rosterID = key;
      leagueManagerRecords.push(record);
    }
    const winRecords = [...leagueManagerRecords].sort((a, b) => b.wins - a.wins);
    const pointsRecords = [...leagueManagerRecords].sort((a, b) => b.fptsFor - a.fptsFor);
    const iqRecords = [...leagueManagerRecords].sort((a, b) => b.fptsFor / b.potentialPoints - a.fptsFor / a.potentialPoints);
    for (let i = 0; i < records.regularSeasonData.leagueWeekHighs.length; i++) {
      const leagueWeekRecord = records.regularSeasonData.leagueWeekHighs[i];
      const seasonLongRecord = records.regularSeasonData.mostSeasonLongPoints[i];
      const winRecord = winRecords[i];
      const pointsRecord = pointsRecords[i];
      const iqRecord = iqRecords[i];
      if (checkIfDeservesWithManagerID(winRecord?.rosterID, cRosterID) && i < 3) {
        displayAwards.push({
          award: i + 1,
          icon: "/awards/record-" + (i + 1) + ".png",
          type: "All-Time Wins Record",
          extraInfo: winRecord.wins,
          wins: true
        });
      }
      if (checkIfDeservesWithManagerID(pointsRecord?.rosterID, cRosterID) && i < 3) {
        displayAwards.push({
          award: i + 1,
          icon: "/awards/record-" + (i + 1) + ".png",
          type: "All-Time Fantasy Points Record",
          extraInfo: round(pointsRecord.fptsFor)
        });
      }
      if (checkIfDeservesWithManagerID(iqRecord?.rosterID, cRosterID) && i < 3) {
        displayAwards.push({
          award: i + 1,
          icon: "/awards/record-" + (i + 1) + ".png",
          type: "All-Time Lineup IQ Record",
          extraInfo: round(iqRecord.fptsFor * 100 / iqRecord.potentialPoints),
          iq: true
        });
      }
      if (checkIfDeserves(leagueWeekRecord.rosterID, cRosterID, leagueWeekRecord.year)) {
        const former = tookOver && tookOver > leagueWeekRecord.year;
        if (former) {
          formerGlobal = true;
        }
        displayAwards.push({
          award: i + 1,
          icon: "/awards/" + (i < 3 ? `record-${i + 1}` : "generic") + ".png",
          type: "All-Time Single Week Record",
          originalName: getTeamNameFromTeamManagers(leagueTeamManagers, cRosterID, leagueWeekRecord.year),
          year: leagueWeekRecord.year,
          week: leagueWeekRecord.week,
          extraInfo: leagueWeekRecord.fpts,
          former
        });
      }
      if (checkIfDeserves(seasonLongRecord.rosterID, cRosterID, seasonLongRecord.year)) {
        const former = tookOver && tookOver > seasonLongRecord.year;
        if (former) {
          formerGlobal = true;
        }
        displayAwards.push({
          award: i + 1,
          icon: "/awards/" + (i < 3 ? `record-${i + 1}` : "generic") + ".png",
          type: "All-Time Season Long Points",
          originalName: getTeamNameFromTeamManagers(leagueTeamManagers, cRosterID, seasonLongRecord.year),
          year: seasonLongRecord.year,
          extraInfo: seasonLongRecord.fpts,
          former
        });
      }
    }
    for (const yearRecords of records.regularSeasonData.seasonWeekRecords) {
      for (let i = 0; i < 3; i++) {
        const seasonPointsRecord = yearRecords.seasonPointsHighs[i];
        if (checkIfDeserves(seasonPointsRecord.rosterID, cRosterID, yearRecords.year)) {
          const former = tookOver && tookOver > yearRecords.year;
          if (former) {
            formerGlobal = true;
          }
          displayAwards.push({
            award: i + 1,
            icon: "/awards/" + (i < 3 ? `record-${i + 1}` : "generic") + ".png",
            type: `${yearRecords.year} Single Week Record`,
            originalName: getTeamNameFromTeamManagers(leagueTeamManagers, cRosterID, seasonPointsRecord.year),
            year: null,
            week: seasonPointsRecord.week,
            extraInfo: seasonPointsRecord.fpts,
            former
          });
        }
      }
    }
  };
  const computeAward = (award) => {
    switch (award) {
      case 1:
        return "1st Place";
      case 2:
        return "2nd Place";
      case 3:
        return "3rd Place";
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
        return award + "th Place";
      case "Champion":
        return award;
      case "Second":
      case "Third":
        return award + " Place";
      case "Toilet":
        return award + " Bowl";
      default:
        return award;
    }
  };
  if ($$props.awards === void 0 && $$bindings.awards && awards !== void 0)
    $$bindings.awards(awards);
  if ($$props.records === void 0 && $$bindings.records && records !== void 0)
    $$bindings.records(records);
  if ($$props.rosterID === void 0 && $$bindings.rosterID && rosterID !== void 0)
    $$bindings.rosterID(rosterID);
  if ($$props.tookOver === void 0 && $$bindings.tookOver && tookOver !== void 0)
    $$bindings.tookOver(tookOver);
  if ($$props.leagueTeamManagers === void 0 && $$bindings.leagueTeamManagers && leagueTeamManagers !== void 0)
    $$bindings.leagueTeamManagers(leagueTeamManagers);
  if ($$props.managerID === void 0 && $$bindings.managerID && managerID !== void 0)
    $$bindings.managerID(managerID);
  $$result.css.add(css$2);
  {
    computePodiums(rosterID);
  }
  return `<div class="awardsCase svelte-7q111m"><h3 class="svelte-7q111m">Team Awards &amp; Records</h3>
    <div class="awardsCaseInner svelte-7q111m">${displayAwards.length ? each(displayAwards, (award) => {
    return `<div class="award svelte-7q111m"><div class="awardHeader svelte-7q111m">${escape(award.type != "award" ? award.type : "")}</div>
                <div class="awardIcon svelte-7q111m"><img class="awardImage svelte-7q111m"${add_attribute("src", award.icon, 0)} alt="trophy"></div>
                <div class="awardLabel svelte-7q111m">${escape(award.type == "award" ? `${award.year} ` : "")}${escape(computeAward(award.award))}${escape(award.former ? "*" : "")}</div>
                ${award.extraInfo ? `<div class="subText svelte-7q111m">${escape(award.year ? `${award.year} ` : "")}${escape(award.week ? `Week ${award.week} ` : "")}${escape(award.year || award.week ? " - " : "")}${escape(award.extraInfo)}${escape(award.wins ? " Wins" : "")}${escape(award.iq ? "%" : "")}${escape(!award.wins && !award.iq ? "pts" : "")}</div>` : ``}
            </div>`;
  }) : `<p class="sad svelte-7q111m">...nothing yet</p>`}</div>
    ${formerGlobal ? `<p class="disclaimer svelte-7q111m">*Awarded under a previous manager</p>` : ``}</div>`;
});
const css$1 = {
  code: ".managerContainer.svelte-106z4mu.svelte-106z4mu{width:100%;margin:2em 0 5em}.managerConstrained.svelte-106z4mu.svelte-106z4mu{width:97%;max-width:800px;margin:0 auto 4em}.managerPhoto.svelte-106z4mu.svelte-106z4mu{display:block;border-radius:100%;width:70%;max-width:200px;height:auto;margin:5em auto 1em;box-shadow:0 0 8px 4px #aaa}h2.svelte-106z4mu.svelte-106z4mu{text-align:center;font-size:2.8em;margin:1em 0 0em;line-height:1em}h3.svelte-106z4mu.svelte-106z4mu{text-align:center;font-size:1.5em;margin:1.5em 0 0.5em;font-weight:200}.basicInfo.svelte-106z4mu.svelte-106z4mu{display:flex;justify-content:space-evenly;align-items:center;height:24px;margin:2em 0}.basicInfo.svelte-106z4mu span.svelte-106z4mu{color:#888;font-size:0.9em}.infoChild.svelte-106z4mu.svelte-106z4mu{font-style:italic}.infoContact.svelte-106z4mu.svelte-106z4mu{height:20px;vertical-align:middle;padding-left:1em}.infoTeam.svelte-106z4mu.svelte-106z4mu{height:48px}.bio.svelte-106z4mu.svelte-106z4mu{margin:2em 1.5em 2em;text-indent:4em}.philosophy.svelte-106z4mu.svelte-106z4mu{margin:2em 1.5em 2em;text-indent:4em}.loading.svelte-106z4mu.svelte-106z4mu{display:block;width:85%;max-width:500px;margin:80px auto}.teamSub.svelte-106z4mu.svelte-106z4mu{font-size:0.4em;line-height:1em;color:#666}.managerNav.svelte-106z4mu.svelte-106z4mu{margin:4em 0 2em;text-align:center}.upper.svelte-106z4mu.svelte-106z4mu{margin-top:0}.commissionerBadge.svelte-106z4mu.svelte-106z4mu{display:flex;justify-content:center;align-items:center;height:25px;width:25px;font-weight:600;border-radius:15px;background-color:var(--blueTwo);border:1px solid var(--blueOne)}.commissionerBadge.svelte-106z4mu span.svelte-106z4mu{font-style:normal;color:#fff}@media(max-width: 505px){.selectionButtons span{font-size:0.8em}}@media(max-width: 435px){.selectionButtons span{line-height:1.2em;font-size:0.8em}}@media(max-width: 450px){.basicInfo.svelte-106z4mu.svelte-106z4mu{height:20px}.basicInfo.svelte-106z4mu span.svelte-106z4mu{font-size:0.75em}.infoTeam.svelte-106z4mu.svelte-106z4mu{height:30px}}@media(max-width: 370px){.basicInfo.svelte-106z4mu.svelte-106z4mu{height:18px}.basicInfo.svelte-106z4mu span.svelte-106z4mu{font-size:0.6em}.infoTeam.svelte-106z4mu.svelte-106z4mu{height:24px}}",
  map: null
};
const Manager = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let viewManager;
  let datesActive;
  let rosterID;
  let year;
  let roster;
  let coOwners;
  let commissioner;
  let { manager, managers, rostersData, leagueTeamManagers, rosterPositions, transactionsData, awards, records } = $$props;
  let transactions = transactionsData.transactions;
  rostersData.startersAndReserve;
  let rosters = rostersData.rosters;
  if ($$props.manager === void 0 && $$bindings.manager && manager !== void 0)
    $$bindings.manager(manager);
  if ($$props.managers === void 0 && $$bindings.managers && managers !== void 0)
    $$bindings.managers(managers);
  if ($$props.rostersData === void 0 && $$bindings.rostersData && rostersData !== void 0)
    $$bindings.rostersData(rostersData);
  if ($$props.leagueTeamManagers === void 0 && $$bindings.leagueTeamManagers && leagueTeamManagers !== void 0)
    $$bindings.leagueTeamManagers(leagueTeamManagers);
  if ($$props.rosterPositions === void 0 && $$bindings.rosterPositions && rosterPositions !== void 0)
    $$bindings.rosterPositions(rosterPositions);
  if ($$props.transactionsData === void 0 && $$bindings.transactionsData && transactionsData !== void 0)
    $$bindings.transactionsData(transactionsData);
  if ($$props.awards === void 0 && $$bindings.awards && awards !== void 0)
    $$bindings.awards(awards);
  if ($$props.records === void 0 && $$bindings.records && records !== void 0)
    $$bindings.records(records);
  $$result.css.add(css$1);
  viewManager = managers[manager];
  datesActive = getDatesActive(leagueTeamManagers, viewManager.managerID);
  ({ rosterID, year } = viewManager.managerID ? getRosterIDFromManagerID(leagueTeamManagers, viewManager.managerID) : { rosterID: viewManager.roster, year: null });
  transactions.filter((t) => t.rosters.includes(parseInt(rosterID)));
  roster = rosters[rosterID];
  coOwners = year && rosterID ? leagueTeamManagers.teamManagersMap[year][rosterID].managers.length > 1 : roster.co_owners;
  commissioner = viewManager.managerID ? leagueTeamManagers.users[viewManager.managerID].is_owner : false;
  return `<div class="managerContainer svelte-106z4mu"><div class="managerConstrained svelte-106z4mu"><img class="managerPhoto svelte-106z4mu"${add_attribute("src", viewManager.photo, 0)} alt="manager">
        <h2 class="svelte-106z4mu">${escape(viewManager.name)}
            <div class="teamSub svelte-106z4mu">${escape(coOwners ? "Co-" : "")}Manager of <i>${escape(getTeamNameFromTeamManagers(leagueTeamManagers, rosterID, year))}</i></div></h2>
        
        <div class="basicInfo svelte-106z4mu"><span class="infoChild svelte-106z4mu">${escape(viewManager.location || "Undisclosed Location")}</span>
            ${viewManager.managerID && datesActive.start ? `<span class="seperator svelte-106z4mu">|</span>
                ${datesActive.end ? `<span class="infoChild svelte-106z4mu">In the league from &#39;${escape(datesActive.start.toString().substr(2))} to &#39;${escape(datesActive.end.toString().substr(2))}</span>` : `<span class="infoChild svelte-106z4mu">In the league since &#39;${escape(datesActive.start.toString().substr(2))}</span>`}` : `${viewManager.fantasyStart ? `
                <span class="seperator svelte-106z4mu">|</span>
                <span class="infoChild svelte-106z4mu">Playing ff since &#39;${escape(viewManager.fantasyStart.toString().substr(2))}</span>` : ``}`}
            ${viewManager.preferredContact ? `
                <span class="seperator svelte-106z4mu">|</span>
                <span class="infoChild svelte-106z4mu">${escape(viewManager.preferredContact)}<img class="infoChild infoContact svelte-106z4mu" src="${"/" + escape(viewManager.preferredContact, true) + ".png"}" alt="favorite team"></span>` : ``}
            
            ${viewManager.favoriteTeam ? `
                <span class="seperator svelte-106z4mu">|</span>
                <img class="infoChild infoTeam svelte-106z4mu" src="${"https://sleepercdn.com/images/team_logos/nfl/" + escape(viewManager.favoriteTeam, true) + ".png"}" alt="favorite team">` : ``}
            ${commissioner ? `<span class="seperator svelte-106z4mu">|</span>
                <div class="infoChild commissionerBadge svelte-106z4mu"><span class="svelte-106z4mu">C</span></div>` : ``}</div>

        <div class="managerNav upper svelte-106z4mu">${validate_component(Group, "Group").$$render($$result, { variant: "outlined" }, {}, {
    default: () => {
      return `${manager == 0 ? `${validate_component(Button_1, "Button").$$render(
        $$result,
        {
          disabled: true,
          class: "selectionButtons",
          variant: "outlined"
        },
        {},
        {
          default: () => {
            return `${validate_component(Label, "Label").$$render($$result, {}, {}, {
              default: () => {
                return `Previous Manager`;
              }
            })}`;
          }
        }
      )}` : `${validate_component(Button_1, "Button").$$render(
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
                return `Previous Manager`;
              }
            })}`;
          }
        }
      )}`}
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
                return `All Managers`;
              }
            })}`;
          }
        }
      )}
                ${manager == managers.length - 1 ? `${validate_component(Button_1, "Button").$$render(
        $$result,
        {
          disabled: true,
          class: "selectionButtons",
          variant: "outlined"
        },
        {},
        {
          default: () => {
            return `${validate_component(Label, "Label").$$render($$result, {}, {}, {
              default: () => {
                return `Next Manager`;
              }
            })}`;
          }
        }
      )}` : `${validate_component(Button_1, "Button").$$render(
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
                return `Next Manager`;
              }
            })}`;
          }
        }
      )}`}`;
    }
  })}</div>

        <p class="bio svelte-106z4mu"><!-- HTML_TAG_START -->${viewManager.bio}<!-- HTML_TAG_END --></p>

        ${viewManager.philosophy ? `
            <h3 class="svelte-106z4mu">Team Philosophy</h3>
            <p class="philosophy svelte-106z4mu"><!-- HTML_TAG_START -->${viewManager.philosophy}<!-- HTML_TAG_END --></p>` : ``}</div>

    ${``}

    ${validate_component(ManagerAwards, "ManagerAwards").$$render(
    $$result,
    {
      leagueTeamManagers,
      tookOver: viewManager.tookOver,
      awards,
      records,
      rosterID,
      managerID: viewManager.managerID
    },
    {},
    {}
  )}

    ${`
        <div class="loading svelte-106z4mu"><p>Retrieving players...</p>
            ${validate_component(LinearProgress, "LinearProgress").$$render($$result, { indeterminate: true }, {}, {})}</div>`}

    <h3 class="svelte-106z4mu">Team Transactions</h3>
    <div class="managerConstrained svelte-106z4mu">${`
            <div class="loading svelte-106z4mu"><p>Retrieving players...</p>
                ${validate_component(LinearProgress, "LinearProgress").$$render($$result, { indeterminate: true }, {}, {})}</div>`}</div>

    <div class="managerNav svelte-106z4mu">${validate_component(Group, "Group").$$render($$result, { variant: "outlined" }, {}, {
    default: () => {
      return `${manager == 0 ? `${validate_component(Button_1, "Button").$$render(
        $$result,
        {
          disabled: true,
          class: "selectionButtons",
          variant: "outlined"
        },
        {},
        {
          default: () => {
            return `${validate_component(Label, "Label").$$render($$result, {}, {}, {
              default: () => {
                return `Previous Manager`;
              }
            })}`;
          }
        }
      )}` : `${validate_component(Button_1, "Button").$$render(
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
                return `Previous Manager`;
              }
            })}`;
          }
        }
      )}`}
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
                return `All Managers`;
              }
            })}`;
          }
        }
      )}
            ${manager == managers.length - 1 ? `${validate_component(Button_1, "Button").$$render(
        $$result,
        {
          disabled: true,
          class: "selectionButtons",
          variant: "outlined"
        },
        {},
        {
          default: () => {
            return `${validate_component(Label, "Label").$$render($$result, {}, {}, {
              default: () => {
                return `Next Manager`;
              }
            })}`;
          }
        }
      )}` : `${validate_component(Button_1, "Button").$$render(
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
                return `Next Manager`;
              }
            })}`;
          }
        }
      )}`}`;
    }
  })}</div></div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".main.svelte-70pmkv{position:relative;z-index:1}.loading.svelte-70pmkv{display:block;width:85%;max-width:500px;margin:80px auto}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { managers, manager, managersInfo } = data;
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
    return function([
      rostersData,
      leagueTeamManagers,
      leagueData,
      transactionsData,
      awards,
      records
    ]) {
      return `
            ${managers.length && manager > -1 ? `${validate_component(Manager, "Manager").$$render(
        $$result,
        {
          awards,
          records,
          manager,
          managers,
          rostersData,
          leagueTeamManagers,
          rosterPositions: leagueData.roster_positions,
          transactionsData
        },
        {},
        {}
      )}` : ``}
        `;
    }(__value);
  }(managersInfo)}</div>`;
});
export {
  Page as default
};
