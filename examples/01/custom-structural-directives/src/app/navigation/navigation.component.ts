import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  constructor(private auth: AuthService) { }

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
