import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientOverviewComponent } from './client-overview/client-overview.component';

const routes: Routes = [{
  path: '',
  component: ClientOverviewComponent
}, {
  path: ':uid',
  component: ClientDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
