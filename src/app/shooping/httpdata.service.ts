import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Response } from '@angular/http';
import 'rxjs/Rx';
import { Products } from './products.model';
import { AuthService } from '../hr/auth/auth.service';

@Injectable()
export class HttpdataService {

  constructor(private http:Http,private auth:AuthService) { }

  saveproducts(products:Products[]){
    const token = this.auth.gettoken();
    const body = JSON.stringify(products);
    const headers = new Headers({'Content-Type':'application/json'});
    return this.http.put('https://dataservice-ebe36.firebaseio.com/products.json?auth='+token,body,{headers:headers}).map((response:Response) =>{ response.json()  });
  }

  getproducts(){
    const token = this.auth.gettoken();
    // console.log(token);
    return  this.http.get('https://dataservice-ebe36.firebaseio.com/products.json?auth='+token).map((response:Response) =>{  const dat = response.json();
        return dat;  });

  }

  savedeliveryadress(products:any[]){
    const token = this.auth.gettoken();
    const body = JSON.stringify(products);
    const headers = new Headers({'Content-Type':'application/json'});
    return this.http.put('https://dataservice-ebe36.firebaseio.com/deladdress.json?auth='+token,body,{headers:headers}).map((response:Response) =>{ response.json()  });
  }
 
  getadress(){
    const token = this.auth.gettoken();
    return  this.http.get('https://dataservice-ebe36.firebaseio.com/deladdress.json?auth='+token).map((response:Response) =>{  const dat = response.json();
        return dat;  });

  }

}
