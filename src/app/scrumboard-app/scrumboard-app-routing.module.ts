import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrumboardAppComponent } from "./scrumboard-app.component";

const routes: Routes = [
  {
    path:'',
    component:ScrumboardAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScrumboardAppRoutingModule { }
