import { ASTRONAUTS } from "./data"

export const list = function(req, res) {
  res.json(ASTRONAUTS)
}