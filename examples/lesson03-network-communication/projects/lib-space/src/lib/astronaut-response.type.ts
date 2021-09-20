import { Astronaut } from "lib-space";
import { SpaceError } from "./space-error.type";

export interface AstronautResponse {
  astronauts?: Array<Astronaut>
  error?: SpaceError
}