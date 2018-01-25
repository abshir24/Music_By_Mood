import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions,Headers } from "@angular/http";
import "rxjs";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConnectorService {

  constructor(private _http:Http) { }
 
  getMusic(emotion:String){
    // return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=8a8b31bd9b0317ce097dd8807d29cbd0`)
    // .subscribe((res)=>{
    //   this.test(res.json())
    // })
  }

  getCookie(name){
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2)
      return parts.pop().split(";").shift();
  }


  test(obj){
    console.log("client side response", obj)
    let headers = new Headers({ 
      'Content-Type': 'application/json', 
      'X-CSRFToken': this.getCookie('csrftoken')
      });
      let options = new RequestOptions({ headers: headers })
      return this._http.post('/main/test',obj, options)
      .subscribe()
  }
   
}


