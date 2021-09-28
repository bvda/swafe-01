import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state1/counter.reducer';
import { devicesReducer } from './state1/device.reducer';
import { DeviceListComponent } from './device-list/device-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DeviceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer, devices: devicesReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
