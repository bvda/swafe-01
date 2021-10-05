import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
},{
  path: 'access-log',
  loadChildren: () => import('./access-log/access-log.module').then(m => m.AccessLogModule),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
