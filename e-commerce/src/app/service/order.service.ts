import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient:HttpClient) { }
   
  getAllOrder(matv:string):Observable<any>{
    return this.httpClient.get<Order>('http://localhost:8080/order/get/tvban/'+matv);
  }
  getOrderById(madh:string):Observable<any>{
    return this.httpClient.get<Order>('http://localhost:8080/order/get/'+madh)
  }
  getAllOrderByTrangthaiAndTvban(trangthai:number,matvban:string):Observable<any>{
    return this.httpClient.get<Order[]>('http://localhost:8080/order/get/trangthai/'+trangthai+'/'+matvban);
  }
   addOrder(order:Order):Observable<any>{
    return this.httpClient.post<Order>('http://localhost:8080/order/add',order);
  }
   updateOrderStatus(madh:String,trangthai:number):Observable<any>{
    return this.httpClient.put<Order>('http://localhost:8080/order/put/'+madh+'/'+trangthai,null);
  }
}

