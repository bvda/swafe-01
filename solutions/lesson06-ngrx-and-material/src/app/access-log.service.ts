import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccessLogService {

  constructor(private http: HttpClient) { }

  getLog(): Observable<ReadonlyArray<AccessLogEntry>>  {
    return this.http.get<ReadonlyArray<AccessLogEntry>>('./assets/MOCK_ACCESS.json')
  }

  getLogs(pageNumber: number, pageSize: number) {
    return this.getLog().pipe(
      switchMap(data => of({
        data: data.slice(pageNumber * pageSize, pageNumber * pageSize + pageSize),
        total: data.length
      }))
    )
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

export interface AccessLogEntriesPage {
  data: ReadonlyArray<AccessLogEntry>;
  total: number;
}