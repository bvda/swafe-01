import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { FormsComponent } from './forms/forms.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'card'
}, {
  path: 'card',
  component: CardsComponent
}, {
  path: 'form',
  component: FormsComponent
}, {
  path: 'list',
  component: ListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
