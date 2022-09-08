import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientOverviewComponent } from './client-overview/client-overview.component';
import { ClientDetailsComponent } from './client-details/client-details.component';


@NgModule({
  declarations: [
    ClientOverviewComponent,
    ClientDetailsComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ],
  exports: [
    ClientOverviewComponent,
    ClientDetailsComponent
  ]
})
export class ClientModule { }
