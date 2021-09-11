import { Component, OnInit } from '@angular/core';
import { Astronaut } from 'lib-space';
import { Observable } from 'rxjs';
import { SpaceError } from '../space-error.type';

@Component({
  selector: 'app-retry-when',
  templateUrl: './retry-when.component.html',
  styleUrls: ['./retry-when.component.scss']
})
export class RetryWhenComponent implements OnInit {

  observable$: Observable<Astronaut[] | SpaceError> | null = null

  constructor() { }

  ngOnInit(): void {
  }

}
