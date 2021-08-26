import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticated$: BehaviorSubject<boolean> = new BehaviorSubject(false as boolean);

  constructor() { }

  signIn() {
    this.authenticated$.next(true)
  }

  signOut() {
    this.authenticated$.next(false)
  }

  isAuthenticated(): Observable<boolean> {
    return this.authenticated$
  }
}
