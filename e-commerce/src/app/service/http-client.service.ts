import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpClientService {

  constructor(private httpClient:HttpClient) 
  { 
     
   }

   getUsers()
   {
     return this.httpClient.get<User[]>("http://localhost:8080/users/get");
   }
   addUser(newUser: User) {
   return this.httpClient.post<User>('http://localhost:8080/users/add', newUser);   
  }
   public loginUserFromRemote(email:string,matkhau:string ): Observable<any> {
      
      return this.httpClient.post<User>("http://localhost:8080/user/login",{email,matkhau});
   }
   isLogged(){
       let sesson = sessionStorage.getItem("user");
      if(sesson ==null || sesson===''){
        return false;
      }
      else{return true}
   }
   logOut(){
     sessionStorage.removeItem("user");
   }
   getUserbyEmail(){
     
   }
}
