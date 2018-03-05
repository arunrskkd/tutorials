import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Validators } from '@angular/forms';
import { ItemdataService } from '../itemdata.service';
@Component({
  selector: 'app-additems',
  templateUrl: './additems.component.html',
  styleUrls: ['./additems.component.css']
})
export class AdditemsComponent implements OnInit {
  additemform:FormGroup;
  constructor(private productserv:ItemdataService) { }

  ngOnInit() {
    this.oninitform();
  }
  oninitform(){
    this.additemform = new FormGroup({
      'productname': new FormControl('',Validators.required),
       'productcost' : new FormControl('',Validators.required),
       'productimage' : new FormControl('',Validators.required),
       'detail' : new FormControl('',Validators.required),
       'productcolor': new FormControl('',Validators.required),
    });
    
  }

  onsubmit(){
    this.productserv.addproduct(this.additemform.value);
    this.additemform.reset();
    alert('sucessfully added')
  }



}
