import { Component, OnInit } from '@angular/core';
import { Astronaut } from 'lib-space';
import { Observable } from 'rxjs';
import { SpaceError } from '../space-error.type';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {

  observable$: Observable<Astronaut[] | SpaceError> | null = null

  constructor() { }

  ngOnInit(): void {
  }

}
