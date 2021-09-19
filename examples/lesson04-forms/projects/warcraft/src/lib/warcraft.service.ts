import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Class, CLASSES } from './class.type';
import { Race, RACES_ALLIANCE, RACES_HORDE } from './race.type';

@Injectable({
  providedIn: 'root'
})
export class WarcraftService {

  constructor() { }

  getClasses(): Observable<Array<Class>> {
    return of(CLASSES)
  }

  getAllianceRaces(): Observable<Array<Race>> {
    return of(RACES_ALLIANCE)
  }

  getHordeRaces(): Observable<Array<Race>> {
    return of(RACES_HORDE)
  }
}
