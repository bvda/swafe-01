import { Component, OnInit } from '@angular/core';
import { AstronautResponse } from 'projects/lib-space/src/lib/astronaut-response.type';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { FaultyCall } from '../faulty-call.type';
import { FaultyService } from '../faulty.service';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {

  observable$: Observable<AstronautResponse> | null = null
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
