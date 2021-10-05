import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessLogDetailsComponent } from './access-log-details/access-log-details.component';
import { AccessLogListComponent } from './access-log-list/access-log-list.component';

const routes: Routes = [{
  path: '',
  children:[{
    path: '',
    component: AccessLogListComponent,
  },{
    path: ':id',
    component: AccessLogDetailsComponent,
  }]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessLogRoutingModule { }
