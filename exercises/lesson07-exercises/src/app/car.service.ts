import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { distinct, switchMap } from 'rxjs/operators'
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

  remove(uid: string) {
    this.data = this.data.filter(car => car.id !== uid)
    return this.data$.next(this.data)
  }
}

export interface Car {
  id: string
  model: string
  make: string
  year: number
  vin: String
}
