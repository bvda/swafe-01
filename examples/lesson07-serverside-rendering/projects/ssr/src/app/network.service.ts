import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private http: HttpClient) { }

  getCoins(): Observable<ReadonlyArray<Coin>> {
    return this.http.get<ReadonlyArray<Coin>>('https://api.coinpaprika.com/v1/coins')
  }
}

export interface Coin {
  id: string, 
  name: string,
  symbol: string, 
  rank: number, 
  is_new: boolean, 
  is_active: boolean, type: String
}