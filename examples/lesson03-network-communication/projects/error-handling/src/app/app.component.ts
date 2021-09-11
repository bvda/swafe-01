import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Astronaut } from 'lib-space';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SpaceError } from './space-error.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faultyAstronauts$: Observable<Astronaut[] | SpaceError> | null = null
  host = 'http://localhost:3000/faulty/astronauts'
  error = ''

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.faultyAstronauts$ = this.http.get<Astronaut[]>(this.host).pipe(
      catchError((e: HttpErrorResponse) => {
        console.error(e.message)
        if(e.status === 0) {
          this.error = 'Client-side or network error'
        } else {
          this.error = 'Endpoint returned an unsuccessful response code'
        }
        return of({ message: e.message, status_code: e.status });
      }),
    )
  }
}
