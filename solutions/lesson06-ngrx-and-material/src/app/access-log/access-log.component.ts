import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { startWith, switchMap, tap } from 'rxjs/operators';
import { AccessLogService } from '../access-log.service';

@Component({
  selector: 'app-access-log',
  templateUrl: './access-log.component.html',
  styleUrls: ['./access-log.component.scss']
})
export class AccessLogComponent implements OnInit, AfterViewInit {

  logs$: Observable<ReadonlyArray<any>>
  data: any = []
  length = 0;
  
  displayedColumns: string[] = ['id', 'ip_address.v4', 'ip_address.v6'];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator

  constructor(private accessLogService: AccessLogService) {
    this.logs$ = this.accessLogService.getLog()
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
      this.paginator.page.pipe(
        startWith({}),
        switchMap(_ => { 
          console.log(this.paginator.pageIndex, this.paginator.pageSize)
          return this.accessLogService.getLogs(this.paginator.pageIndex, this.paginator.pageSize)
      }),
      tap(data => {
        this.length = data.total
      })).subscribe(data => (this.data = data.data))
  }

}
