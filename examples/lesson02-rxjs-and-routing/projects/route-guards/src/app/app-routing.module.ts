import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { RestrictedComponent } from './restricted/restricted.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  children: [{
    path: '',
    component: PublicComponent
  }, {
    path: '',
    component: RestrictedComponent,
    outlet: 'authed'
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
