import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccessLogEntry, AccessLogService } from '../../access-log.service';

@Component({
  selector: 'app-access-log-list',
  templateUrl: './access-log-list.component.html',
  styleUrls: ['./access-log-list.component.scss']
})
export class AccessLogListComponent implements OnInit {

  accessLogEntries$: Observable<ReadonlyArray<AccessLogEntry>>

  constructor(private accessLogService: AccessLogService) { 
    this.accessLogEntries$ = this.accessLogService.getAccessLogEntries()
  }

  ngOnInit(): void {
  }

  removeEntry(id: string | undefined) {
    this.accessLogService.removeAccessLogEntry(id)
  }

}
