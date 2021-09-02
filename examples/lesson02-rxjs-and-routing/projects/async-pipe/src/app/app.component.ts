import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { User } from './user.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data$: Observable<number>
  dataList$: Observable<number[]>
  dataUser$: Observable<User>
  
  constructor(private service: DataService) {
    this.data$ = this.service.getData()
    this.dataList$ = this.service.getList()
    this.dataUser$ = this.service.getObjects()
  }

  ngOnInit() {
    this.data$.subscribe(v => {
      console.debug(v)
    })
  }
}
