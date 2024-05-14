import { c as create_ssr_component, v as validate_component, n as is_promise, p as noop, j as escape, f as add_attribute } from "../../chunks/index3.js";
import { L as LinearProgress } from "../../chunks/LinearProgress.js";
import { h as homepageText, a as leagueName } from "../../chunks/leagueInfo.js";
import { g as getNflState } from "../../chunks/nflState.js";
import { w as waitForAll } from "../../chunks/multiPromise.js";
import { a as getLeagueData, g as getLeagueTeamManagers } from "../../chunks/leagueTeamManagers.js";
import { g as getTeamFromTeamManagers, r as round, a as generateGraph, b as getAvatarFromTeamManagers } from "../../chunks/universalFunctions.js";
import "../../chunks/records.js";
import { g as getAwards } from "../../chunks/leagueAwards.js";
import "../../chunks/index.svelte_svelte_type_style_lang.js";
import "fuzzyjs";
import { g as getLeagueRosters } from "../../chunks/leagueRosters.js";
import { l as loadPlayers } from "../../chunks/players.js";
import { B as BarChart } from "../../chunks/BarChart.js";
const predictScores = (players, week, leagueData) => {
  const starterPositions = getStarterPositions(leagueData);
  const projectedPlayers = [...players].sort((a, b) => (b.wi && b.wi[week] ? b.wi[week].p : 0) - (a.wi && a.wi[week] ? a.wi[week].p : 0));
  const qbs = projectedPlayers.filter((p) => p.pos == "QB");
  const wrs = projectedPlayers.filter((p) => p.pos == "WR");
  const rbs = projectedPlayers.filter((p) => p.pos == "RB");
  const tes = projectedPlayers.filter((p) => p.pos == "TE");
  const defs = projectedPlayers.filter((p) => p.pos == "DEF");
  const ks = projectedPlayers.filter((p) => p.pos == "K");
  const dls = projectedPlayers.filter((p) => p.pos == "DL");
  const lbs = projectedPlayers.filter((p) => p.pos == "LB");
  const dbs = projectedPlayers.filter((p) => p.pos == "DB");
  let powerScore = 0;
  for (const starterPosition of starterPositions) {
    const qb = parseFloat(qbs[0]?.wi && qbs[0]?.wi[week] ? qbs[0].wi[week].p : 0);
    const rb = parseFloat(rbs[0]?.wi && rbs[0]?.wi[week] ? rbs[0].wi[week].p : 0);
    const wr = parseFloat(wrs[0]?.wi && wrs[0]?.wi[week] ? wrs[0].wi[week].p : 0);
    const te = parseFloat(tes[0]?.wi && tes[0]?.wi[week] ? tes[0].wi[week].p : 0);
    const dl = parseFloat(dls[0]?.wi && dls[0]?.wi[week] ? dls[0].wi[week].p : 0);
    const lb = parseFloat(lbs[0]?.wi && lbs[0]?.wi[week] ? lbs[0].wi[week].p : 0);
    const db = parseFloat(dbs[0]?.wi && dbs[0]?.wi[week] ? dbs[0].wi[week].p : 0);
    const k = parseFloat(ks[0]?.wi && ks[0]?.wi[week] ? ks[0].wi[week].p : 0);
    const def = parseFloat(defs[0]?.wi && defs[0]?.wi[week] ? defs[0].wi[week].p : 0);
    switch (starterPosition) {
      case "QB":
        qbs.shift();
        powerScore += qb;
        break;
      case "RB":
        rbs.shift();
        powerScore += rb;
        break;
      case "WR":
        wrs.shift();
        powerScore += wr;
        break;
      case "TE":
        tes.shift();
        powerScore += te;
        break;
      case "DEF":
        defs.shift();
        powerScore += def;
        break;
      case "K":
        ks.shift();
        powerScore += k;
        break;
      case "DL":
        dls.shift();
        powerScore += dl;
        break;
      case "LB":
        lbs.shift();
        powerScore += lb;
        break;
      case "DB":
        dbs.shift();
        powerScore += db;
        break;
      case "FLEX":
        if (rb >= wr && rb >= te) {
          rbs.shift();
          powerScore += rb;
        } else if (wr >= rb && wr >= te) {
          wrs.shift();
          powerScore += wr;
        } else {
          tes.shift();
          powerScore += te;
        }
        break;
      case "WRRB_FLEX":
        if (rb >= wr) {
          rbs.shift();
          powerScore += rb;
        } else {
          wrs.shift();
          powerScore += wr;
        }
        break;
      case "SUPER_FLEX":
        if (qb >= wr && qb >= te && qb >= rb) {
          qbs.shift();
          powerScore += qb;
        } else if (rb >= wr && rb >= te && rb >= qb) {
          rbs.shift();
          powerScore += rb;
        } else if (wr >= rb && wr >= te && wr >= qb) {
          wrs.shift();
          powerScore += wr;
        } else {
          tes.shift();
          powerScore += te;
        }
        break;
      case "IDP":
        if (dl >= lb && dl >= db) {
          dls.shift();
          powerScore += dl;
        } else if (lb >= dl && lb >= db) {
          lbs.shift();
          powerScore += lb;
        } else {
          dbs.shift();
          powerScore += db;
        }
        break;
    }
  }
  return powerScore;
};
const getStarterPositions = (leagueData) => {
  const rosterPositions = leagueData.roster_positions;
  const firstBench = rosterPositions.indexOf("BN");
  return rosterPositions.slice(0, firstBench);
};
const css$3 = {
  code: ".transactions.svelte-11zvqjc{position:relative;width:100%;z-index:1}p.svelte-11zvqjc{text-align:center}h5.svelte-11zvqjc{text-align:center;margin:10px auto 16px}.link.svelte-11zvqjc{cursor:pointer;color:#888;padding:10px 20px;margin-bottom:10px}.link.svelte-11zvqjc:hover{color:#51B59A}.nothingYet.svelte-11zvqjc{margin:5em 0}",
  map: null
};
const Transactions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div class="transactions svelte-11zvqjc">${`<p class="svelte-11zvqjc">Loading league transactions...</p>
		${validate_component(LinearProgress, "LinearProgress").$$render($$result, { indeterminate: true }, {}, {})}`}</div>`;
});
const css$2 = {
  code: ".enclosure.svelte-opznfs{display:block;position:relative;width:100%}",
  map: null
};
const PowerRankingsDisplay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { nflState, rostersData, leagueTeamManagers, playersInfo, leagueData } = $$props;
  const rosters = rostersData.rosters;
  let validGraph = false;
  let graphs = [];
  let seasonOver = false;
  const buildRankings = () => {
    const rosterPowers = [];
    let week = nflState.week;
    if (week == 0) {
      week = 1;
    }
    let max = 0;
    for (const rosterID in rosters) {
      const roster = rosters[rosterID];
      if (!roster.players)
        continue;
      validGraph = true;
      const rosterPlayers = [];
      for (const rosterPlayer of roster.players) {
        if (!players[rosterPlayer])
          contnue;
        rosterPlayers.push({
          name: players[rosterPlayer].ln,
          pos: players[rosterPlayer].pos,
          wi: players[rosterPlayer].wi
        });
      }
      const rosterPower = {
        rosterID,
        manager: getTeamFromTeamManagers(leagueTeamManagers, rosterID),
        powerScore: 0
      };
      const seasonEnd = 18;
      if (week >= seasonEnd) {
        seasonOver = true;
      }
      for (let i = week; i < seasonEnd; i++) {
        rosterPower.powerScore += predictScores(rosterPlayers, i, leagueData);
      }
      if (rosterPower.powerScore > max) {
        max = rosterPower.powerScore;
      }
      rosterPowers.push(rosterPower);
    }
    for (const rosterPower of rosterPowers) {
      rosterPower.powerScore = round(rosterPower.powerScore / max * 100);
    }
    const powerGraph = {
      stats: rosterPowers,
      x: "Manager",
      y: "Power Ranking",
      stat: "",
      header: "Rest of Season Power Rankings",
      field: "powerScore",
      short: "ROS Power Ranking"
    };
    graphs = [generateGraph(powerGraph, leagueData.season)];
  };
  let players = playersInfo.players;
  buildRankings();
  const refreshPlayers = async () => {
    const newPlayersInfo = await loadPlayers(null, true);
    players = newPlayersInfo.players;
    buildRankings();
  };
  if (playersInfo.stale) {
    refreshPlayers();
  }
  let curGraph = 0;
  if ($$props.nflState === void 0 && $$bindings.nflState && nflState !== void 0)
    $$bindings.nflState(nflState);
  if ($$props.rostersData === void 0 && $$bindings.rostersData && rostersData !== void 0)
    $$bindings.rostersData(rostersData);
  if ($$props.leagueTeamManagers === void 0 && $$bindings.leagueTeamManagers && leagueTeamManagers !== void 0)
    $$bindings.leagueTeamManagers(leagueTeamManagers);
  if ($$props.playersInfo === void 0 && $$bindings.playersInfo && playersInfo !== void 0)
    $$bindings.playersInfo(playersInfo);
  if ($$props.leagueData === void 0 && $$bindings.leagueData && leagueData !== void 0)
    $$bindings.leagueData(leagueData);
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validGraph && !seasonOver ? `<div class="enclosure svelte-opznfs">${validate_component(BarChart, "BarChart").$$render(
      $$result,
      { graphs, leagueTeamManagers, curGraph },
      {
        curGraph: ($$value) => {
          curGraph = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
const css$1 = {
  code: ".loading.svelte-1dl9ot{display:block;width:85%;max-width:500px;margin:80px auto}",
  map: null
};
const PowerRankings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const helperPromises = waitForAll(getNflState(), getLeagueRosters(), getLeagueTeamManagers(), getLeagueData(), loadPlayers(null));
  $$result.css.add(css$1);
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
    
    <div class="loading svelte-1dl9ot"><p>Calculating power rankings...</p>
        ${validate_component(LinearProgress, "LinearProgress").$$render($$result, { indeterminate: true }, {}, {})}</div>
`;
    }
    return function([nflState, rostersData, leagueTeamManagers, leagueData, playersInfo]) {
      return `
    ${leagueData.status != "pre_draft" && leagueData.status != "complete" ? `${validate_component(PowerRankingsDisplay, "PowerRankingsDisplay").$$render(
        $$result,
        {
          nflState,
          rostersData,
          leagueTeamManagers,
          leagueData,
          playersInfo
        },
        {},
        {}
      )}` : ``}
`;
    }(__value);
  }(helperPromises)}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#home.svelte-16jrttx{display:flex;flex-wrap:nowrap;position:relative;overflow-y:hidden;z-index:1}#main.svelte-16jrttx{flex-grow:1;min-width:320px;margin:0 auto;padding:60px 0}.text.svelte-16jrttx{padding:0 30px;max-width:620px;margin:0 auto}.leagueData.svelte-16jrttx{position:relative;z-index:1;width:100%;min-width:470px;max-width:470px;min-height:100%;background-color:var(--ebebeb);border-left:var(--eee);box-shadow:inset 8px 0px 6px -6px rgb(0 0 0 / 24%)}@media(max-width: 950px){.leagueData.svelte-16jrttx{max-width:100%;min-width:100%;width:100%;box-shadow:none}#home.svelte-16jrttx{flex-wrap:wrap}}.transactions.svelte-16jrttx{display:block;width:95%;margin:10px auto}.center.svelte-16jrttx{text-align:center}h6.svelte-16jrttx{text-align:center}.homeBanner.svelte-16jrttx{background-color:var(--blueOne);color:#fff;padding:0.5em 0;font-weight:500;font-size:1.5em}#currentChamp.svelte-16jrttx{padding:25px 0;background-color:var(--f3f3f3);box-shadow:5px 0 8px var(--champShadow);border-left:1px solid var(--ddd)}#champ.svelte-16jrttx{position:relative;width:150px;height:150px;margin:0 auto;cursor:pointer}.first.svelte-16jrttx{position:absolute;transform:translate(-50%, -50%);width:80px;height:80px;border-radius:100%;border:1px solid #ccc;left:50%;top:43%}.laurel.svelte-16jrttx{position:absolute;transform:translate(-50%, -50%);width:135px;height:auto;left:50%;top:50%}h4.svelte-16jrttx{text-align:center;font-size:1.8em;margin:10px;font-style:italic}.label.svelte-16jrttx{display:table;text-align:center;line-height:1.1em;font-size:1.7em;margin:6px auto 10px;cursor:pointer}.curOwner{font-size:0.75em;color:#bbb;font-style:italic}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const nflState = getNflState();
  const podiumsData = getAwards();
  const leagueTeamManagersData = getLeagueTeamManagers();
  $$result.css.add(css);
  return `<div id="home" class="svelte-16jrttx"><div id="main" class="svelte-16jrttx"><div class="text svelte-16jrttx"><h6 class="svelte-16jrttx">${escape(leagueName)}</h6>
            
            <!-- HTML_TAG_START -->${homepageText}<!-- HTML_TAG_END -->
            
            ${``}</div>
        ${validate_component(PowerRankings, "PowerRankings").$$render($$result, {}, {}, {})}</div>
    
    <div class="leagueData svelte-16jrttx"><div class="homeBanner svelte-16jrttx">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
                <div class="center svelte-16jrttx">Retrieving NFL state...</div>
                ${validate_component(LinearProgress, "LinearProgress").$$render($$result, { indeterminate: true }, {}, {})}
            `;
    }
    return function(nflStateData) {
      return `
                <div class="center svelte-16jrttx">NFL ${escape(nflStateData.season)} 
                    ${nflStateData.season_type == "pre" ? `Preseason` : `${nflStateData.season_type == "post" ? `Postseason` : `Season - ${escape(nflStateData.week > 0 ? `Week ${nflStateData.week}` : "Preseason")}`}`}</div>
            `;
    }(__value);
  }(nflState)}</div>

        <div id="currentChamp" class="svelte-16jrttx">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
                <p class="center svelte-16jrttx">Retrieving awards...</p>
                ${validate_component(LinearProgress, "LinearProgress").$$render($$result, { indeterminate: true }, {}, {})}
            `;
    }
    return function([podiums, leagueTeamManagers]) {
      return `
                ${podiums[0] ? `<h4 class="svelte-16jrttx">${escape(podiums[0].year)} Fantasy Champ</h4>
                    <div id="champ" class="svelte-16jrttx"><img${add_attribute("src", getAvatarFromTeamManagers(leagueTeamManagers, podiums[0].champion, podiums[0].year), 0)} class="first svelte-16jrttx" alt="champion">
                        <img src="/laurel.png" class="laurel svelte-16jrttx" alt="laurel"></div>
                    <span class="label svelte-16jrttx">${escape(getTeamFromTeamManagers(leagueTeamManagers, podiums[0].champion, podiums[0].year).name)}</span>` : `<p class="center svelte-16jrttx">No former champs.</p>`}
            `;
    }(__value);
  }(waitForAll(podiumsData, leagueTeamManagersData))}</div>

        <div class="transactions svelte-16jrttx">${validate_component(Transactions, "Transactions").$$render($$result, {}, {}, {})}</div></div></div>`;
});
export {
  Page as default
};
