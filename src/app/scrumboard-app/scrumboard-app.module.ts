import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrumboardAppRoutingModule } from './scrumboard-app-routing.module';
import { ScrumboardAppComponent } from './scrumboard-app.component';


@NgModule({
  declarations: [ScrumboardAppComponent],
  imports: [
    CommonModule,
    ScrumboardAppRoutingModule
  ]
})
export class ScrumboardAppModule { }
