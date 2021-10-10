import { Injectable } from '@angular/core';
import { BehaviorSubject, from, of } from 'rxjs';
import { distinct, switchMap, tap } from 'rxjs/operators'
import { DATA } from './MOCK_DATA'

@Injectable({
  providedIn: 'root'
})
export class CarService {

  data = DATA
  data$ = new BehaviorSubject(this.data)
  
  constructor() { }

  getCars() {
    return this.data$
  }

  clear() {
    this.data$.next(DATA)
  }

  getCarsByMake(make: string) {
    this.data$.next(DATA.filter(c => c.make.toLowerCase() === make.toLowerCase()) as ReadonlyArray<Car>)
  }

  getAllCars() {
    return this.getCars().pipe(
      switchMap(v => from(v)),
      distinct(v => v.make)
    )
  }
}

export interface Car {
  id: string
  model: string
  make: string
  year: number
  vin: String
}