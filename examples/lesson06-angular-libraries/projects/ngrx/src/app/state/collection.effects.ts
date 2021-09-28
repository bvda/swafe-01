import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect, concatLatestFrom } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { addDevice } from './device.actions';
import { AppState } from './app.state';
import { selectDeviceCollection } from './device.selector';
 
@Injectable()
export class CollectionEffects {
  addBookToCollectionSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addDevice),
        concatLatestFrom(action => this.store.select(selectDeviceCollection)),
        tap(([action, deviceCollection]) => {
          if (deviceCollection.length === 1) {
            window.alert('Congrats on adding your first device!');
          } else {
            window.alert('You have added device number ' + deviceCollection.length);
          }
        })
      ),
    { dispatch: false }
  );
 
  constructor(
    private actions$: Actions,
    private store: Store<AppState>
  ) {}
}