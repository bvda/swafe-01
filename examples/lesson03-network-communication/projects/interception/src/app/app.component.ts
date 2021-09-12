import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpaceService } from './service/space.service';
import { Astronaut } from 'lib-space';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  token$: Observable<string> | null = null;
  astronauts$: Observable<Astronaut[]> | null = null;
  
  constructor(private spaceService: SpaceService) { }

  ngOnInit() { 
    this.astronauts$ = this.spaceService.astronauts()
  } 
}
