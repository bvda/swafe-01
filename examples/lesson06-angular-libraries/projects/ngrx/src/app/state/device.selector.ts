import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { Device } from "./device.model";

export const selectDevices = createSelector(
  (state: AppState) => state.devices,
  (devices: ReadonlyArray<Device>) => devices
)

export const selectCollectionState = createFeatureSelector<AppState, ReadonlyArray<string>>('collection');

export const selectDeviceCollection = createSelector(
  selectDevices,
  selectCollectionState,
  (devices: ReadonlyArray<Device>, collection: ReadonlyArray<String>) => {
    return collection.map((id) => devices.find((device) => device.name === id));
  }
);