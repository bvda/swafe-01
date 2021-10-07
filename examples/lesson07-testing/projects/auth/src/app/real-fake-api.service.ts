import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RealFakeApiService {

  rootUrl = ''

  constructor(private http: HttpClient) {

  }

  login(username: string | null = null, password: string | null = null): Observable<{ access_token: string, refresh_token: string}> {
    return this.http.post<{ access_token: string, refresh_token: string}>(this.rootUrl, { username, password }).pipe(
      catchError(e => throwError(e))
    )
  }
  
  logout(): Observable<never> { 
    return EMPTY
  }

  signUp(): Observable<[]> {
    return of([])
  }
}
