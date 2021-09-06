import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnotherPublicComponent } from './another-public/another-public.component';
import { AuthGuard } from './auth.guard';
import { PublicComponent } from './public/public.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  children: [{
    path: '',
    component: PublicComponent
  }, {
    path: '',
    component: AnotherPublicComponent,
    outlet: 'another'
  }]
}, {
  path: 'restricted',
  loadChildren: () => import('./restricted/restricted.module').then(m => m.RestrictedModule),
  canLoad: [AuthGuard],
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
