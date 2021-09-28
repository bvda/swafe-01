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
      manufacturer: 'Google'
    }, {
      name:'iPhone 6',
      manufacturer: 'Apple'
    }])
  }
}
