import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appFullName]',
  providers: [{provide: NG_VALIDATORS, useExisting: FullNameDirective, multi: true}]
})
export class FullNameDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    return control.value.first_name?.length === 0 || control.value.last_name?.length === 0 ? { must_be_set: 'first_name and last_name must be set' } : null
  }
}
