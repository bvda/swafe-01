import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Host } from '../hosts.service';
import { AppState } from '../state/app-state';
import { loadHosts } from '../state/hosts.actions';

@Component({
  selector: 'app-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.scss']
})
export class HostsComponent implements OnInit {

  hosts$: Observable<ReadonlyArray<Host>> = this.store.select('hosts');

  constructor(private store: Store<AppState>) {  }

  ngOnInit(): void {
    this.store.dispatch(loadHosts())
  }
}
