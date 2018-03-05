import { Component, OnInit } from '@angular/core';
import { Products } from '../products.model';
import { ItemdataService } from '../itemdata.service';
import { Location } from '@angular/common';
import {Router} from '@angular/router';
@Component({
  selector: 'app-viewitems',
  templateUrl: './viewitems.component.html',
  styleUrls: ['./viewitems.component.css']
})
export class ViewitemsComponent implements OnInit {
  items:Products[]=[];
  
  constructor(private serv:ItemdataService,private rout:Router) { }

  ngOnInit() {
    
    this.serv.getproducts().subscribe((item:Products[]) => {
      this.items = item;
      this.serv.products = this.items;
     
    });
    this.serv.productadded.subscribe((item:Products[]) => {
      this.items = item;
      this.serv.products = this.items;
     
    });
  }

  ondel(i:number){
    this.serv.delsingleproduct(i);
  }

  buyitem(item:Products){
    this.serv.addtoshop(item);
    this.serv.shoppingitem.next(item);
    this.rout.navigateByUrl('/shopping/buyitem');

  }


}
