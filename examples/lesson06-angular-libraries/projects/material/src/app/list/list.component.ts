import { Component } from '@angular/core';
import { MockService } from '../mock.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  mockData$

  constructor(private mockService: MockService) {
    this.mockData$ = this.mockService.getMockData()
   }
}
