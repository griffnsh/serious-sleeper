import { c as create_ssr_component, f as add_attribute, j as escape, k as each, v as validate_component, n as is_promise, p as noop } from "../../../chunks/index3.js";
import { L as LinearProgress } from "../../../chunks/LinearProgress.js";
import "../../../chunks/index.svelte_svelte_type_style_lang.js";
import { w as waitForAll } from "../../../chunks/multiPromise.js";
import "../../../chunks/records.js";
import { l as getRosterIDFromManagerIDAndYear, r as round, g as getTeamFromTeamManagers, j as getTeamData } from "../../../chunks/universalFunctions.js";
import { g as goto, T as TradeTransaction } from "../../../chunks/TradeTransaction.js";
import { g as getLeagueTeamManagers, a as getLeagueData } from "../../../chunks/leagueTeamManagers.js";
import { l as leagueID } from "../../../chunks/leagueInfo.js";
import { g as getNflState } from "../../../chunks/nflState.js";
import { I as IconButton } from "../../../chunks/IconButton.js";
import "fuzzyjs";
const getRivalryMatchups = async (userOneID, userTwoID) => {
  if (!userOneID || !userTwoID) {
    return;
  }
  let curLeagueID = leagueID;
  const [nflState, teamManagers] = await waitForAll(
    getNflState(),
    getLeagueTeamManagers()
  ).catch((err) => {
    console.error(err);
  });
  if (nflState.season_type == "regular") {
    nflState.display_week;
  } else if (nflState.season_type == "post")
    ;
  const rivalry = {
    points: {
      one: 0,
      two: 0
    },
    wins: {
      one: 0,
      two: 0
    },
    ties: 0,
    matchups: []
  };
  while (curLeagueID && curLeagueID != 0) {
    const leagueData = await getLeagueData(curLeagueID).catch((err) => {
      console.error(err);
    });
    const year = leagueData.season;
    const rosterIDOne = getRosterIDFromManagerIDAndYear(teamManagers, userOneID, year);
    const rosterIDTwo = getRosterIDFromManagerIDAndYear(teamManagers, userTwoID, year);
    if (!rosterIDOne || !rosterIDTwo || rosterIDOne == rosterIDTwo) {
      curLeagueID = leagueData.previous_league_id;
      continue;
    }
    const matchupsPromises = [];
    for (let i = 1; i < leagueData.settings.playoff_week_start; i++) {
      matchupsPromises.push(fetch(`https://api.sleeper.app/v1/league/${curLeagueID}/matchups/${i}`, { compress: true }));
    }
    const matchupsRes = await waitForAll(...matchupsPromises);
    const matchupsJsonPromises = [];
    for (const matchupRes of matchupsRes) {
      const data = matchupRes.json();
      matchupsJsonPromises.push(data);
      if (!matchupRes.ok) {
        throw new Error(data);
      }
    }
    const matchupsData = await waitForAll(...matchupsJsonPromises).catch((err) => {
      console.error(err);
    }).catch((err) => {
      console.error(err);
    });
    for (let i = 1; i < matchupsData.length + 1; i++) {
      const processed = processRivalryMatchups(matchupsData[i - 1], i, rosterIDOne, rosterIDTwo);
      if (processed) {
        const { matchup, week } = processed;
        const sideA = matchup[0];
        const sideB = matchup[1];
        let sideAPoints = sideA.points.reduce((t, nV) => t + nV, 0);
        let sideBPoints = sideB.points.reduce((t, nV) => t + nV, 0);
        rivalry.points.one += sideAPoints;
        rivalry.points.two += sideBPoints;
        if (sideAPoints > sideBPoints) {
          rivalry.wins.one++;
        } else if (sideAPoints < sideBPoints) {
          rivalry.wins.two++;
        } else {
          rivalry.ties++;
        }
        rivalry.matchups.push({
          week,
          year,
          matchup
        });
      }
    }
    curLeagueID = leagueData.previous_league_id;
  }
  rivalry.matchups.sort((a, b) => {
    var yearOrder = b.year - a.year;
    var weekOrder = b.week - a.week;
    return yearOrder || weekOrder;
  });
  return rivalry;
};
const processRivalryMatchups = (inputMatchups, week, rosterIDOne, rosterIDTwo) => {
  if (!inputMatchups || inputMatchups.length == 0) {
    return false;
  }
  const matchups = {};
  for (const match of inputMatchups) {
    if (match.roster_id == rosterIDOne || match.roster_id == rosterIDTwo) {
      if (!matchups[match.matchup_id]) {
        matchups[match.matchup_id] = [];
      }
      matchups[match.matchup_id].push({
        roster_id: match.roster_id,
        starters: match.starters,
        points: match.starters_points
      });
    }
  }
  const keys = Object.keys(matchups);
  const matchup = matchups[keys[0]];
  if (keys.length > 1 || matchup.length == 1) {
    return;
  }
  if (matchup[0].roster_id == rosterIDTwo) {
    const two = matchup.shift();
    matchup.push(two);
  }
  return { matchup, week };
};
const css$5 = {
  code: ".matchup.svelte-d6uvgl{width:95%;max-width:600px;margin:10px auto}.header.svelte-d6uvgl{display:flex;justify-content:space-between;position:relative;border:1px solid #bbb;border-radius:10px;opacity:0.8;cursor:pointer;transition:opacity 0.5s;overflow:hidden}.header.svelte-d6uvgl:hover{opacity:1}.opponent.svelte-d6uvgl{display:flex;align-items:center;width:46%;padding:5px 2%;top:0;z-index:2}.divider.svelte-d6uvgl{position:absolute;z-index:3;transform:translateX(-50%);top:0;left:50%;height:100%;width:15px}.home.svelte-d6uvgl{justify-content:flex-start;left:0;text-align:left;background-color:#485566}.homeGlow{box-shadow:0 0 6px 4px #3279cf;background-color:#00316b !important}.away.svelte-d6uvgl{justify-content:flex-end;right:0;text-align:right;background-color:#8b6969}.awayGlow{box-shadow:0 0 6px 4px #d15454;background-color:#920505 !important}.name.svelte-d6uvgl{margin:0 5px;font-size:1em;line-height:1.1em;flex-grow:1;word-break:break-word;color:#fff;font-style:italic}.avatar.svelte-d6uvgl{vertical-align:middle;border-radius:50%;height:35px;width:35px;margin:0;border:0.25px solid #777;background-color:#eee}.playerAvatar.svelte-d6uvgl{position:relative;vertical-align:middle;height:45px;width:45px;background-position:center;background-repeat:no-repeat;background-size:auto 45px}.pos.svelte-d6uvgl{display:inline-flex;align-items:center;justify-content:center;border-radius:8px;max-width:32px;min-width:32px;height:32px}.QB.svelte-d6uvgl{background-color:var(--QB)}.WR.svelte-d6uvgl{background-color:var(--WR)}.RB.svelte-d6uvgl{background-color:var(--RB)}.TE.svelte-d6uvgl{background-color:var(--TE)}.FLEX.svelte-d6uvgl{background:linear-gradient(to right, var(--WR), var(--WR) 33.33%, var(--RB) 33.33%, var(--RB) 66.66%, var(--TE) 66.66%)}.WRRB.svelte-d6uvgl{background:linear-gradient(to right, var(--WR), var(--WR) 50%, var(--RB) 50%)}.K.svelte-d6uvgl{background-color:var(--K)}.DEF.svelte-d6uvgl{background-color:var(--DEF)}.DL.svelte-d6uvgl,.DE.svelte-d6uvgl,.DT.svelte-d6uvgl{background-color:var(--DL)}.LB.svelte-d6uvgl{background-color:var(--LB)}.DB.svelte-d6uvgl,.CB.svelte-d6uvgl,.SS.svelte-d6uvgl,.FS.svelte-d6uvgl{background-color:var(--DB)}.IDP.svelte-d6uvgl{background:linear-gradient(to right, var(--DL), var(--DL) 33.33%, var(--LB) 33.33%, var(--LB) 66.66%, var(--DB) 66.66%)}.rosters.svelte-d6uvgl{position:relative;background-color:var(--fff);border-radius:8px;overflow:hidden;border-left:1px solid #bbb;border-right:1px solid #bbb;border-bottom:1px solid #bbb;transition:max-height 0.4s}.line.svelte-d6uvgl{position:relative;display:flex;justify-content:space-between;border-top:1px solid #bbb}.player.svelte-d6uvgl{position:relative;width:46%}.iconAndTeam.svelte-d6uvgl{display:flex;align-items:center}.iconAndTeamHome.svelte-d6uvgl{justify-content:flex-start}.iconAndTeamAway.svelte-d6uvgl{justify-content:flex-end}.playerHome.svelte-d6uvgl{padding:0 1.5% 0 2.5%;text-align:left}.playerAway.svelte-d6uvgl{padding:0 2.5% 0 1.5%;text-align:right}.playerInfo.svelte-d6uvgl{display:inline-block;padding:0 6px}.playerTeam.svelte-d6uvgl{display:inline-block;color:#888;font-style:italic;text-align:center;font-size:0.5em}.playerName.svelte-d6uvgl{word-break:break-word}.playerNameHome.svelte-d6uvgl{text-align:left}.playerNameAway.svelte-d6uvgl{text-align:right}@media(max-width: 500px){.name.svelte-d6uvgl{font-size:0.8em}.totalPoints.svelte-d6uvgl{font-size:0.8em}.nameHolder.svelte-d6uvgl{font-size:0.8em}.points.svelte-d6uvgl{font-size:0.9em}}@media(max-width: 410px){.name.svelte-d6uvgl{font-size:0.7em}.totalPoints.svelte-d6uvgl{font-size:0.7em}.nameHolder.svelte-d6uvgl{font-size:0.7em}.points.svelte-d6uvgl{font-size:0.75em}}@media(max-width: 360px){.name.svelte-d6uvgl{font-size:0.5em}.totalPoints.svelte-d6uvgl{font-size:0.5em}}.dividerLine.svelte-d6uvgl{display:block;position:absolute;top:0;left:50%;height:100%;width:0;border-left:1px solid var(--eee);z-index:1}.close.svelte-d6uvgl{display:block;width:100%;background-color:var(--eee);text-align:center;cursor:pointer;z-index:2;font-size:1.1em;padding:6px 0}.close.svelte-d6uvgl:hover{background-color:var(--ddd)}.nameHolder.svelte-d6uvgl{display:block}.nameHolderR.svelte-d6uvgl{justify-content:flex-end;text-align:right}.nameHolderL.svelte-d6uvgl{justify-content:flex-start;text-align:left}.totalPoints.svelte-d6uvgl{line-height:1.1em;color:#fff}.totalPointsR.svelte-d6uvgl{margin-right:0.1em;text-align:right}.totalPointsL.svelte-d6uvgl{margin-left:0.1em;text-align:left}.totalProjection.svelte-d6uvgl{color:#ccc;font-size:0.7em;font-style:italic}.points.svelte-d6uvgl{position:absolute;line-height:1.1em;top:1em}.pointsL.svelte-d6uvgl{left:1em}.pointsR.svelte-d6uvgl{right:1em}.playerEmpty.svelte-d6uvgl{height:100%;color:#555;font-style:italic;display:flex;align-items:center}.teamLogo.svelte-d6uvgl{width:21px;position:absolute;top:0}.teamHomeLogo.svelte-d6uvgl{right:-16px}.teamAwayLogo.svelte-d6uvgl{left:-16px}@media(max-width: 340px){.teamLogo.svelte-d6uvgl{width:20px}.teamHomeLogo.svelte-d6uvgl{right:-7px}.teamAwayLogo.svelte-d6uvgl{left:-7px}}",
  map: null
};
const Matchup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { matchup, players, active, ix, displayWeek, expandOverride = false, matchupWeek, leagueTeamManagers, year } = $$props;
  let home = matchup[0];
  let away = matchup[1];
  let homePointsTotal = 0;
  let homeProjectionTotal = 0;
  let awayPointsTotal = 0;
  let awayProjectionTotal = 0;
  let winning = "home";
  const digestStarters = (x, p) => {
    home = matchup[0];
    away = matchup[1];
    home.manager = getTeamFromTeamManagers(leagueTeamManagers, home.roster_id, year);
    away.manager = getTeamFromTeamManagers(leagueTeamManagers, away.roster_id, year);
    const homeStarters = matchupWeek ? home.starters[matchupWeek] : home.starters;
    const awayStarters = matchupWeek ? away.starters[matchupWeek] : away.starters;
    const homePoints = matchupWeek ? home.points[matchupWeek] : home.points;
    const awayPoints = matchupWeek ? away.points[matchupWeek] : away.points;
    homePointsTotal = 0;
    homeProjectionTotal = 0;
    awayPointsTotal = 0;
    awayProjectionTotal = 0;
    const localStarters = [];
    for (let i = 0; i < homeStarters.length; i++) {
      homePointsTotal += homePoints[i];
      const awayPoint = awayPoints ? awayPoints[i] : 0;
      awayPointsTotal += awayPoint;
      const home2 = digestStarter(homeStarters[i], homePoints[i]);
      const awayStarter = awayStarters ? awayStarters[i] : null;
      const away2 = digestStarter(awayStarter, awayPoint);
      homeProjectionTotal += home2.projection;
      awayProjectionTotal += away2 ? away2.projection : 0;
      localStarters.push({ home: home2, away: away2 });
    }
    if (awayPointsTotal < homePointsTotal)
      winning = "home";
    if (awayPointsTotal > homePointsTotal)
      winning = "away";
    if (awayPointsTotal == homePointsTotal)
      winning = "tied";
    starters = localStarters;
  };
  const digestStarter = (starter, points) => {
    if (!starter || starter == 0) {
      return {
        name: "Empty",
        avatar: null,
        poss: null,
        team: null,
        opponent: null,
        projection: 0,
        points: 0
      };
    }
    const player = players[starter];
    let name = player.pos == "DEF" ? player.ln : `${player.fn[0]}. ${player.ln}`;
    let projection = 0;
    if (player.wi && player.wi[displayWeek]) {
      projection = parseFloat(player.wi[displayWeek].p);
    }
    return {
      name,
      avatar: player.pos == "DEF" ? `background-image: url(https://sleepercdn.com/images/team_logos/nfl/${starter.toLowerCase()}.png)` : `background-image: url(https://sleepercdn.com/content/nfl/players/thumb/${starter}.jpg), url(https://sleepercdn.com/images/v2/icons/player_default.webp)`,
      pos: player.pos,
      team: player.t,
      opponent: player.wi && player.wi[displayWeek] ? player.wi[displayWeek].o : null,
      projection,
      points
    };
  };
  let starters;
  let el;
  const calcHeight = () => {
    let multiplier = 73;
    const startersLength = matchupWeek ? home.starters[matchupWeek].length : home.starters.length;
    return startersLength * multiplier + 37;
  };
  if ($$props.matchup === void 0 && $$bindings.matchup && matchup !== void 0)
    $$bindings.matchup(matchup);
  if ($$props.players === void 0 && $$bindings.players && players !== void 0)
    $$bindings.players(players);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.ix === void 0 && $$bindings.ix && ix !== void 0)
    $$bindings.ix(ix);
  if ($$props.displayWeek === void 0 && $$bindings.displayWeek && displayWeek !== void 0)
    $$bindings.displayWeek(displayWeek);
  if ($$props.expandOverride === void 0 && $$bindings.expandOverride && expandOverride !== void 0)
    $$bindings.expandOverride(expandOverride);
  if ($$props.matchupWeek === void 0 && $$bindings.matchupWeek && matchupWeek !== void 0)
    $$bindings.matchupWeek(matchupWeek);
  if ($$props.leagueTeamManagers === void 0 && $$bindings.leagueTeamManagers && leagueTeamManagers !== void 0)
    $$bindings.leagueTeamManagers(leagueTeamManagers);
  if ($$props.year === void 0 && $$bindings.year && year !== void 0)
    $$bindings.year(year);
  $$result.css.add(css$5);
  {
    digestStarters();
  }
  return `



<div class="matchup svelte-d6uvgl"><div class="header svelte-d6uvgl"${add_attribute("this", el, 0)}><div class="${"opponent home" + escape(winning == "home" ? " homeGlow" : "", true) + " svelte-d6uvgl"}"><img class="avatar svelte-d6uvgl"${add_attribute("src", home.manager.avatar, 0)} alt="home team avatar">
            <div class="name svelte-d6uvgl">${escape(home.manager.name)}</div>
            <div class="totalPoints totalPointsR svelte-d6uvgl">${escape(round(homePointsTotal))}<div class="totalProjection svelte-d6uvgl">${escape(round(homeProjectionTotal))}</div></div></div>
        <img class="divider svelte-d6uvgl" src="${"/" + escape(winning, true) + "Divider.jpg"}" alt="divider">
        <div class="${"opponent away" + escape(winning == "away" ? " awayGlow" : "", true) + " svelte-d6uvgl"}"><div class="totalPoints totalPointsL svelte-d6uvgl">${escape(round(awayPointsTotal))}<div class="totalProjection svelte-d6uvgl">${escape(round(awayProjectionTotal))}</div></div>
            <div class="name svelte-d6uvgl">${escape(away.manager.name)}</div>
            <img class="avatar svelte-d6uvgl"${add_attribute("src", away.manager.avatar, 0)} alt="away team avatar"></div></div>

    <div class="rosters svelte-d6uvgl" style="${"max-height: " + escape(active == ix ? calcHeight() + "px" : "0", true) + "; " + escape(active != ix ? "border: none" : "", true) + ";"}">${each(starters, (player) => {
    return `<div class="line svelte-d6uvgl"><div class="player playerHome svelte-d6uvgl"><span class="iconAndTeam iconAndTeamHome svelte-d6uvgl">${player.home.pos ? `<span class="${"pos " + escape(player.home.pos, true) + " svelte-d6uvgl"}">${escape(player.home.pos)}</span>` : ``}
                        ${player.home.avatar ? `<div class="playerAvatar playerInfo svelte-d6uvgl"${add_attribute("style", player.home.avatar, 0)}>${player.home.team && player.home.pos != "DEF" ? `<img src="${"https://sleepercdn.com/images/team_logos/nfl/" + escape(player.home.team.toLowerCase(), true) + ".png"}" class="teamLogo teamHomeLogo svelte-d6uvgl" alt="team logo">` : ``}
                            </div>` : ``}</span>
                    <div class="${"nameHolder nameHolderL" + escape(player.home.name == "Empty" ? " playerEmpty" : "", true) + " svelte-d6uvgl"}"><span class="playerInfo playerName playerNameHome svelte-d6uvgl">${escape(player.home.name)}</span>
                        ${player.home.team ? `${player.home.opponent ? `<div class="playerTeam svelte-d6uvgl">${escape(player.home.pos != "DEF" ? `${player.home.team} ` : "")}vs ${escape(player.home.opponent)}</div>` : `<div class="playerTeam svelte-d6uvgl">${escape(player.home.pos != "DEF" ? player.home.team : "")}</div>`}` : ``}</div>
                    <span class="points pointsR svelte-d6uvgl">${escape(round(player.home.points))}<div class="totalProjection svelte-d6uvgl">${escape(round(player.home.projection))}</div></span></div>

                <div class="dividerLine svelte-d6uvgl"></div>

                <div class="player playerAway svelte-d6uvgl"><span class="iconAndTeam iconAndTeamAway svelte-d6uvgl">${player.away.avatar ? `<div class="playerAvatar playerInfo svelte-d6uvgl"${add_attribute("style", player.away.avatar, 0)}>${player.away.team && player.away.pos != "DEF" ? `<img src="${"https://sleepercdn.com/images/team_logos/nfl/" + escape(player.away.team.toLowerCase(), true) + ".png"}" class="teamLogo teamAwayLogo svelte-d6uvgl" alt="team logo">` : ``}
                            </div>` : ``}
                        ${player.away.pos ? `<span class="${"pos " + escape(player.away.pos, true) + " svelte-d6uvgl"}">${escape(player.away.pos)}</span>` : ``}</span>
                    <div class="${"nameHolder nameHolderR" + escape(player.away.name == "Empty" ? " playerEmpty" : "", true) + " svelte-d6uvgl"}">${player.away.team ? `${player.away.opponent ? `<div class="playerTeam svelte-d6uvgl">${escape(player.away.opponent)} vs${escape(player.away.pos != "DEF" ? ` ${player.away.team}` : "")}</div>` : `<div class="playerTeam svelte-d6uvgl">${escape(player.away.pos != "DEF" ? player.away.team : "")}</div>`}` : ``}
                        <span class="playerInfo playerName playerNameAway svelte-d6uvgl">${escape(player.away.name)}</span></div>
                    <span class="points pointsL svelte-d6uvgl">${escape(round(player.away.points))}<div class="totalProjection svelte-d6uvgl">${escape(round(player.away.projection))}</div></span></div>
            </div>`;
  })}
        ${!expandOverride ? `<div class="close svelte-d6uvgl">Close Matchup</div>` : ``}</div></div>`;
});
const css$4 = {
  code: ".enclosure.svelte-fin2ij{padding:4px 8px;text-align:center}.gray_bar.svelte-fin2ij{position:relative;height:8px;border-radius:4px;width:75%;margin:0 auto;background-color:#e5e5e5;border:1px solid #bbb}.side.svelte-fin2ij{position:absolute;height:8px;top:0}.side_one.svelte-fin2ij{background-color:var(--compBarOne);right:50%;border-radius:4px 0 0 4px}.side_two.svelte-fin2ij{background-color:var(--compBarTwo);left:50%;border-radius:0 4px 4px 0}.oneWinner.svelte-fin2ij{color:var(--compBarOneText);font-weight:800;text-decoration:underline}.twoWinner.svelte-fin2ij{color:var(--compBarTwoText);font-weight:800;text-decoration:underline}h4.svelte-fin2ij{text-align:center;font-size:1.4em;margin:10px}.stats.svelte-fin2ij{display:flex;width:75%;margin:0 auto;justify-content:space-between}@media(max-width: 650px){h4.svelte-fin2ij{font-size:1.2em}}@media(max-width: 400px){h4.svelte-fin2ij{font-size:1.1em}}",
  map: null
};
const ComparissonBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { sideOne, sideTwo, label, unit } = $$props;
  if ($$props.sideOne === void 0 && $$bindings.sideOne && sideOne !== void 0)
    $$bindings.sideOne(sideOne);
  if ($$props.sideTwo === void 0 && $$bindings.sideTwo && sideTwo !== void 0)
    $$bindings.sideTwo(sideTwo);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  $$result.css.add(css$4);
  return `<h4 class="svelte-fin2ij">${escape(label)}</h4>

