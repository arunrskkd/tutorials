import { Component, OnInit } from '@angular/core';
import { Products } from '../products.model';
import { ItemdataService } from '../itemdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyitems',
  templateUrl: './buyitems.component.html',
  styleUrls: ['./buyitems.component.css']
})
export class BuyitemsComponent implements OnInit {
  item:Products;
  address:string;
  TimeStamp:Date= new Date;
  constructor(private serv:ItemdataService,private rout:Router) { }

  ngOnInit() {
    this.item = this.serv.getshop();
    this.serv.shoppingitem.subscribe( (data:Products) =>{this.item = data});
    

  }

  boughtitem(){
    if(this.address){
      this.serv.addtopurchaseditem({name:this.item.productname,adress:this.address,date:this.TimeStamp});
     
      // console.log({name:this.item.productname,adress:this.address});
      alert('sucessfully purchased');
      this.rout.navigateByUrl('/shopping/viewitem');
     
    }
    else{
      alert("please fill addresss")
    }
  
  }

 

}
