import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../model/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient:HttpClient) { }
  getAllByMasp(masp:String):Observable<any>{
    return this.httpClient.get<Comment[]>('https://be-ecommerce1.herokuapp.com/cmt/get/'+masp);
  }
  addCmt(comment:Comment):Observable<any>{
    return this.httpClient.post<Comment>('https://be-ecommerce1.herokuapp.com/cmt/add',comment);
  }
  getCommentById(madh:String,masp:String):Observable<any>{
    return this.httpClient.get<Comment>('https://be-ecommerce1.herokuapp.com/cmt/get/'+madh+'/'+masp);
  }

}
