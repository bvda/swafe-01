import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { devicesReducer } from './state/device.reducer';
import { DeviceListComponent } from './device-list/device-list.component';
import { collectionReducer } from './state/collection.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DeviceEffects } from './state/device.effects';

@NgModule({
  declarations: [
    AppComponent,
    DeviceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ devices: devicesReducer, collection: collectionReducer }),
    EffectsModule.forRoot([DeviceEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
