import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginClass } from '../model/class';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 public baseURL=' https://saapi.azaz.com/api/AdminLogins'

   constructor(private http:HttpClient) {
    }

  login(model:LoginClass){
     const headersValue={
       headers:new HttpHeaders ({'Content-Type': 'application/json'}),
     };
    return this.http.post(this.baseURL+'/login',model,headersValue)
  }


}

