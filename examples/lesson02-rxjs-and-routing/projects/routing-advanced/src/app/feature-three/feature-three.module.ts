import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureThreeRoutingModule } from './feature-three-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { DeviceComponent } from './device/device.component';


@NgModule({
  declarations: [
    OverviewComponent,
    DeviceComponent
  ],
  imports: [
    CommonModule,
    FeatureThreeRoutingModule
  ]
})
export class FeatureThreeModule { }
