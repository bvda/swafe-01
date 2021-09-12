import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Astronaut, LaunchVehicles } from 'lib-space';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {
  rootUrl = `http://${environment.api.space.host}:${environment.api.space.port}`

  constructor(private http: HttpClient) { }

  getAstronauts(): Observable<Astronaut[]> {
    return this.http.get<Astronaut[]>(`${this.rootUrl}/astronauts`)
  }

  getLaunchVehicles(): Observable<LaunchVehicles[]> {
    return this.http.get<LaunchVehicles[]>(`${this.rootUrl}/launch_vehicles`)
  }
}
