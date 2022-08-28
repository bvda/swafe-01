import { Component } from '@angular/core';
import { UserModule } from '../user/user.module';

@Component({
  selector: 'app-standalone',
  templateUrl: './standalone.component.html',
  imports: [UserModule],
  standalone: true,
  styleUrls: ['./standalone.component.scss']
})
export class StandaloneComponent { }
