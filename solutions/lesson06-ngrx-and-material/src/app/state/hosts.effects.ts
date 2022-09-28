import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { HostsService } from '../hosts.service';
 
@Injectable()
export class HostEffects {
 
  loadHosts$ = createEffect(() => this.actions$.pipe(
  ));
 
  constructor(
    private actions$: Actions,
    private hostsService: HostsService
  ) {}
}