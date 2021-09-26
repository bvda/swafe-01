import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexContainerComponent } from './flex-container/flex-container.component';
import { FlexItemComponent } from './flex-item/flex-item.component';
import { FlexWrapComponent } from './flex-wrap/flex-wrap.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'container',
  pathMatch: 'full',
}, {
  path: 'container',
  component: FlexContainerComponent,
}, {
  path: 'item',
  component: FlexItemComponent,
}, {
  path: 'wrap',
  component: FlexWrapComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
