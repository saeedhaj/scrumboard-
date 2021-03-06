import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrumboardFileRoutingModule } from './scrumboard-file-routing.module';
import { ScrumboardFileComponent } from './scrumboard-file.component';


@NgModule({
  declarations: [ScrumboardFileComponent],
  imports: [
    CommonModule,
    ScrumboardFileRoutingModule
  ]
})
export class ScrumboardFileModule { }
