import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, retryWhen, throwError } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  host = 'http://localhost:3000/exercise/client/faulty'

  constructor(private httpClient: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.host).pipe(
      catchError((e: HttpErrorResponse) => {
        console.error(e.message)
        return throwError(() => e);
      }),
      retry(5)
    )
  }
}
