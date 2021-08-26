import { Component, OnInit } from '@angular/core';
import { MyFirstService } from './my-first.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'services';
  now: string | null = null

  constructor(private service: MyFirstService) { }

  ngOnInit() {
    this.now = this.service.now()
  }
}
