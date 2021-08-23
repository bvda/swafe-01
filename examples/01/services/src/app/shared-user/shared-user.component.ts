import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ROLES_TOKEN } from '../app.config';
import { NameService } from '../name.service';
import { randomNumberFactory, RANDOM_NUMBER } from '../random-number';

@Component({
  selector: 'app-shared-user',
  templateUrl: './shared-user.component.html',
  styleUrls: ['./shared-user.component.scss'],
  providers: [{ provide: RANDOM_NUMBER, useFactory: randomNumberFactory}]
})
export class SharedUserComponent {

  name$: Observable<string> = this.nameService.name;

  constructor(private nameService: NameService, @Inject(ROLES_TOKEN) private roles: string[], @Inject(RANDOM_NUMBER) private random: (min: number, max: number) => number) { 
  }

  onRoleChange(role: string) {
    this.nameService.user = role
  }

  setName() {
    this.nameService.user = this.roles[this.random(0, this.roles.length)]
  }

}
