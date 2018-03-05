import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyA0lCdy6nLvF2UjX42QEtawspfS2IZtj-U",
      authDomain: "dataservice-ebe36.firebaseapp.com"
    })
  }
}
