import { Action, createReducer, on }from '@ngrx/store';
import { hostsLoaded } from './hosts.actions';
import { Host } from '../hosts.service';

export const initialState: ReadonlyArray<Host> = []

const _hostsReducer = createReducer(
  initialState,
  on(hostsLoaded, (_, { hosts }) => [...hosts])
)

export function hostsReducer(state: ReadonlyArray<Host> | undefined, action: Action) {
  return _hostsReducer(state, action)
} 