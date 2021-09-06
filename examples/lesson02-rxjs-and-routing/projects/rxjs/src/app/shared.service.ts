import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Billionaire } from './billionarie.type';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  data$: BehaviorSubject<Billionaire | null> = new BehaviorSubject(null)
  
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
