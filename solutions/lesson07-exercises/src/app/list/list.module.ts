import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ItemComponent } from './item/item.component';
import { FilterComponent } from './filter/filter.component';
import { ListRoutingModule } from './list-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListComponent,
    ItemComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ListModule { }
