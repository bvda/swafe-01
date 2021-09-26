import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationsComponent } from './animations/animations.component';
import { TransitionsComponent } from './transitions/transitions.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'animations',
}, {
  path: 'animations',
  component: AnimationsComponent,
}, {
  path: 'transitions',
  component: TransitionsComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
