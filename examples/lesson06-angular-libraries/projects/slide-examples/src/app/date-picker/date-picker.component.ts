import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent {
  range = this.fb.group({
    start: [''],
    end: ['']

  })

  constructor(private fb: FormBuilder) { }

  get start(): FormControl {
    return this.range.get('start') as FormControl
  }

  get end(): FormControl {
    return this.range.get('end') as FormControl
  }
}
