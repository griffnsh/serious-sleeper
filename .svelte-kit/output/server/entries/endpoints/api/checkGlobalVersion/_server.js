import { v as version } from "../../../../chunks/version.js";
import { j as json } from "../../../../chunks/index.js";
async function GET() {
  return json(version);
}
export {
  GET
};
