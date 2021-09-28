import { createReducer, on, Action } from '@ngrx/store';
import { addDevice, removeDevice } from './device.actions';
 
export const initialState: ReadonlyArray<string> = [];
 
export const collectionReducer = createReducer(
  initialState,
  on(removeDevice, (state, { deviceId }) => state.filter((id) => id !== deviceId)),
  on(addDevice, (state, { deviceId }) => {
    if (state.indexOf(deviceId) > -1) {
      return state;
    }
    return [...state, deviceId];
  })
);