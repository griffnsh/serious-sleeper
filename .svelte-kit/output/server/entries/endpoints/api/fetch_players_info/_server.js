import { l as leagueID } from "../../../../chunks/leagueInfo.js";
import { r as round } from "../../../../chunks/universalFunctions.js";
import { w as waitForAll } from "../../../../chunks/multiPromise.js";
import { e as error, j as json } from "../../../../chunks/index.js";
async function GET() {
  const [nflStateRes, leagueDataRes, playoffsRes] = await waitForAll(
    fetch(`https://api.sleeper.app/v1/state/nfl`, { compress: true }),
    fetch(`https://api.sleeper.app/v1/league/${leagueID}`, { compress: true }),
    fetch(`https://api.sleeper.app/v1/league/${leagueID}/winners_bracket`, { compress: true })
  );
  const [nflState, leagueData, playoffs] = await waitForAll(
    nflStateRes.json(),
    leagueDataRes.json(),
    playoffsRes.json()
  );
  let year = nflState.league_season;
  const regularSeasonLength = leagueData.settings.playoff_week_start - 1;
  const playoffLength = playoffs.pop().r;
  const fullSeasonLength = regularSeasonLength + playoffLength;
  const resPromises = [
    fetch(`https://api.sleeper.app/v1/players/nfl`, { compress: true })
  ];
  for (let week = 1; week <= fullSeasonLength + 3; week++) {
    resPromises.push(
      fetch(`https://api.sleeper.app/projections/nfl/${year}/${week}?season_type=regular&position[]=DB&position[]=DEF&position[]=DL&position[]=FLEX&position[]=IDP_FLEX&position[]=K&position[]=LB&position[]=QB&position[]=RB&position[]=REC_FLEX&position[]=SUPER_FLEX&position[]=TE&position[]=WR&position[]=WRRB_FLEX&order_by=ppr`, { compress: true })
    );
  }
  const responses = await waitForAll(...resPromises);
  const resJSONs = [];
  for (const res of responses) {
    if (!res.ok) {
      throw error(500, "No luck");
    }
    resJSONs.push(res.json());
  }
  const weeklyData = await waitForAll(...resJSONs);
  const playerData = weeklyData.shift();
  const scoringSettings = leagueData.scoring_settings;
  return json(computePlayers(playerData, weeklyData, scoringSettings));
}
const computePlayers = (playerData, weeklyData, scoringSettings) => {
  const computedPlayers = {};
  for (const id in playerData) {
    const projPlayer = playerData[id];
    const player = {
      // injury_notes: projPlayer.injury_notes,
      fn: projPlayer.first_name,
      ln: projPlayer.last_name,
      pos: projPlayer.position
    };
    if (projPlayer.team) {
      player.t = projPlayer.team;
      player.wi = {};
    }
    if (projPlayer.team && projPlayer.injury_status) {
      player.is = projPlayer.injury_status;
    }
    computedPlayers[id] = player;
  }
  for (let week = 1; week <= weeklyData.length; week++) {
    for (const player of weeklyData[week - 1]) {
      const id = player.player_id;
      if (computedPlayers[id] == null || !computedPlayers[id].wi)
        continue;
      computedPlayers[id].wi[week] = {
        p: calculateProjection(player.stats, scoringSettings),
        o: player.opponent
      };
    }
  }
  computedPlayers["OAK"] = computedPlayers["LV"];
  return computedPlayers;
};
const calculateProjection = (projectedStats, scoreSettings) => {
  let score = 0;
  for (const stat in projectedStats) {
    const multiplier = scoreSettings[stat] ? scoreSettings[stat] : 0;
    score += projectedStats[stat] * multiplier;
  }
  return round(score);
};
export {
  GET
};
