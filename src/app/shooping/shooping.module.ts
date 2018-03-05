import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoopingRoutingModule } from './shooping-routing.module';
import { AdditemsComponent } from './additems/additems.component';
import { ViewitemsComponent } from './viewitems/viewitems.component';
import { BuyitemsComponent } from './buyitems/buyitems.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms'
import { HttpdataService } from './httpdata.service';
import { ItemdataService } from './itemdata.service';
import { EdititemsComponent } from './edititems/edititems.component';
import { DeliveriesComponent } from './deliveries/deliveries.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule, MatNativeDateModule} from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {CdkTableModule} from '@angular/cdk/table';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  imports: [
    CommonModule,
    ShoopingRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatDialogModule
    
  ],
  providers : [ItemdataService,HttpdataService],
  declarations: [AdditemsComponent, ViewitemsComponent, BuyitemsComponent, EdititemsComponent, DeliveriesComponent]
})
export class ShoopingModule { }
