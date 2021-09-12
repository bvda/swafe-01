import { ASTRONAUTS } from "../data"

export const list = function(req, res) {
  res.json(ASTRONAUTS)
}

export const remove = function(req, res) {
  res.json({
    message: 'Deleted'
  })

}

export const update = function(req, res) {
  res.json({
    message: 'patch'
  })
}