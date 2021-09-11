import { Component, OnInit } from '@angular/core';
import { Astronaut } from 'lib-space';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { FaultyCall } from '../faulty-call.type';
import { FaultyService } from '../faulty.service';
import { SpaceError } from '../space-error.type';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {

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
      retry()
    )
  }

}
