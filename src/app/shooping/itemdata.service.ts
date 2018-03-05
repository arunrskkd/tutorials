import { Injectable } from '@angular/core';
import { Products  } from './products.model';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpdataService } from './httpdata.service';
@Injectable()

export class ItemdataService {

  
  products:Products[]=[ ];
  shopitem:Products;
  productadded = new Subject<Products[]>();
  shoppingitem = new Subject<Products>();
  purchasedproducts = new Subject<any[]>();
  updatedevent  = new Subject<any>();
  purchaseditem:any[];


  constructor(private serv:HttpdataService) { 
    this.serv.getproducts().subscribe((data) => { this.products = data });
    this.serv.getadress().subscribe((data) => {
      if(data != null){
        this.purchaseditem = data;
      }
      else{
        this.purchaseditem = [];
      }
      
      
      });

  }

  addproduct(item:Products){
    this.products.push(item);
    this.productadded.next(this.products);
    this.serv.saveproducts(this.products).subscribe((res) => { console.log("sucessfully added")});
  }

  getproducts(){
    return this.serv.getproducts();
    
   
  }

  getsingleproduct(id:number){
    return this.products[id];
    
  }

  delsingleproduct(id:number){
     this.products.splice(id,1);
     this.productadded.next(this.products);
     this.serv.saveproducts(this.products).subscribe((res) => { console.log("sucessfully updated")});
     
  }

  updateitem(id:number,item:Products){
    this.products[id] = item;
    this.serv.saveproducts(this.products).subscribe((res) => { this.updatedevent.next('sucess')});
  }

  addtoshop(item:Products){
    this.shopitem = item;
  }
  getshop(){
    return  this.shopitem;
  }

  addtopurchaseditem(details:{}){
     this.purchaseditem.push(details);
    this.purchasedproducts.next(this.purchaseditem.slice());
    this.serv.savedeliveryadress(this.purchaseditem).subscribe((res) => { console.log("sucessfully updated")});
  }

  getpurchaseditem(){
    
    this.serv.getadress().subscribe((data) => { 
      if(data != null){
        this.purchaseditem = data;
      }
      else{
        this.purchaseditem = [];
      }
      this.purchasedproducts.next(this.purchaseditem.slice());
    });
   
  }

 

  
}
