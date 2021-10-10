import { Injectable } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { RealFakeApiService } from './real-fake-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  credentials: Credentials | null

  constructor(private api: RealFakeApiService) { 
    this.credentials = null
  }

  signUp(username: string, password: string, confirmPassword: string): Observable<[] | Error> {
    if(password !== confirmPassword) {
      return of(Error('Passwords do not match'))
    } 
    return this.api.signUp(username, password)
  }

  signOut(): Observable<never> { 
    this.credentials = null
    return this.api.logout()
  }

  signIn(username: string = '', password: string = ''): Observable<LoginResponse | Error> {
    if(!username || !password) {
      return of(Error('Invalid credentials'))
    }
    return this.api.login(username, password)
  }

  getCredentials(): Credentials | null {
    return this.credentials
  }
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
}
 
export interface Credentials {
  user_name: string;
}
