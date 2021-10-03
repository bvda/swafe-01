import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkLogService {

  constructor(private http: HttpClient) { }

  getLog(): Observable<ReadonlyArray<any>>  {
    return this.http.get<ReadonlyArray<any>>('./assets/MOCK_ACCESS.json')
  }

}
