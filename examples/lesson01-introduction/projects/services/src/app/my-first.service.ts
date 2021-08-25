import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {

  constructor() { }

  now(): string {
    return new Date(Date.now()).toISOString()
  }
}
