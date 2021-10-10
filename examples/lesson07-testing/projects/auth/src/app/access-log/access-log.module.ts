import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessLogListComponent } from './access-log-list/access-log-list.component';
import { AccessLogListItemComponent } from './access-log-list-item/access-log-list-item.component';
import { AccessLogRoutingModule } from './access-log-routing.module';
import { AccessLogDetailsComponent } from './access-log-details/access-log-details.component';



@NgModule({
  declarations: [
    AccessLogListComponent,
    AccessLogListItemComponent,
    AccessLogDetailsComponent
  ],
  imports: [
    CommonModule,
    AccessLogRoutingModule,
  ]
})
export class AccessLogModule { }
