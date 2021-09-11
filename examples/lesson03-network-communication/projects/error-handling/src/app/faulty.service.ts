import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Astronaut } from 'lib-space';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaultyService {

  host = 'http://localhost:3000/faulty/astronauts'

  constructor(private http: HttpClient) { }

  getFaultyAstronauts(): Observable<Astronaut[]> {
    return this.http.get<Astronaut[]>(this.host)
  }
}
