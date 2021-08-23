import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IsAuthenticatedDirective } from './is-authenticated.directive';
import { PublicComponent } from './public/public.component';
import { RestrictedComponent } from './restricted/restricted.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    IsAuthenticatedDirective,
    PublicComponent,
    RestrictedComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
