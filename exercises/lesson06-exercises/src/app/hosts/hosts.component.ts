import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HostsService, Host } from '../hosts.service';

@Component({
  selector: 'app-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.scss']
})
export class HostsComponent {

  hosts$: Observable<ReadonlyArray<Host>>;

  constructor(private hosts: HostsService) { 
    this.hosts$ = this.hosts.getHosts()
  }
}
