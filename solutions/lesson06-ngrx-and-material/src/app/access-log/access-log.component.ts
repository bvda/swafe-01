import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccessLogService } from '../access-log.service';

@Component({
  selector: 'app-access-log',
  templateUrl: './access-log.component.html',
  styleUrls: ['./access-log.component.scss']
})
export class AccessLogComponent implements OnInit {

  logs$: Observable<ReadonlyArray<any>>
  displayedColumns: string[] = ['id', 'ip_address.v4', 'ip_address.v6'];

  constructor(private accessLogService: AccessLogService) {
    this.logs$ = this.accessLogService.getLog()
  }

  ngOnInit(): void { }

}
