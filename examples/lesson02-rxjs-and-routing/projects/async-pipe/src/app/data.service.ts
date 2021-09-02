import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators'
import { User, USERS } from './user.type';

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
      switchMap(_ => of(this.list))
    )
  }

  getObjects(): Observable<User> {
    return interval(1000).pipe(
      switchMap(_ => of(USERS[Math.floor(Math.random() * USERS.length)])),
    )
  }
}

