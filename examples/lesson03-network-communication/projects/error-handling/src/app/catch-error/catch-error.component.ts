import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AstronautResponse } from 'projects/lib-space/src/lib/astronaut-response.type';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FaultyService } from '../faulty.service';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.scss']
})
export class CatchErrorComponent implements OnInit {
  observable$: Observable<AstronautResponse> | null = null
  error = ''

  constructor(private faultyService: FaultyService) { }

  ngOnInit(): void {
    this.observable$ = this.faultyService.getFaultyAstronauts().pipe(
      catchError((e: HttpErrorResponse) => {
        console.error(e.message)
        if(e.status === 0) {
          this.error = 'Client-side or network error'
        } else {
          this.error = 'Endpoint returned an unsuccessful response code'
        }
        return of({
          error: {
          message: e.message,
          status_code: e.status
        }})
      }),
    )
  }
}
