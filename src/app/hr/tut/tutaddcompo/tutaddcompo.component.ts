import { Component, OnInit } from '@angular/core';
import { TutserviceService } from '../tutservice.service';

@Component({
  selector: 'app-tutaddcompo',
  templateUrl: './tutaddcompo.component.html',
  styleUrls: ['./tutaddcompo.component.css']
})
export class TutaddcompoComponent implements OnInit {
  users:string[];
  constructor(private ser:TutserviceService) { }

  ngOnInit() {
  }

  add(name:string){
    this.ser.adduser(name);
  }
}
