import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureThreeModule } from '../feature-three/feature-three.module';
import { FeatureTwoComponent } from './feature-two/feature-two.component';



@NgModule({
  declarations: [
    FeatureTwoComponent
  ],
  imports: [
    CommonModule,
    FeatureThreeModule,
  ],
  exports: [
    FeatureTwoComponent
  ]
})
export class FeatureTwoModule { }
