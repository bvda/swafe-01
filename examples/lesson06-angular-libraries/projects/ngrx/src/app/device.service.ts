import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Device } from './state/device.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor() { }

  getDevices(): Observable<Device[]> {
    return of([{
      name: 'Nexus 6P',
      manufacturer: 'Huawei'
    }, {
      name:'iPhone 6',
      manufacturer: 'Apple'
    }, {
      name: 'Moto G3',
      manufacturer: 'Motorola'
    }, {
      name: 'Moto G5',
      manufacturer: 'Motorola'
    }, {
      name: 'Pixel 1',
      manufacturer: 'Google'
    }, {
      name: 'Nexus 5X',
      manufacturer: 'LG'
    }])
  }
}
