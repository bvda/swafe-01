import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureOneComponent } from './feature-one/feature-one.component';



@NgModule({
  declarations: [
    FeatureOneComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FeatureOneComponent,
  ]
})
export class FeatureOneModule { }
