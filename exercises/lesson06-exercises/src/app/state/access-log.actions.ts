import { Action, createReducer }from '@ngrx/store';
import { AccessLogEntry } from '../access-log.service';

export const initialState: ReadonlyArray<AccessLogEntry> = []

const _accessLogReducer = createReducer(
  initialState
)

export function accessLogReducer(state: ReadonlyArray<AccessLogEntry> | undefined, action: Action) {
  return _accessLogReducer(state, action)
} 