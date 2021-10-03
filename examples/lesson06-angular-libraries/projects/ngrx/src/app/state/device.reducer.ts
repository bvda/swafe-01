import { createReducer, on } from '@ngrx/store'
import { retrievedList } from './device.actions'
import { Device } from './device.model'

export const initialState: ReadonlyArray<Device> = []

export const devicesReducer = createReducer<ReadonlyArray<Device>>(
  initialState,
  on(retrievedList, (_, { devices }) => {
    return [...devices]
  }),
)
