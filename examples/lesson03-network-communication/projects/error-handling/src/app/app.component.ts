import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Astronaut } from 'lib-space';
import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { SpaceError } from './space-error.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faultyAstronauts$: Observable<Astronaut[] | SpaceError> | null = null
  error = ''

  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.faultyAstronauts$ = this.http.get<Astronaut[]>('http://localhost:3000/faulty/astronauts').pipe(
      catchError((e: HttpErrorResponse) => {
        console.error(e.message)
        if(e.status === 0) {
          // Client-side or network error
          console.error(e.message)
          this.error = 'Client-side or network error'
        } else {
          // Endpoint returned an unsuccessful response code
          this.error = 'Endpoint returned an unsuccessful response code'
        }
        return of({ message: e.message, status_code: e.status });
      }),
    )
  }
}
