import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadAllModules } from '@angular/router';


const routes: Routes = [
  {
    path: 'hr',
    loadChildren: 'app/hr/hr.module#HrModule'
    
    
  },
  {
    path: 'shopping',
    loadChildren: 'app/shooping/shooping.module#ShoopingModule',
    data: {preload: true}
  },
 
  {
    path: '',
    redirectTo: 'hr',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
