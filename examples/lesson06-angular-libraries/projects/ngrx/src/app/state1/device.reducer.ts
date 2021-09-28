import { createReducer, on } from '@ngrx/store'
import { addDevice, removeDevice, retrievedList } from './device.actions'
import { Device } from './device.model'

export const initialState: ReadonlyArray<Device> = []

export const devicesReducer = createReducer<ReadonlyArray<Device>>(
  initialState,
  on(retrievedList, (_, { devices }) => {
    return [...devices]
  }),
  on(removeDevice, (state, { deviceId }) => {
    return state.filter(device => device.name != deviceId)
  }),
  on(addDevice, (state, { device }) => {
    return [...state, device]
  })
)
