import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = "http://localhost:8080"
  constructor(private httpClient: HttpClient) { }
  public loginUserFromRemote(user : User): Observable<any>{
    sessionStorage.setItem("user",JSON.stringify(user));
    return this.httpClient.post<any>('http://localhost:8080/login',user);
 }
  loginUser(token){
    localStorage.setItem('token',token);
    return true;
  }
  isLoggedIn(){
    let token = localStorage.getItem("token");
    if(token == undefined || token ==='' || token==null){
      return false;
    }else{
      return true;
    }
  }
  logOut(){
    localStorage.removeItem("token");
    return true;
    
  }
  getToken(){
    return localStorage.getItem("token");
  }
}
