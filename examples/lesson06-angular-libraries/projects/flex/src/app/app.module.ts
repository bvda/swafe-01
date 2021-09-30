import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BreakpointComponent } from './breakpoint/breakpoint.component';
import { FlexComponent } from './flex/flex.component';

@NgModule({
  declarations: [
    AppComponent,
    BreakpointComponent,
    FlexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
