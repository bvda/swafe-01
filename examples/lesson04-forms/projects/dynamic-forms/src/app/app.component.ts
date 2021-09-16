import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  profileForm = this.formBuilder.group({
    loot: this.formBuilder.array([''])
  })

  constructor(private formBuilder: FormBuilder) {

  }

  get loot() {
    return this.profileForm.
  }
}
