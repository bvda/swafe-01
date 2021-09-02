import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Device, DEVICES } from '../device.type';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  device: Device

  constructor(@Inject(DEVICES) private devices, private activatedRoute: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.device = this.devices[this.activatedRoute.snapshot.paramMap.get('id')]
  }

}
