import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Astronaut } from 'lib-space';
import { Observable } from 'rxjs';
import { auth } from '../http-interceptors/auth-token.interceptor';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  rootUrl = `http://localhost:3000/example/auth`  
 
  constructor(private http: HttpClient) { }

  astronauts(): Observable<Astronaut[]> {
    return this.http.get<Astronaut[]>(`${this.rootUrl}/astronauts`, {
      context: auth()
    })
  }
}

