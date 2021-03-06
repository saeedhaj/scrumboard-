import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrumboardAppRoutingModule } from './scrumboard-app-routing.module';
import { ScrumboardAppComponent } from './scrumboard-app.component';
import{ScrumboardListModule} from 'src/app/scrumboard-list/scrumboard-list.module'

@NgModule({
  declarations: [ScrumboardAppComponent],
  imports: [
    CommonModule,
    ScrumboardAppRoutingModule,
    ScrumboardListModule 
  ],

  exports: [ScrumboardListModule]

})
export class ScrumboardAppModule { }
