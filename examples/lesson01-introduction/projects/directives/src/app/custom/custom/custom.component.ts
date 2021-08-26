import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  onSignIn() {
    this.auth.signIn()
  }

  onSignOut() {
    this.auth.signOut()
  }

  get isAuthenticated(): Observable<boolean> {
    return this.auth.isAuthenticated()
  }

}
