import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrumboardListComponent } from "./scrumboard-list.component";

const routes: Routes = [
  {
    path:'',
    component:ScrumboardListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScrumboardListRoutingModule { }
