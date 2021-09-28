import { createSelector } from "@ngrx/store";
import { AppState } from "./app.state";
import { Device } from "./device.model";

export const selectDevices = createSelector(
  (state: AppState) => state.devices,
  (devices: ReadonlyArray<Device>) => devices
)