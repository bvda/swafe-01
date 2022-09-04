import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, ReplaySubject } from 'rxjs';
import { Billionaire } from './billionarie.type';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  data$: ReplaySubject<Billionaire> = new ReplaySubject()
  
  getBillionaire(): Observable<Billionaire> {
    return this.data$
  }

  pushBillionaire(billionaire: Billionaire) {
    this.data$.next(billionaire)
  }

  makeBillionaires(billionaires: Billionaire[]): Observable<Billionaire[]> {
    return of(billionaires)
  }
}
