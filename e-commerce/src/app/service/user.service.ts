import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }
  getUsers()
   {
     return this.httpClient.get<User[]>("http://localhost:8080/users/get");
   }
   addUser(newUser: User) {
   return this.httpClient.post<User>('http://localhost:8080/users/add', newUser);   
  }
   public loginUserFromRemote(user:User ): Observable<any> {
      
      return this.httpClient.post<User>("http://localhost:8080/user/login",user);
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
     return false;
   }
   getUserbyEmail():Observable<any>{ let user = JSON.parse(sessionStorage.getItem("user")); 
    return this.httpClient.get<User>("http://localhost:8080/users/getemail/{"+user.email+"}");
   }
   getUserByID(){
     let user = JSON.parse(sessionStorage.getItem("user"));     
    return this.httpClient.get<User>("http://localhost:8080/users/get/{"+user.uid+"}");
   }
}
