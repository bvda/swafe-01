import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Device, DEVICES } from '../device.type';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  device: Device
  paramMap$: Observable<ParamMap>

  constructor(@Inject(DEVICES) private devices, private activatedRoute: ActivatedRoute) { 
    this.paramMap$ = this.activatedRoute.paramMap.pipe(
      tap(route => console.log(route))
    )
  }

  ngOnInit(): void {
    this.device = this.devices[this.activatedRoute.snapshot.paramMap.get('id')]
  }
}
