import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureThreeRoutingModule } from './feature-three-routing.module';
import { OverviewComponent } from './overview/overview.component';


@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    CommonModule,
    FeatureThreeRoutingModule
  ]
})
export class FeatureThreeModule { }
