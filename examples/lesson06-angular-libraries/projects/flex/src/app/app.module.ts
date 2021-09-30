import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BreakpointComponent } from './breakpoint/breakpoint.component';
import { FlexComponent } from './flex/flex.component';
import { MediaQueryStatusComponent } from './media-query-status/media-query-status.component';

@NgModule({
  declarations: [
    AppComponent,
    BreakpointComponent,
    FlexComponent,
    MediaQueryStatusComponent
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
