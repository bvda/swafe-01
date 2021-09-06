import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticated$: BehaviorSubject<boolean> = new BehaviorSubject(false as boolean);
  authed: boolean = false

  constructor() { }

  signIn() {
    this.authed = true
    this.authenticated$.next(true)
  }

  signOut() {
    this.authed = false
    this.authenticated$.next(false)
  }

  isAuthenticated(): Observable<boolean> {
    return this.authenticated$
  }

  get authenticated(): boolean {
    return this.authed
  }
}