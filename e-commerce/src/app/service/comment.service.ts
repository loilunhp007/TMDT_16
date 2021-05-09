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
    return this.httpClient.get<Comment[]>('http://localhost:8080/cmt/get/'+masp);
  }
  addCmt(comment:Comment):Observable<any>{
    return this.httpClient.post<Comment>('http://localhost:8080/cmt/add',comment);
  }
  getCommentById(madh:String,masp:String):Observable<any>{
    return this.httpClient.get<Comment>('http://localhost:8080/cmt/get/'+madh+'/'+masp);
  }

}
