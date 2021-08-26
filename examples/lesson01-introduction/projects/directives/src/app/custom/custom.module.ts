import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsAuthenticatedDirective } from './is-authenticated.directive';
import { PublicComponent } from './public/public.component';
import { RestrictedComponent } from './restricted/restricted.component';
import { CustomComponent } from './custom/custom.component';



@NgModule({
  declarations: [
    CustomComponent,
    IsAuthenticatedDirective,
    RestrictedComponent,
    PublicComponent,
    RestrictedComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CustomComponent,
  ]
})
export class CustomModule { }
