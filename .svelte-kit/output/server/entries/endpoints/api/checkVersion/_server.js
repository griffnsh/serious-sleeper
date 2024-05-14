import { v as version } from "../../../../chunks/version.js";
import { j as json } from "../../../../chunks/index.js";
async function GET() {
  const res = await fetch("https://league-page.nmelhado.com/api/checkGlobalVersion", { compress: true });
  let needsUpdate = false;
  if (res.ok) {
    const globalVersion = await res.json();
    console.log(`VERSION CHECK: global version: ${globalVersion}, local version: ${version}`);
    needsUpdate = globalVersion != version;
  }
  return json(needsUpdate);
}
export {
  GET
};
