import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccessLogService } from '../access-log.service';

@Component({
  selector: 'app-network-log',
  templateUrl: './network-log.component.html',
  styleUrls: ['./network-log.component.scss']
})
export class NetworkLogComponent implements OnInit {

  logs$: Observable<ReadonlyArray<any>>

  constructor(private networkLogService: AccessLogService) {
    this.logs$ = this.networkLogService.getLog()
  }

  ngOnInit(): void { }

}
