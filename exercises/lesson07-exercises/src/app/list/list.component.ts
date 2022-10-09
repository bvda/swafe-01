import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Car, CarService } from '../car.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  cars$: Observable<ReadonlyArray<Car>>

  constructor(private carService: CarService) { 
    this.cars$ = this.carService.getCars()
  }

  ngOnInit(): void { }

  remove(id: string) {
    this.carService.remove(id)
  }
}
