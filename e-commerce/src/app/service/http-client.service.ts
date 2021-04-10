import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})

export class HttpClientService {

  constructor(private httpClient:HttpClient) 
  { 
     
   }

   getUsers()
   {
     return this.httpClient.get<User[]>("http://localhost:8080/users/get")
   }
   addUser(newUser: User) {
   return this.httpClient.post<User>('http://localhost:8080/users/add', newUser);   
  }
}
