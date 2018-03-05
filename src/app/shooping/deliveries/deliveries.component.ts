import { Component, OnInit } from '@angular/core';
import { ItemdataService } from '../itemdata.service';
import { Products } from '../products.model';

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.css']
})
export class DeliveriesComponent implements OnInit {
  items:{name:string,adress:string,date:Date}[];

  constructor(private serv:ItemdataService) { 
  
  
  }

  ngOnInit() {
       this.serv.getpurchaseditem();
       this.serv.purchasedproducts.subscribe((data) => {  
         this.items = data;
        });
   }

   

}
