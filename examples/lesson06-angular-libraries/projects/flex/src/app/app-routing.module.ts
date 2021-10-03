import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BreakpointComponent } from "./breakpoint/breakpoint.component";
import { FlexComponent } from "./flex/flex.component";

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'flex'
}, {
  path: 'flex',
  component: FlexComponent
}, {
  path: 'breakpoint',
  component: BreakpointComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
