import { Component, OnInit } from '@angular/core';
import { MockService } from '../mock.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  mockData$
  
  constructor(private mockService: MockService) {
    this.mockData$ = this.mockService.getMockData()
   }

  ngOnInit(): void {
  }

}
