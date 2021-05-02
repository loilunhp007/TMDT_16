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
  getAllOrderByTrangthai(trangthai:number):Observable<any>{
    return this.httpClient.get<Order[]>('http://localhost:8080/order/get/trangthai/'+trangthai);
  }
}

