import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RealFakeApiService } from './real-fake-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  credentials: Credentials | null

  constructor(private api: RealFakeApiService) { 
    this.credentials = null
  }

  signUp() { 
    // this.api.
  }

  signOut(): Observable<never> { 
    this.credentials = null
    return this.api.logout()
  }

  signIn(): Observable<LoginResponse | string[]> {
    return this.api.login()
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
