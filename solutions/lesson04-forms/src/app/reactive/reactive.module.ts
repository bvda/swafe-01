import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordsEqualDirective } from '../passwords-equal.directive';



@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PasswordsEqualDirective,
  ],
  exports: [
    FormComponent
  ]
})
export class ReactiveModule { }
