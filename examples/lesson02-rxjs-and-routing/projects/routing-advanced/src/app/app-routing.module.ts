import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'one',
  loadChildren: () => import('./feature-one/feature-one.module').then(m => m.FeatureOneModule),
}, {
  path: 'two',
  loadChildren: () => import('./feature-two/feature-two.module').then(m => m.FeatureTwoModule),
}, {
  path: 'three',
  loadChildren: () => import('./feature-three/feature-three.module').then(m => m.FeatureThreeModule),
}, { 
  path: '**', 
  component: PageNotFoundComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
