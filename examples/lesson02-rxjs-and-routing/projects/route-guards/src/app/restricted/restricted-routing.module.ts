import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestrictedComponent } from './restricted.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  children: [{
    path: '',
    component: RestrictedComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestrictedRoutingModule { }
