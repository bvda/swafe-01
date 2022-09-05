import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'user',
  loadChildren: () => import('./user/user.module').then(m => m.UserModule) 
}, {
  path: '**',
  loadComponent: () => import('./page-not-found/page-not-found.component').then(c => c.PageNotFoundComponent)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
