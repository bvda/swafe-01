import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  users$: Observable<{ first_name: string, last_name: string, email: string}[]>

  constructor(userService: UserService) { 
    this.users$ = userService.getUsers();
  }
}
