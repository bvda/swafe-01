import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { FeatureOneRoutingModule } from './feature-one-routing.module';

@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    CommonModule,
    FeatureOneRoutingModule,
  ]
})
export class FeatureOneModule { }
