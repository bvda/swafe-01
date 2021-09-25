import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexContainerComponent } from './flex-container/flex-container.component';
import { FlexItemComponent } from './flex-item/flex-item.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'container',
  pathMatch: 'full',
}, {
  path: 'container',
  component: FlexContainerComponent
}, {
  path: 'item',
  component: FlexItemComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
