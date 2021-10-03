import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessLogService {

  constructor(private http: HttpClient) { }

  getLog(): Observable<ReadonlyArray<any>>  {
    return this.http.get<ReadonlyArray<any>>('./assets/MOCK_ACCESS.json')
  }

}

export interface AccessLogEntry {
  id: string;
  mac_address: string;
  ip_address: {
    v4: string;
    v6: string;
  }
  user_agent: string;
}