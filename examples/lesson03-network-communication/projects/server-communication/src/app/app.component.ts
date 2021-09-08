import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Astronaut } from 'lib-space';
import { LaunchVehicles } from 'lib-space';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  astronauts$: Observable<Astronaut[]> | null = null
  launchVehicles$: Observable<LaunchVehicles[]> | null = null
  baseUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.astronauts$ = this.http.get<Astronaut[]>(`${this.baseUrl}/astronauts`)
    this.launchVehicles$ = this.http.get<LaunchVehicles[]>(`${this.baseUrl}/launch_vehicles`)
  }
}
