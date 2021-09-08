import { Component, OnInit } from '@angular/core';
import { LaunchVehicles } from 'lib-space';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SpaceService } from './space.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  launchVehicles$: Observable<LaunchVehicles[]> | null = null;
  astronauts$: Observable<string[]> | null = null;

  constructor(private spaceService: SpaceService) { }

  ngOnInit() {
    this.launchVehicles$ = this.spaceService.getLaunchVehicles();
    this.astronauts$ = this.spaceService.getAstronauts().pipe(
      map(astronauts => astronauts.map(astronaut => astronaut.name))
    );
  }
}
