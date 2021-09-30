import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breakpoint',
  templateUrl: './breakpoint.component.html',
  styleUrls: ['./breakpoint.component.scss']
})
export class BreakpointComponent implements OnInit {

  hasStyle = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
