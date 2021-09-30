import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [{
  path: 'card',
  component: CardComponent,
}, {
  path: 'table',
  component: TableComponent,
}, {
  path: 'date-picker',
  component: DatePickerComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
