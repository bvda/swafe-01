import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { DeviceService } from '../device.service';
import { AppState } from '../state/app.state';
import { addDevice, removeDevice, retrievedList } from '../state/device.actions';
import { selectDeviceCollection, selectDevices } from '../state/device.selector';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {

  devices$ = this.store.pipe(select(selectDevices))
  deviceCollection$ = this.store.pipe(select(selectDeviceCollection));

  constructor(private deviceService: DeviceService, private store: Store<AppState>) { 
}

  ngOnInit(): void {
    this.deviceService.getDevices().subscribe(devices => this.store.dispatch(retrievedList({ devices })))
  }

  addDevice(deviceId: string) {
    this.store.dispatch(addDevice({ deviceId}))
  }

  removeDevice(deviceId: string) {
    this.store.dispatch(removeDevice({ deviceId }))
  }
}
