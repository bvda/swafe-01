import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HostsComponent } from './hosts/hosts.component';
import { NetworkLogComponent } from './network-log/network-log.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'network-log',
  component: NetworkLogComponent
}, {
  path: 'hosts',
  component: HostsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
