import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrumboardAddComponent } from "./scrumboard-add.component";

const routes: Routes = [
  {
    path:'',
    component:ScrumboardAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScrumboardAddRoutingModule { }
