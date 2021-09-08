import { Component } from '@angular/core';
import { Course } from 'models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  courses: Course[] = [{
    name: 'Advanced Frontend Development',
    code: 'SWAFE-01',
    ects: 5,
  }, {
    name: 'Mobile Application Development',
    code: 'SWMAD-01',
    ects: 5,
  }, {
    name: 'Advanced Backend Development',
    code: 'SWTABE-01',
    ects: 5,
  }]
}
