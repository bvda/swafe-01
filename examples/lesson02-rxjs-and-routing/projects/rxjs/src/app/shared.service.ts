import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  data$: BehaviorSubject<Billionaire | null> = new BehaviorSubject(null)

  constructor() { }
  
  getBillionaires(): Observable<Billionaire> {
    return this.data$
  }
}

export class Billionaire {
  name: string;
  net_worth: number;
  nationality: string;
}