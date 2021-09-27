import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { NamedAreasComponent } from './named-areas/named-areas.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'grid'
}, {
  path: 'grid',
  component: GridComponent,
}, {
 path: 'named-areas',
 component: NamedAreasComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
