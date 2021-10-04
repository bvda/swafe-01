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

  constructor(private accessLogService: AccessLogService) {
    this.logs$ = this.accessLogService.getLog()
  }

  ngOnInit(): void { }

}
