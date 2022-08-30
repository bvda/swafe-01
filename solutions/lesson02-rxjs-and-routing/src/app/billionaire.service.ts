import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillionaireService {
  
  getBillionaires(): Observable<Billionaire[]> {
    return of(this.billionaires)
  }

  getBillionaire(uid: number): Observable<Billionaire> {
    return of(this.billionaires[uid])
  }
  
  billionaires: Billionaire[] = [{ 
    name: 'Bill Gates',
    net_worth: 133200000000,
    nationality: 'US',
  }, {
    name: 'Jeff Bezos',
    net_worth: 200100000000,
    nationality: 'US',
  }, {
    name: 'Elon Musk',
    net_worth: 190700000000,
    nationality: 'US',
  }, {
    name: 'Mark Zuckerberg',
    net_worth: 135200000000,
    nationality: 'US',
  }]
}

export interface Billionaire {
  name: string;
  net_worth: number;
  nationality: string;
}