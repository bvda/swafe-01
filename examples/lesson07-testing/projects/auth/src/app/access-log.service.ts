import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MOCK_DATA_ACCESS_LOG } from './MOCK_DATA_ACCESS_LOG';

@Injectable({
  providedIn: 'root'
})
export class AccessLogService {

  data = MOCK_DATA_ACCESS_LOG
  data$ = new BehaviorSubject(this.data)

  constructor(private http: HttpClient) { }

  getAppDescriptions(): Observable<ReadonlyArray<AppDescription>> {
    return this.http.get<ReadonlyArray<AppDescription>>('./assets/MOCK_DATA_APP_DESCRIPTION.json')
  }

  getAccessLogEntries(): Observable<ReadonlyArray<AccessLogEntry>> {
    return this.data$
  }

  removeAccessLogEntry(id: string | undefined) {
    this.data = this.data.filter(entry => entry.id !== id)
    return this.data$.next(this.data)
  }
}

export interface AppDescription { 
  id: string;
  bundle: string;
  version: string;
  name: string;
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