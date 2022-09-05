import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Billionaire, BillionaireService } from 'src/app/billionaire.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  billionaires$!: Observable<Billionaire[]>

  constructor(private service: BillionaireService) { 
  }
  
  ngOnInit(): void {
    this.billionaires$ = this.service.getBillionaires()
  }

}
