import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipes';
  today: number = Date.now()
  fraction: number = 1.337;
  user: User = {
    firstName: 'Bruce',
    lastName: 'Wayne'
  }

  setName() {
    this.user.lastName = 'Lee'
    console.log(this.user)
  }
}
