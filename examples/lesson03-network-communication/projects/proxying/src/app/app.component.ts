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
    this.http.get('example/api/astronauts').subscribe(astronauts => console.log(astronauts))
    this.http.post('example/api/launch_vehicle', {"launch_vehicle": {}}).subscribe(console.log)
    this.http.delete('example/api/astronauts').subscribe(console.log)
    
    this.http.get('http://localhost:3000/example/cors/astronauts').subscribe(console.log)
    this.http.delete('http://localhost:3000/example/cors/astronauts').subscribe(console.log)
    this.http.patch('http://localhost:3000/example/cors/astronauts', {}).subscribe(console.log)
  }
}
