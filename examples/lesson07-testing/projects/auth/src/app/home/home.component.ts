import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  authForm = this.formBuilder.group({
    username: [''],
    password: [''],
  })

  constructor(private formBuilder: FormBuilder) { }

  onSubmit() {
    console.log(this.authForm.value)
  }

}
