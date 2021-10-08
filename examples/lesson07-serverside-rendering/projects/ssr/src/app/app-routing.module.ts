import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
}, {
  path: 'list',
  component: ListComponent,
}, {
  path: 'about',
  component: AboutComponent,
}, {
  path: 'details/:id',
  component: DetailsComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
