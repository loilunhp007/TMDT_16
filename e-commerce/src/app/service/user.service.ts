import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { UserDetail } from '../model/user-detail';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }
  getUsers()
   {
     return this.httpClient.get<User[]>("http://localhost:8080/user/get");
   }
   addUser(newUser: User):Observable<any> {
   return this.httpClient.post<User>('http://localhost:8080/user/add', newUser);   
  }
  updateUser(newUser: User):Observable<any> {
    return this.httpClient.put<User>('http://localhost:8080/user/put/'+newUser.uid, newUser);   
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
    return this.httpClient.get<User>("http://localhost:8080/user/getemail/{"+user.email+"}");
   }
   getUserByID(){
     let user = JSON.parse(sessionStorage.getItem("user"));     
    return this.httpClient.get<User>("http://localhost:8080/user/get/"+user.uid);
   }
   addUserDetail(UserDetail: UserDetail):Observable<any> {
    return this.httpClient.post<UserDetail>('http://localhost:8080/userdetail/add', UserDetail);   
   }
   updateUserDetail(id:String,UserDetail: UserDetail):Observable<any> {
    return this.httpClient.put<UserDetail>('http://localhost:8080/userdetail/put/'+id, UserDetail);   
   }
   getUserDetailByID(id:String):Observable<any>{
    return this.httpClient.get<UserDetail>('http://localhost:8080/userdetail/get/'+id);   
   }
   getMaxUser(){
    return this.httpClient.get<number>('http://localhost:8080/user/getMax'); 
   }
   deleteUser(uid:number){
     return this.httpClient.delete<string>('http://localhost:8080/user/delete/'+uid)
   }
}
