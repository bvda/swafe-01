import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { addDevice, loadDevices, removeDevice } from '../state/device.actions';
import { selectDeviceCollection, selectDevices } from '../state/device.selector';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {

  devices$ = this.store.pipe(select(selectDevices))
  deviceCollection$ = this.store.pipe(select(selectDeviceCollection));

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadDevices())
  }

  addDevice(deviceId: string) {
    this.store.dispatch(addDevice({ deviceId}))
  }

  removeDevice(deviceId: string) {
    this.store.dispatch(removeDevice({ deviceId }))
  }
}
