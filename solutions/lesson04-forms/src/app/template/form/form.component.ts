import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.warn('onSubmit()')
    console.log(form.value)
  }

}
