import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { FeatureTwoRoutingModule } from './feature-two-routing.module';

@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    CommonModule,
    FeatureTwoRoutingModule,
  ]
})
export class FeatureTwoModule { }
