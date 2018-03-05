import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';
import { AuthService } from './hr/auth/auth.service';
import { ItemdataService } from './shooping/itemdata.service';
import { RolrservService } from './rolrserv.service';
@Injectable()
export class RoleguardService  implements CanActivate{

  constructor(public router: Router,private authact:AuthService,private serv:RolrservService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    const token = localStorage.getItem('token');
   const role = this.serv.getrole();
    // decode the token to get its payload
    ;
    if (
      !this.authact.isauthenticated() ||
       (expectedRole !== role )
    ) {
      return false;
    }
    return true;
    
  }



}
