import { q as get_store_value } from "./index3.js";
import { c as players } from "./stores.js";
const loadPlayers = async (servFetch, refresh = false) => {
  if (get_store_value(players)[1426]) {
    return {
      players: get_store_value(players),
      stale: false
    };
  }
  const smartFetch = servFetch ?? fetch;
  Math.round((/* @__PURE__ */ new Date()).getTime() / 1e3);
  {
    const res = await smartFetch(`/api/fetch_players_info`, { compress: true });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data);
    }
    return {
      players: data,
      stale: false
    };
  }
};
export {
  loadPlayers as l
};
