import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrumboardListRoutingModule } from './scrumboard-list-routing.module';
import { ScrumboardListComponent } from './scrumboard-list.component';


@NgModule({
  declarations: [ScrumboardListComponent],
  imports: [
    CommonModule,
    ScrumboardListRoutingModule
  ],
  exports: [ScrumboardListComponent]
})
export class ScrumboardListModule { }
