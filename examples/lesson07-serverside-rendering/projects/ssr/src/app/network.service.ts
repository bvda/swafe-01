import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private http: HttpClient) { }

  getCoins(): Observable<any> {
    return this.http.get('https://api.coinpaprika.com/v1/coins')
  }
}
