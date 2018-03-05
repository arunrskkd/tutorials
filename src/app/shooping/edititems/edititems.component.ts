import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ItemdataService } from '../itemdata.service';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../products.model';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edititems',
  templateUrl: './edititems.component.html',
  styleUrls: ['./edititems.component.css']
})
export class EdititemsComponent implements OnInit {

  additemform:FormGroup;
  item:Products;
  id:number;
  constructor(private productserv:ItemdataService, private route: ActivatedRoute, private location: Location,private rout:Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id'); //snapshot.params['id']
    this.item = this.productserv.getsingleproduct(this.id);
    // console.log(this.productserv.getsingleproduct(this.id)),,this.route.params.subscribe();
    this.oninitform();
  }




  oninitform(){
    this.additemform = new FormGroup({
      'productname': new FormControl(this.item.productname,Validators.required),
       'productcost' : new FormControl(this.item.productcost,Validators.required),
       'productimage' : new FormControl(this.item.productimage,Validators.required),
       'detail' : new FormControl(this.item.detail,Validators.required),
       'productcolor': new FormControl(this.item.productcolor,Validators.required),
    });
    
  }

  onsubmit(){
    alert('succesfully updated')
   this.productserv.updateitem(this.id, this.additemform.value);
   this.productserv.updatedevent.subscribe(() => {
    this.rout.navigateByUrl('/shopping/viewitem');
   });
   

  }

}
