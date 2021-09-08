import { LAUNCH_VEHICLES } from "./data"
export const list = function(req, res) {
  res.json(LAUNCH_VEHICLES)  
}