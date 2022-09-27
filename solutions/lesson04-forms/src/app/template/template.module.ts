import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { PasswordsEqualDirective } from '../passwords-equal.directive';



@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PasswordsEqualDirective,
  ],
  exports: [
    FormComponent
  ]
})
export class TemplateModule { }
