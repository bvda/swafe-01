import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Class, WarcraftService } from 'warcraft';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  profileForm: FormGroup
  classes$: Observable<Class[]>;
  
  constructor(private formBuilder: FormBuilder, warcraftService: WarcraftService) { 
    this.classes$ = warcraftService.getClasses()
    this.profileForm = this.formBuilder.group({
      first_name: [''],
      last_name: [''],
      phone: [''],
      email: [''],
      class:[''],
    })
  }
  
  onSubmit() { 
    console.log(this.profileForm.value)
  } 

  onAutofill() {
    this.profileForm.patchValue({
      first_name: 'Anduin',
      last_name: ' Wrynn',
      phone: '1-800-HEALS',
      email: 'aw@stormwind.az',
    })  
    this.profileForm.controls['class'].setValue({
      name: 'Priest',
      roles: [{
        name: 'Healer'
      }, {
        name: 'Damage'
      }]
    })
  }

  compareClasses(c1: Class, c2: Class) {
    return c1 && c2 ? c1.name === c2.name : c1 === c2; 
  }
}
