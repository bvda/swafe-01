import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, Observable, switchMap } from 'rxjs';
import { Billionaire, BillionaireService } from 'src/app/billionaire.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  billionaire$!: Observable<Billionaire | unknown>

  constructor(private service: BillionaireService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    try {
      this.billionaire$ = this.activatedRoute.paramMap.pipe(switchMap(c => {
          return this.service.getBillionaire(c.get('id') ?? "");
        }),
        catchError((c) => c))
    } catch (e: any) {
      console.log(e)
    }
  }

}
