import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NetworkLogService } from '../network-log.service';

@Component({
  selector: 'app-network-log',
  templateUrl: './network-log.component.html',
  styleUrls: ['./network-log.component.scss']
})
export class NetworkLogComponent implements OnInit {

  logs$: Observable<ReadonlyArray<any>>

  constructor(private networkLogService: NetworkLogService) {
    this.logs$ = this.networkLogService.getLog()
  }

  ngOnInit(): void {
  }

}
