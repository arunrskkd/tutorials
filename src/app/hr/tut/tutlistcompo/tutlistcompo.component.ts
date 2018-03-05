import { Component, OnInit } from '@angular/core';
import { TutserviceService } from '../tutservice.service';

@Component({
  selector: 'app-tutlistcompo',
  templateUrl: './tutlistcompo.component.html',
  styleUrls: ['./tutlistcompo.component.css']
})
export class TutlistcompoComponent implements OnInit {
  users:string[]=[];
  constructor(private serv:TutserviceService) { }

  ngOnInit() {
    this.users = this.serv.getuser();
  }


}
