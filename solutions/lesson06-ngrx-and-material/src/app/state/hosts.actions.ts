import { createAction, props } from '@ngrx/store';
import { Host } from '../hosts.service';

export const loadHosts = createAction(
  `[Hosts/API] Load hosts`
)

export const hostsLoaded = createAction(
  `[Hosts/API] Hosts loaded`,
  props<{ hosts: ReadonlyArray<Host>}>()
)