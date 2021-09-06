import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Billionaire } from '../billionarie.type';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.scss']
})
export class AnotherComponent implements OnInit {

  billionaire$: Observable<Billionaire>

  constructor(private shared: SharedService) { }

  ngOnInit(): void {
    this.billionaire$ = this.shared.getBillionaire()
  }

}
