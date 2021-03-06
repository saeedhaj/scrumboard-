import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrumboardAppComponent } from "./scrumboard-app.component";

const routes: Routes = [
  {
    path:'',
    component:ScrumboardAppComponent,
    children:[
      {
        path:'',
        redirectTo:'scrmboard-file'
      },
      {
        path:'scrmboard-file',
        loadChildren:()=>import("./scrumboard-file/scrumboard-file.module").then(m=>m.ScrumboardFileModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScrumboardAppRoutingModule { }
