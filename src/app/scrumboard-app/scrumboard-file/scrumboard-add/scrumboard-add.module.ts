import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrumboardAddRoutingModule } from './scrumboard-add-routing.module';
import { ScrumboardAddComponent } from './scrumboard-add.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from "@angular/forms";




const MATERIAL_MODULES = [
  MatFormFieldModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatSnackBarModule,
  MatCardModule,
  MatDialogModule,
  MatToolbarModule
];

@NgModule({
  declarations: [ScrumboardAddComponent],
  imports: [
    CommonModule,
    ScrumboardAddRoutingModule,
    FlexLayoutModule,
    ...MATERIAL_MODULES,
    FormsModule
  ],
})
export class ScrumboardAddModule { }
