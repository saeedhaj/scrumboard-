import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrumboardFileComponent } from "./scrumboard-file.component";

const routes: Routes = [
  {
    path:'',
    component:ScrumboardFileComponent,
    children:[
      {
        path:'',
        redirectTo:'scrumboard-list'
      },
      {
        path:'scrumboard-list',
        loadChildren:()=>import("./scrumboard-list/scrumboard-list.module").then(m=>m.ScrumboardListModule)
      },
      {
        path:'scrumboard-add',
        loadChildren:()=>import("./scrumboard-add/scrumboard-add.module").then(m=>m.ScrumboardAddModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScrumboardFileRoutingModule { }
