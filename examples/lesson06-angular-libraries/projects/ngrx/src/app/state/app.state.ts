import { Device } from "../state/device.model";

export interface AppState { 
  devices: ReadonlyArray<Device>;
  collection: ReadonlyArray<string>; 
}