import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  list: number[] = []

  getData(): Observable<number> {
    return interval(1000)
  }

  getList(): Observable<number[]> {
    return this.getData().pipe(
      tap(value => this.list.push(value)),
      switchMap(v => of(this.list))
    )
  }
}
