import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrumboardListRoutingModule } from './scrumboard-list-routing.module';
import { ScrumboardListComponent } from './scrumboard-list.component';

import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
const MATERIAL_MODULES = [
  
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatSnackBarModule,
  MatCardModule,
  MatDialogModule
];


@NgModule({
  declarations: [ScrumboardListComponent],
  imports: [
    CommonModule,
    ScrumboardListRoutingModule,
    FlexLayoutModule,
    ...MATERIAL_MODULES,


  ],
})
export class ScrumboardListModule { }
