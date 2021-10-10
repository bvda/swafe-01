import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/car.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  cars: string[] = []
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getAllCars().subscribe(c => this.cars.push(c.make))
  }

  makeSelected(a: any) {
    this.carService.getCarsByMake(a.target.value)
  }

  clear() {
    this.carService.clear()
  }

}
