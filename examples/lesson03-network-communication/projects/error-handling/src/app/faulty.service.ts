import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AstronautResponse } from 'projects/lib-space/src/lib/astronaut-response.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaultyService {

  host = 'http://localhost:3000/faulty/astronauts'

  constructor(private http: HttpClient) { }

  getFaultyAstronauts(): Observable<AstronautResponse> {
    return this.http.get<AstronautResponse>(this.host)
  }
}
