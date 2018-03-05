import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
  token:string;
  constructor(private rout:Router) { }

  signupuser(email:string,password:string){
  firebase.auth().createUserWithEmailAndPassword(email,password).then( response => {
    firebase.auth().currentUser.getToken().then((response:string) =>{  this.token =  response  
      this.rout.navigateByUrl('/shopping/viewitem');
    })
  }   ).catch(
    error => alert(error)
  )
  }

  signinuser(email:string,password:string){
    firebase.auth().signInWithEmailAndPassword(email,password).then( response => { 
      firebase.auth().currentUser.getToken().then((response:string) =>{  this.token =  response  
        console.log(response) 
        this.rout.navigateByUrl('/shopping/viewitem');
      })
    

     } 
  
  ).catch(
    error => {
   alert(error);
    this.rout.navigateByUrl('/shopping/signin');}
  )
  }

  gettoken(){
    firebase.auth().currentUser.getToken().then((response:string) =>{  this.token =  response        })
    return this.token;
  }

  logout(){
    firebase.auth().signOut();
    this.token = null;
  }

  isauthenticated(){
    if(this.token != null){
      return true;
    }
    return false;
  }

}
