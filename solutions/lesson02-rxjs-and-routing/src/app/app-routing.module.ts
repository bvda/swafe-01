import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: '**',
  loadComponent: () => import('./page-not-found/page-not-found.component').then(c => c.PageNotFoundComponent)
}, {
  path: '',
  loadChildren: () => import('./user/user.module').then(m => m.UserModule) 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
