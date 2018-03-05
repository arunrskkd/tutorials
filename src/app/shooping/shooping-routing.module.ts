import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdditemsComponent } from './additems/additems.component';
import { ViewitemsComponent } from './viewitems/viewitems.component';
import { BuyitemsComponent } from './buyitems/buyitems.component';
import { EdititemsComponent } from './edititems/edititems.component';
import { DeliveriesComponent } from './deliveries/deliveries.component';
import { CanActivate } from '@angular/router';
import { 
  AuthGuardService as AuthGuard 
} from '../auth-guard.service';
import {   RoleguardService as Roleguard } from '../roleguard.service';

const routes: Routes = [
  { path: '', redirectTo: 'additem', pathMatch: 'full'
 
},
  { path: 'additem', component: AdditemsComponent,canActivate:[Roleguard], data: { 
    expectedRole: 'admin'
  }},
  { path: 'edititems/:id', component: EdititemsComponent,canActivate:[AuthGuard]
 
 },
  { path: 'viewitem', component: ViewitemsComponent},
  { path: 'buyitem', component: BuyitemsComponent,canActivate:[AuthGuard] },
  { path: 'deliveries', component: DeliveriesComponent,canActivate:[AuthGuard] },

 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoopingRoutingModule { }
