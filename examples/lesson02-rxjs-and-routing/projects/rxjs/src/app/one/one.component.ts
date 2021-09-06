import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Billionaire, SharedService } from '../shared.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  billionaire$: Observable<Billionaire>

  constructor(private shared: SharedService) { }

  ngOnInit(): void {
    this.billionaire$ = this.shared.getBillionaire()
  }

}
