import { Component, OnInit } from '@angular/core';
import { Astronaut } from 'lib-space';
import { Observable, throwError, timer } from 'rxjs';
import { catchError, delayWhen, retryWhen } from 'rxjs/operators';
import { FaultyCall } from '../faulty-call.type';
import { FaultyService } from '../faulty.service';
import { SpaceError } from '../space-error.type';

@Component({
  selector: 'app-retry-when',
  templateUrl: './retry-when.component.html',
  styleUrls: ['./retry-when.component.scss']
})
export class RetryWhenComponent implements OnInit {

  observable$: Observable<Astronaut[] | SpaceError> | null = null
  faults: FaultyCall[] = []

  constructor(private faultyService: FaultyService) { }

  ngOnInit(): void {
    this.observable$ = this.faultyService.getFaultyAstronauts().pipe(
      catchError(e => {
        this.faults.push({
          date: Date.now(), 
          message: e.message
        })
        return throwError(e)
      }),
      retryWhen(e => e.pipe(
          delayWhen(_ => timer(3000))
        )
      )
    )
  }
}
