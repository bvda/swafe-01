import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HostsComponent } from './hosts/hosts.component';
import { AccessLogComponent } from './access-log/access-log.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'access-log',
  component: AccessLogComponent
}, {
  path: 'hosts',
  component: HostsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