<div class="enclosure svelte-fin2ij"><div class="gray_bar svelte-fin2ij"><div class="side side_one svelte-fin2ij" style="${"width: " + escape(sideOne / (sideOne + sideTwo) * 50, true) + "%"}"></div>
        <div class="side side_two svelte-fin2ij" style="${"width: " + escape(sideTwo / (sideOne + sideTwo) * 50, true) + "%"}"></div></div>
    <div class="stats svelte-fin2ij"><span class="${"stat" + escape(sideOne > sideTwo ? " oneWinner" : "", true) + " svelte-fin2ij"}">${escape(sideOne)} ${escape(unit)}</span>
        <span class="${"stat" + escape(sideTwo > sideOne ? " twoWinner" : "", true) + " svelte-fin2ij"}">${escape(sideTwo)} ${escape(unit)}</span></div></div>`;
});
const css$3 = {
  code: ".selectors.svelte-1tnro3q.svelte-1tnro3q{display:flex;justify-content:space-evenly;align-items:center;max-width:900px;margin:3em auto 2em}.manager.svelte-1tnro3q.svelte-1tnro3q{text-align:center}.vs.svelte-1tnro3q.svelte-1tnro3q{display:inline-block;margin:1em 0}.container.svelte-1tnro3q.svelte-1tnro3q{display:inline-block;position:relative}.selectInput.svelte-1tnro3q.svelte-1tnro3q{padding:0.5em 2em;font-size:1.2em;border-radius:6px;background-color:var(--fff);appearance:none !important;-webkit-appearance:none !important;-moz-appearance:none !important;background-image:url(/dropdown.png);background-repeat:no-repeat;text-align:center;color:var(--g000)}.left.svelte-1tnro3q.svelte-1tnro3q{border:1px solid var(--barChartOne);background-position:100%}select.left.svelte-1tnro3q.svelte-1tnro3q:focus{outline:none;border:3px solid var(--barChartOne)}.right.svelte-1tnro3q.svelte-1tnro3q{border:1px solid var(--barChartSix);background-position:0%}select.right.svelte-1tnro3q.svelte-1tnro3q:focus{outline:none;border:3px solid var(--barChartSix)}select.svelte-1tnro3q option.svelte-1tnro3q{text-align:left}.avatar.svelte-1tnro3q.svelte-1tnro3q{width:60px;height:60px;border-radius:50%;border:2px solid;position:absolute;transform:translate(0%, -50%);top:50%;background-color:var(--fff)}.avatarLeft.svelte-1tnro3q.svelte-1tnro3q{border-color:var(--barChartOne);border-right:none;left:-18%\n    }.avatarRight.svelte-1tnro3q.svelte-1tnro3q{border-color:var(--barChartSix);border-left:none;right:-18%\n    }@media(max-width: 650px){.selectInput.svelte-1tnro3q.svelte-1tnro3q{padding:0.3em 1.9em;font-size:1em}.avatar.svelte-1tnro3q.svelte-1tnro3q{width:40px;height:40px}.avatarLeft.svelte-1tnro3q.svelte-1tnro3q{left:-12%\n        }.avatarRight.svelte-1tnro3q.svelte-1tnro3q{right:-12%\n        }}@media(max-width: 530px){.selectors.svelte-1tnro3q.svelte-1tnro3q{flex-direction:column}.avatarRight.svelte-1tnro3q.svelte-1tnro3q{border-right:none;left:-12%\n        }.right.svelte-1tnro3q.svelte-1tnro3q{background-position:100%}}",
  map: null
};
const ManagerSelectors = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let usersOne;
  let usersTwo;
  let { playerOne, playerTwo, leagueTeamManagers } = $$props;
  const users = Object.keys(leagueTeamManagers.users);
  const analyzeRivalry = (p1, p2) => {
    if (!p1 || !p2) {
      return;
    }
    goto(`/rivalry?player_one=${p1}&player_two=${p2}`, { noscroll: true, keepfocus: true });
  };
  if ($$props.playerOne === void 0 && $$bindings.playerOne && playerOne !== void 0)
    $$bindings.playerOne(playerOne);
  if ($$props.playerTwo === void 0 && $$bindings.playerTwo && playerTwo !== void 0)
    $$bindings.playerTwo(playerTwo);
  if ($$props.leagueTeamManagers === void 0 && $$bindings.leagueTeamManagers && leagueTeamManagers !== void 0)
    $$bindings.leagueTeamManagers(leagueTeamManagers);
  $$result.css.add(css$3);
  usersOne = users.filter((u) => u !== playerTwo);
  usersTwo = users.filter((u) => u !== playerOne);
  {
    analyzeRivalry(playerOne, playerTwo);
  }
  return `<div class="selectors svelte-1tnro3q">
    <div class="manager svelte-1tnro3q"><div class="container svelte-1tnro3q"><select class="selectInput left svelte-1tnro3q" id="managerOne" name="managerOne"><option${add_attribute("value", null, 0)} class="svelte-1tnro3q">Select a manager</option>${each(usersOne, (user) => {
    return `<option${add_attribute("value", user, 0)} class="svelte-1tnro3q">${escape(leagueTeamManagers.users[user].display_name)}</option>`;
  })}</select>
            ${playerOne ? `<img class="avatar avatarLeft svelte-1tnro3q"${add_attribute("src", getTeamData(leagueTeamManagers.users, playerOne).avatar, 0)} alt="manager one avatar">` : ``}</div></div>
    
    <span class="vs svelte-1tnro3q">vs</span>
    
    <div class="manager svelte-1tnro3q"><div class="container svelte-1tnro3q"><select class="selectInput right svelte-1tnro3q" id="managerOne" name="managerOne"><option${add_attribute("value", null, 0)} class="svelte-1tnro3q">Select a manager</option>${each(usersTwo, (user) => {
    return `<option${add_attribute("value", user, 0)} class="svelte-1tnro3q">${escape(leagueTeamManagers.users[user].display_name)}</option>`;
  })}</select>
            ${playerTwo ? `<img class="avatar avatarRight svelte-1tnro3q"${add_attribute("src", getTeamData(leagueTeamManagers.users, playerTwo).avatar, 0)} alt="manager two avatar">` : ``}</div></div></div>`;
});
const css$2 = {
  code: ".container.svelte-fnoigk{display:flex;justify-content:center;align-items:center}h4.svelte-fnoigk{display:inline-block;text-align:center;font-size:1.6em;margin:10px 20px}",
  map: null
};
const RivalryControls = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { year, displayWeek, selected, length } = $$props;
  if ($$props.year === void 0 && $$bindings.year && year !== void 0)
    $$bindings.year(year);
  if ($$props.displayWeek === void 0 && $$bindings.displayWeek && displayWeek !== void 0)
    $$bindings.displayWeek(displayWeek);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.length === void 0 && $$bindings.length && length !== void 0)
    $$bindings.length(length);
  $$result.css.add(css$2);
  return `<div class="container svelte-fnoigk">${length > 0 ? `${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
    default: () => {
      return `chevron_left`;
    }
  })}` : ``}
    <h4 class="svelte-fnoigk">${escape(year)} Week ${escape(displayWeek)}</h4>
    ${length > 0 ? `${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
    default: () => {
      return `chevron_right`;
    }
  })}` : ``}</div>`;
});
const css$1 = {
  code: ".scoreBoard.svelte-azlhdy{width:97%;border-radius:20px;background-color:var(--rivalryBack);border:1px solid var(--aaa);margin:2em auto;padding:2em 0;max-width:1000px}h2.svelte-azlhdy{text-align:center;font-size:2.4em;margin:1.3em 0 0}h3.svelte-azlhdy{text-align:center;font-size:1.9em;margin:20px 0 16px}.trades.svelte-azlhdy{width:95%;max-width:750px;margin:2em auto}.loading.svelte-azlhdy{display:block;width:85%;max-width:500px;margin:80px auto}.center.svelte-azlhdy{text-align:center}.helmets.svelte-azlhdy{width:80%;max-width:800px;margin:0 auto 2em}@media(max-width: 650px){h3.svelte-azlhdy{font-size:1.6em}}@media(max-width: 400px){h2.svelte-azlhdy{font-size:2em}h3.svelte-azlhdy{font-size:1.3em}}",
  map: null
};
const Rivalry = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let matchup;
  let displayWeek;
  let year;
  let tradeHistory;
  let playerOneRecords;
  let playerTwoRecords;
  let { leagueTeamManagers, playersInfo, transactionsInfo, recordsInfo, playerOne, playerTwo } = $$props;
  let rivalry = null;
  let loading = true;
  const analyzeRivalry = async (p1, p2) => {
    loading = true;
    matchup = null;
    if (p1 && p2) {
      rivalry = await getRivalryMatchups(p1, p2);
      loading = false;
    }
  };
  let selected = 0;
  const setTradeHistory = (p1, p2) => {
    if (!p1 || !p2) {
      return [];
    }
    const trades = transactionsInfo.transactions.filter((transaction) => {
      if (transaction.type !== "trade") {
        return false;
      }
      const rosterIDOne = parseInt(getRosterIDFromManagerIDAndYear(leagueTeamManagers, playerOne, transaction.season));
      const rosterIDTwo = parseInt(getRosterIDFromManagerIDAndYear(leagueTeamManagers, playerTwo, transaction.season));
      if (rosterIDOne == rosterIDTwo) {
        return false;
      }
      return transaction.rosters.includes(rosterIDOne) && transaction.rosters.includes(rosterIDTwo);
    });
    const move = (arr, from, to) => {
      arr.splice(to, 0, arr.splice(from, 1)[0]);
    };
    return trades.map((t) => {
      const rosterIDOne = parseInt(getRosterIDFromManagerIDAndYear(leagueTeamManagers, playerOne, t.season));
      const rosterIDTwo = parseInt(getRosterIDFromManagerIDAndYear(leagueTeamManagers, playerTwo, t.season));
      const rosterOneStartLocation = t.rosters.indexOf(rosterIDOne);
      if (rosterOneStartLocation > 0) {
        move(t.rosters, rosterOneStartLocation, 0);
        for (const tradeMove of t.moves) {
          move(tradeMove, rosterOneStartLocation, 0);
        }
      }
      const rosterTwoStartLocation = t.rosters.indexOf(rosterIDTwo);
      const last = t.rosters.length - 1;
      if (rosterTwoStartLocation < last) {
        move(t.rosters, rosterTwoStartLocation, last);
        for (const tradeMove of t.moves) {
          move(tradeMove, rosterTwoStartLocation, last);
        }
      }
      return t;
    });
  };
  const performanceOrderOne = [
    {
      field: "wins",
      label: "Wins",
      unit: "wins"
    },
    {
      field: "losses",
      label: "Losses",
      unit: "losses"
    },
    {
      field: "ties",
      label: "Ties",
      unit: "ties"
    }
  ];
  const performanceOrderTwo = [
    {
      field: "fptsFor",
      label: "Fantasy Points For",
      unit: "fpts"
    },
    {
      field: "fptsAgainst",
      label: "Fantasy Points Against",
      unit: "fpts against"
    }
  ];
  if ($$props.leagueTeamManagers === void 0 && $$bindings.leagueTeamManagers && leagueTeamManagers !== void 0)
    $$bindings.leagueTeamManagers(leagueTeamManagers);
  if ($$props.playersInfo === void 0 && $$bindings.playersInfo && playersInfo !== void 0)
    $$bindings.playersInfo(playersInfo);
  if ($$props.transactionsInfo === void 0 && $$bindings.transactionsInfo && transactionsInfo !== void 0)
    $$bindings.transactionsInfo(transactionsInfo);
  if ($$props.recordsInfo === void 0 && $$bindings.recordsInfo && recordsInfo !== void 0)
    $$bindings.recordsInfo(recordsInfo);
  if ($$props.playerOne === void 0 && $$bindings.playerOne && playerOne !== void 0)
    $$bindings.playerOne(playerOne);
  if ($$props.playerTwo === void 0 && $$bindings.playerTwo && playerTwo !== void 0)
    $$bindings.playerTwo(playerTwo);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      analyzeRivalry(playerOne, playerTwo);
    }
    matchup = rivalry?.matchups[selected]?.matchup;
    displayWeek = rivalry?.matchups[selected]?.week;
    year = rivalry?.matchups[selected]?.year;
    tradeHistory = setTradeHistory(playerOne, playerTwo);
    playerOneRecords = recordsInfo?.regularSeasonData?.leagueManagerRecords ? recordsInfo.regularSeasonData.leagueManagerRecords[playerOne] : null;
    playerTwoRecords = recordsInfo?.regularSeasonData?.leagueManagerRecords ? recordsInfo.regularSeasonData.leagueManagerRecords[playerTwo] : null;
    $$rendered = `<h2 class="svelte-azlhdy">Rivalry</h2>

<div class="rivalrySelection">${validate_component(ManagerSelectors, "ManagerSelectors").$$render(
      $$result,
      { leagueTeamManagers, playerOne, playerTwo },
      {
        playerOne: ($$value) => {
          playerOne = $$value;
          $$settled = false;
        },
        playerTwo: ($$value) => {
          playerTwo = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>

${loading ? `${playerOne && playerTwo ? `<div class="loading svelte-azlhdy"><p>Analyzing rivalry...</p>
            <br>
            ${validate_component(LinearProgress, "LinearProgress").$$render($$result, { indeterminate: true }, {}, {})}</div>` : `<div class="center svelte-azlhdy"><img class="helmets svelte-azlhdy" src="/helmets.png" alt="placeholder of helmets clashing"></div>`}` : `${rivalry?.matchups.length > 0 ? `<div class="scoreBoard svelte-azlhdy"><h3 class="svelte-azlhdy">Head to Head</h3>
            
            ${validate_component(ComparissonBar, "ComparissonBar").$$render(
      $$result,
      {
        sideOne: rivalry.wins.one,
        sideTwo: rivalry.wins.two,
        label: "Wins",
        unit: "wins"
      },
      {},
      {}
    )}
            
            ${validate_component(ComparissonBar, "ComparissonBar").$$render(
      $$result,
      {
        sideOne: parseFloat(round(rivalry.points.one)),
        sideTwo: parseFloat(round(rivalry.points.two)),
        label: "Points",
        unit: "pts"
      },
      {},
      {}
    )}
            <h3 class="svelte-azlhdy">Matchups</h3>
            ${validate_component(RivalryControls, "RivalryControls").$$render(
      $$result,
      {
        year,
        displayWeek,
        length: rivalry.matchups.length,
        selected
      },
      {
        selected: ($$value) => {
          selected = $$value;
          $$settled = false;
        }
      },
      {}
    )}
            ${validate_component(Matchup, "Matchup").$$render(
      $$result,
      {
        key: `${playerOne}-${playerTwo}`,
        ix: selected,
        active: selected,
        year,
        matchup,
        players: playersInfo.players,
        displayWeek,
        expandOverride: true,
        leagueTeamManagers
      },
      {},
      {}
    )}</div>` : ``}
    <div class="scoreBoard svelte-azlhdy">${playerOne && playerTwo ? `
            <h3 class="svelte-azlhdy">Trade History</h3>
            <div class="trades svelte-azlhdy">${tradeHistory.length ? each(tradeHistory, (transaction) => {
      return `${validate_component(TradeTransaction, "TradeTransaction").$$render(
        $$result,
        {
          players: playersInfo.players,
          transaction,
          leagueTeamManagers
        },
        {},
        {}
      )}`;
    }) : `No trades yet...`}</div>` : ``}</div>
    ${playerOne && playerTwo && playerOneRecords && playerTwoRecords ? `<div class="scoreBoard svelte-azlhdy">
            <h3 class="svelte-azlhdy">Performance Comparisson</h3>
            ${validate_component(ComparissonBar, "ComparissonBar").$$render(
      $$result,
      {
        sideOne: parseFloat(round(playerOneRecords.wins / (playerOneRecords.wins + playerOneRecords.ties + playerOneRecords.losses) * 100)),
        sideTwo: parseFloat(round(playerTwoRecords.wins / (playerTwoRecords.wins + playerTwoRecords.ties + playerTwoRecords.losses) * 100)),
        label: "Win Percentage",
        unit: "%"
      },
      {},
      {}
    )}
            ${each(performanceOrderOne, (stat) => {
      return `${validate_component(ComparissonBar, "ComparissonBar").$$render(
        $$result,
        {
          sideOne: parseFloat(round(playerOneRecords[stat.field])),
          sideTwo: parseFloat(round(playerTwoRecords[stat.field])),
          label: stat.label,
          unit: stat.unit
        },
        {},
        {}
      )}`;
    })}
            ${validate_component(ComparissonBar, "ComparissonBar").$$render(
      $$result,
      {
        sideOne: parseFloat(round(playerOneRecords.fptsFor / (playerOneRecords.wins + playerOneRecords.ties + playerOneRecords.losses))),
        sideTwo: parseFloat(round(playerTwoRecords.fptsFor / (playerTwoRecords.wins + playerTwoRecords.ties + playerTwoRecords.losses))),
        label: "Fantasy Points per Game",
        unit: "fpts/game"
      },
      {},
      {}
    )}
            ${each(performanceOrderTwo, (stat) => {
      return `${validate_component(ComparissonBar, "ComparissonBar").$$render(
        $$result,
        {
          sideOne: parseFloat(round(playerOneRecords[stat.field])),
          sideTwo: parseFloat(round(playerTwoRecords[stat.field])),
          label: stat.label,
          unit: stat.unit
        },
        {},
        {}
      )}`;
    })}
            ${validate_component(ComparissonBar, "ComparissonBar").$$render(
      $$result,
      {
        sideOne: parseFloat(round(playerOneRecords.fptsFor / playerOneRecords.potentialPoints * 100)),
        sideTwo: parseFloat(round(playerTwoRecords.fptsFor / playerTwoRecords.potentialPoints * 100)),
        label: "Lineup IQ",
        unit: "%"
      },
      {},
      {}
    )}</div>` : ``}`}`;
  } while (!$$settled);
  return $$rendered;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".holder.svelte-1swuelu{position:relative;z-index:1}.loading.svelte-1swuelu{display:block;width:85%;max-width:500px;margin:80px auto}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { leagueTeamManagerData, playersData, transactionsData, recordsData, playerOne, playerTwo } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="holder svelte-1swuelu">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
		<div class="loading svelte-1swuelu"><p>Gathering information...</p>
			<br>
			${validate_component(LinearProgress, "LinearProgress").$$render($$result, { indeterminate: true }, {}, {})}</div>
	`;
    }
    return function([leagueTeamManagers, playersInfo, transactionsInfo, recordsInfo]) {
      return `
		
		${validate_component(Rivalry, "Rivalry").$$render(
        $$result,
        {
          leagueTeamManagers,
          playersInfo,
          transactionsInfo,
          recordsInfo,
          playerOne,
          playerTwo
        },
        {},
        {}
      )}
	`;
    }(__value);
  }(waitForAll(leagueTeamManagerData, playersData, transactionsData, recordsData))}</div>`;
});
export {
  Page as default
};
