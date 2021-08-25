import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeComponent } from './attribute/attribute.component';
import { HoverDirective } from './hover.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AttributeComponent,
    HoverDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    AttributeComponent,
  ]
})
export class AttributeModule { }
