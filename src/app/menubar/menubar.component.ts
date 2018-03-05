import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { RolrservService } from '../rolrserv.service';
import { AuthService } from '../hr/auth/auth.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  constructor(public ser:AuthService,private rout:Router,private role:RolrservService) { }

  ngOnInit() {
    console.log(this.ser.isauthenticated())
  }
  logout(){
    this.ser.logout();
    alert('loged out');
    this.rout.navigateByUrl('hr/signin');
  }

}
