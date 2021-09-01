import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  list: number[] = []

  users: User[] = [{
    name: 'Elon Musk',
    company: 'Tesla'
  }, {
    name: 'Bill Gates',
    company: 'Microsoft'
  }, {
    name: 'Jeff Bezos',
    company: 'Amazon'
  }]

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
      switchMap(_ => of(this.users[Math.floor(Math.random() * this.users.length)])),
    )
  }
}

export interface User {
  name: string;
  company: string;
}