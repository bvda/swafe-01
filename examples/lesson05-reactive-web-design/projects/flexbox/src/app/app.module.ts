import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexContainerComponent } from './flex-container/flex-container.component';
import { FlexItemComponent } from './flex-item/flex-item.component';
import { FlexWrapComponent } from './flex-wrap/flex-wrap.component';

@NgModule({
  declarations: [
    AppComponent,
    FlexContainerComponent,
    FlexItemComponent,
    FlexWrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
