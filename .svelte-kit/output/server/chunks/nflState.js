import { q as get_store_value } from "./index3.js";
import { b as nflState } from "./stores.js";
const getNflState = async () => {
  if (get_store_value(nflState).season) {
    return get_store_value(nflState);
  }
  const res = await fetch(`https://api.sleeper.app/v1/state/nfl`, { compress: true }).catch((err) => {
    console.error(err);
  });
  const data = await res.json().catch((err) => {
    console.error(err);
  });
  if (res.ok) {
    nflState.update(() => data);
    return data;
  } else {
    throw new Error(data);
  }
};
export {
  getNflState as g
};
