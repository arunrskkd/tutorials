import { Injectable } from '@angular/core';

@Injectable()
export class TutserviceService {
  user:string[]=['asd'];
  constructor() { }

  adduser(name:string){
  
      this.user.push(name);
  
    
  }
  getuser(){
         return this.user;
  
  }

}
