import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  environmentTitle: string = environment.app_title;

  authForm = this.formBuilder.group({
    username: [''],
    password: [''],
  })

  constructor(private formBuilder: FormBuilder) { }

  onSubmit() {
    console.log(this.authForm.value)
  }

}
