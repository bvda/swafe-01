import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  authForm = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required],
    remember:[false]
  })

  constructor(private formBuilder: FormBuilder) { }

  onSubmit() {
    console.log(this.authForm.value)
  }

  get email(): FormControl {
    return this.authForm.get('email') as FormControl
  }

  get password(): FormControl {
    return this.authForm.get('password') as FormControl
  }

}
