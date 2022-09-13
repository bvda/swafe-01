import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Class, WarcraftService } from 'warcraft';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  profileForm = this.formBuilder.group({
    name: this.formBuilder.group({
      first_name: [''],
      last_name: [''],
    }, { validators: this.fullNameRequired, updateOn: 'change' }),
    phone: ['', Validators.nullValidator],
    email: ['', [Validators.required, Validators.email, Validators.minLength(5)]],
    class:[{ name: '', roles: [{name: ''}]}],
  })

  classes$: Observable<Class[]>;
  
  constructor(private formBuilder: FormBuilder, warcraftService: WarcraftService) { 
    this.classes$ = warcraftService.getClasses()
  }
  
  onSubmit() { 
    console.log(this.profileForm.value)
  } 

  onAutofill() {
    this.profileForm.patchValue({
      name: {
        first_name: 'Anduin',
        last_name: 'Wrynn',
      },
      phone: '1-800-HEALZ',
      email: 'aw@stormwind.az',
      class:  {
        name: 'Priest',
        roles: [{
          name: 'Healer'
        }, {
          name: 'Damage'
        }]
      }
    })  
  }

  fullNameRequired(group: AbstractControl): ValidationErrors | null {
    return group.get('first_name')?.value.length === 0 || group.get('last_name')?.value.length === 0 ? { must_be_set: 'first_name and last_name must be set' } : null
  }

  compareClasses(c1: Class, c2: Class) {
    return c1 && c2 ? c1.name === c2.name : c1 === c2; 
  }

  get name(): FormControl {
    return this.profileForm.get('name') as FormControl
  }

  get email(): FormControl {
    return this.profileForm.get('email') as FormControl
  }
}
