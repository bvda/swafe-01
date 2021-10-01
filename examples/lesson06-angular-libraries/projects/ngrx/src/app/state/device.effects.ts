import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { DeviceService } from '../device.service';
import { loadDevices, retrievedList } from './device.actions';

@Injectable()
export class DeviceEffects {
  loadDevices$ = createEffect(() => 
  this.actions$.pipe(
    ofType(loadDevices),
    mergeMap(() => this.deviceService$.getDevices()
      .pipe(
        map(devices => (retrievedList({ devices }))),
        catchError(() => {
          return EMPTY
        })
    ))
  ))

  constructor(
    private actions$: Actions, 
    private deviceService$: DeviceService) {}
}

