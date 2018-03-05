import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './hr/auth/auth.service';

@Injectable()
export class AuthGuardService  implements CanActivate{
  // login:boolean = false;
  constructor(public router:Router,private authact:AuthService) { }

  canActivate(route: ActivatedRouteSnapshot):boolean{
    // if(this.login){
    //   return true;
    // }
    // const expectedRole = route.data.expectedRole;
    if (
      // expectedRole == 'admin' || expectedRole ==   'manager'
     this.authact.isauthenticated()
   ) {
     
    return true;
   }

 
   return false;
  
   
    
  }

}
