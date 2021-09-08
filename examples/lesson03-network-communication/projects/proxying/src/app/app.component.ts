import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get('/astronauts').subscribe(astronauts => console.log(astronauts))
    this.http.post('/launch_vehicle', {"launch_vehicle": {}}).subscribe(console.log)
  }
}
