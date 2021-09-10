import { LAUNCH_VEHICLES } from "../data"

export const list = function(req, res) {
  res.json(LAUNCH_VEHICLES)  
}
export const update = function(req, res) {
  res.send({"success": true})
}