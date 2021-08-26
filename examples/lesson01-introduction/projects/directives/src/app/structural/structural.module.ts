import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralComponent } from './structural/structural.component';



@NgModule({
  declarations: [
    StructuralComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    StructuralComponent,
  ]
})
export class StructuralModule { }
