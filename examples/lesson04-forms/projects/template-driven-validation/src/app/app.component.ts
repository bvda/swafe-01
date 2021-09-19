import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Class, WarcraftService } from 'warcraft';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  classes$: Observable<Class[]>;

  constructor(warcraftService: WarcraftService) { 
    this.classes$ = warcraftService.getClasses()
  }

  onSubmit(form: NgForm) {
    console.log(form.value)
  }
}
