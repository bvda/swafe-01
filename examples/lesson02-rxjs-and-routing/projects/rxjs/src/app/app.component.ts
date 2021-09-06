import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { SharedService } from './shared.service';
import { BILLIONAIRES } from './billionarie.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private data: SharedService) { }

  ngOnInit() {
    interval(1000).pipe(
      take(BILLIONAIRES.length),
      tap(count => this.data.pushBillionaire(BILLIONAIRES[count]),
      )
    ).subscribe()
  }


}
