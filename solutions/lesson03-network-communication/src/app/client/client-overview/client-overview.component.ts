import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/client';
import { ClientService } from 'src/app/client.service';

@Component({
  selector: 'app-client-overview',
  templateUrl: './client-overview.component.html',
  styleUrls: ['./client-overview.component.scss']
})
export class ClientOverviewComponent implements OnInit {

  clients$!: Observable<Client[]>
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clients$ = this.clientService.getClients()
  }

}
