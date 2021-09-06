import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'route-guards';

  authed$: Observable<boolean>

  constructor(private auth: AuthService) {
  }
  
  ngOnInit() {
    this.authed$ = this.auth.isAuthenticated()
  }

  signIn() {
    this.auth.signIn()
  }

  signOut() {
    this.auth.signOut()
  }
}
