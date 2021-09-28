import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Device } from './state1/device.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor() { }

  getDevices(): Observable<Device[]> {
    return of([{
      name: 'Nexus 6P',
      manufacturer: 'Google'
    }, {
      name:'iPhone 6',
      manufacturer: 'Apple'
    }])
  }
}
