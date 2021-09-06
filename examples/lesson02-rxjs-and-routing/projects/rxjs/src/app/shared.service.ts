import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

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
}

export class Billionaire {
  name: string;
  net_worth: number;
  nationality: string;
}