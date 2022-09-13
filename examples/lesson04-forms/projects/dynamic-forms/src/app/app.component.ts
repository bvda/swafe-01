import { Component } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  profileForm = this.formBuilder.group({
    first_name: [''],
    last_name: [''],
    loot: this.formBuilder.array([''])
  })

  constructor(private formBuilder: FormBuilder) { }

  onSubmit() {
    console.log(this.profileForm.value)
  }

  addLoot() {
    this.profileForm.controls.loot.push(this.formBuilder.control(''))
  }

  removeLoot(index: number) {
    this.profileForm.controls.loot.removeAt(index)
  }

  get loot() {
    return this.profileForm.get('loot') as FormArray
  }
}
