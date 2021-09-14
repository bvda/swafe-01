import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Class, CLASSES } from './class.type';

@Injectable({
  providedIn: 'root'
})
export class WarcraftService {

  constructor() { }

  getClasses(): Observable<Array<Class>> {
    return of(CLASSES)
  }
}
