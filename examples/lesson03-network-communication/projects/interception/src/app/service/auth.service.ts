import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  rootUrl = `http://localhost:3000/auth`  

  constructor(private http: HttpClient) { }

  token() {
    return this.http.post<LoginResponse>(`${this.rootUrl}/login`, {})
  }
}

interface LoginResponse {
  token: string;
}
