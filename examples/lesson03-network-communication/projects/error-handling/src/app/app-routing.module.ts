import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatchErrorComponent } from './catch-error/catch-error.component';
import { RetryWhenComponent } from './retry-when/retry-when.component';
import { RetryComponent } from './retry/retry.component';

const routes: Routes = [{
  path: 'catchError',
  component: CatchErrorComponent,
}, {
  path: 'retry',
  component: RetryComponent,
}, { 
  path: 'retryWhen',
  component: RetryWhenComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
