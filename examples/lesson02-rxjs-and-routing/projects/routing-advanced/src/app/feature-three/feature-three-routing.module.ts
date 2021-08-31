import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceComponent } from './device/device.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [{
  path: '',
  children: [{
    path:'',
    component: OverviewComponent,
  }, {
    path:'device/:id',
    component: DeviceComponent,
  }
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureThreeRoutingModule { }