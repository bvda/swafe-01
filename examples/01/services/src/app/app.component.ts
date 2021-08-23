import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from './app-config';
import { APP_CONFIG } from './app.config';
import { NameService } from './name.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'services';
  name$: Observable<string>;

  constructor(@Inject(APP_CONFIG) config: AppConfig, private nameService: NameService) {
    this.title = config.title;
    this.name$ = this.nameService.name;
  }

  onRoleChange(role: string) {
    this.nameService.user = role
  }
}
