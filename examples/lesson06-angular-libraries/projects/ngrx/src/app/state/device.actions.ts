import { createAction, props } from "@ngrx/store";
import { Device } from "./device.model";

export const addDevice = createAction(
  `[Device] Add Device`,
  props<{ deviceId: string}>()
)

export const removeDevice = createAction(
  `[Device] Remove Device`,
  props<{ deviceId: string}>()
)

export const retrievedList = createAction(
  `[Device/API] Retrieved List`,
  props<{ devices: ReadonlyArray<Device>}>()
)