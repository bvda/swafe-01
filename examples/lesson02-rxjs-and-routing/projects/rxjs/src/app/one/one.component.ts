import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Billionaire, BILLIONAIRES } from '../billionarie.type';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  billionaire$: Observable<Billionaire>
  billionaires$: Observable<Billionaire[]>

  constructor(private shared: SharedService) { }

  ngOnInit(): void {
    this.billionaire$ = this.shared.getBillionaire()
    this.billionaires$ = this.shared.makeBillionaires(BILLIONAIRES)
  }

}
