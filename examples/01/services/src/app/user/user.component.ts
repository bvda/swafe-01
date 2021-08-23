import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NameService } from '../name.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [NameService]
})
export class UserComponent implements OnInit {

  @Input()
  userName: string;

  role$: Observable<string> = this.nameService.name

  constructor(private nameService: NameService) { 
    this.userName = ''
  }

  ngOnInit(): void {
    this.nameService.user = this.userName
  }

  onRoleChange(role: string) {
    this.nameService.user = role
  }
}
