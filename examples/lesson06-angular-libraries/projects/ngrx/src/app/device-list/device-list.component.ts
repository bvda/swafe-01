import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { DeviceService } from '../device.service';
import { AppState } from '../state1/app.state';
import { addDevice, removeDevice, retrievedList } from '../state1/device.actions';
import { selectDevices } from '../state1/device.selector';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {

  devices$ = this.store.pipe(select(selectDevices))

  constructor(private deviceService: DeviceService, private store: Store<AppState>) { 
}

  ngOnInit(): void {
    this.deviceService.getDevices().subscribe(devices => this.store.dispatch(retrievedList({ devices })))
  }

  addDevice() {
    this.store.dispatch(addDevice({
      device: {
        name: 'Pixel 3'
      }
    }))
  }

  removeDevice(deviceId: string) {
    this.store.dispatch(removeDevice({
      deviceId 
    }))
  }
}
