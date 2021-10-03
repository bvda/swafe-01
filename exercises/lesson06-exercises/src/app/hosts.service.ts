import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HostsService {

  constructor(private http: HttpClient) { }

  getHosts(): Observable<ReadonlyArray<Host>> {
    return this.http.get<ReadonlyArray<Host>>('./assets/MOCK_HOSTS.json')
  }
}

export interface Host {
  id: string;
  mac_address: string;
  version: string;
  ip_address_cidr: string;
  name: string;
}