import { Component, Inject, OnInit } from '@angular/core';
import { Device, DEVICES } from '../device.type';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  deviceList: Device[] = this.devices;

  constructor(@Inject(DEVICES) private devices) { }

  ngOnInit(): void { }
}
