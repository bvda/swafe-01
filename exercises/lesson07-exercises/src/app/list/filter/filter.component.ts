import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CarService } from 'src/app/car.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  
  selectMakeForm = this.fb.group({
    make: ['']
  })

  cars: string[] = []
  
  constructor(private carService: CarService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.carService.getAllCars().subscribe(c => this.cars.push(c.make))
  }

  makeSelected(a: any) {
    this.carService.getCarsByMake(a.target.value)
  }

  clear() {
    this.selectMakeForm.reset()
    this.carService.clear()
  }

}
