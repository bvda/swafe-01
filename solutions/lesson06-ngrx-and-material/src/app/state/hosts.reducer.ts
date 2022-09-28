import { Action, createReducer }from '@ngrx/store';
import { AccessLogEntry } from '../access-log.service';
import { Host } from '../hosts.service';

export const initialState: ReadonlyArray<Host> = []

const _hostsReducer = createReducer(
  initialState
)

export function hostsReducer(state: ReadonlyArray<Host> | undefined, action: Action) {
  return _hostsReducer(state, action)
} 