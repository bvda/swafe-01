import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { RestrictedComponent } from './restricted.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  canActivate: [AuthGuard],
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
