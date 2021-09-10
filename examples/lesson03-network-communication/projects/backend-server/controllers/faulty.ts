import { ASTRONAUTS, LAUNCH_VEHICLES } from "../data";

export const listAstronauts = function(req, res) {
  if(Math.random() > 0.5) {
    res.status(500)
    res.send({
      status_code: 500,
      message: 'An error has occured'
    })
  } else {
    res.json(ASTRONAUTS)
  }
}

export const listLaunchVehicles = function(req, res) {
  if(Math.random() > 0.5) {
    res.status(500)
    res.send({
      status_code: 500,
      message: 'An error has occured'
    })
  } else {
    res.json(LAUNCH_VEHICLES)
  }
}