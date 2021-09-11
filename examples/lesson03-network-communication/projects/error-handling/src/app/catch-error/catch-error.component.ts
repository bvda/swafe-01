import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Astronaut } from 'lib-space';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FaultyService } from '../faulty.service';
import { SpaceError } from '../space-error.type';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.scss']
})
export class CatchErrorComponent implements OnInit {
  observable$: Observable<Astronaut[] | SpaceError> | null = null
  error = ''

  constructor(private faultyService: FaultyService) { }

  ngOnInit(): void {
    this.observable$ =this.faultyService.getFaultyAstronauts().pipe(
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
