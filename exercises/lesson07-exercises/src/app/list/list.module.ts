import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list.component';
import { ItemComponent } from './item/item.component';
import { FilterComponent } from './filter/filter.component';
import { ListRoutingModule } from './list-routing.module';

@NgModule({
  declarations: [
    ListComponent,
    ItemComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ListRoutingModule,
  ]
})
export class ListModule { }
