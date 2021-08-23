import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { APP_CONFIG, AUTH_CONFIG, ROLES, ROLES_TOKEN } from './app.config';
import { UserComponent } from './user/user.component';
import { SharedUserComponent } from './shared-user/shared-user.component';
import { RoleSelectorComponent } from './role-selector/role-selector.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SharedUserComponent,
    RoleSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [{
    provide: APP_CONFIG, useValue: AUTH_CONFIG
  }, {
    provide: ROLES_TOKEN, useValue: ROLES
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
