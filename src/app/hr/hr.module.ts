import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { FormsModule } from '@angular/forms';
import { ItemdataService } from '../shooping/itemdata.service';
import { RoleguardService } from '../roleguard.service';

import { TutlistcompoComponent } from './tut/tutlistcompo/tutlistcompo.component';
import { TutaddcompoComponent } from './tut/tutaddcompo/tutaddcompo.component';
import { TutcompoComponent } from './tut/tutcompo.component';
import { TutserviceService } from './tut/tutservice.service';


@NgModule({
  imports: [
    CommonModule,
    HrRoutingModule,
    FormsModule
  ],
  declarations: [ SignupComponent ,SigninComponent, TutcompoComponent, TutlistcompoComponent, TutaddcompoComponent]
  ,providers:[TutserviceService]
})
export class HrModule { }
