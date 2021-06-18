import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient:HttpClient,) { }

  getAllOrder(matv:string):Observable<any>{
    return this.httpClient.get<Order>('https://be-ecommerce1.herokuapp.com/order/get/tvban/'+matv);
  }
  getAllOrderByTvmua(matv:string):Observable<any>{
    return this.httpClient.get<Order>('https://be-ecommerce1.herokuapp.com/get/tvmua/'+matv);
  }
  getOrderById(madh:string):Observable<any>{
    return this.httpClient.get<Order>('https://be-ecommerce1.herokuapp.com/order/get/'+madh)
  }
  getAllOrderByTrangthaiAndTvban(trangthai:number,matvban:string):Observable<any>{
    return this.httpClient.get<Order[]>('https://be-ecommerce1.herokuapp.com/order/get/trangthai/'+trangthai+'/'+matvban);
  }
   addOrder(order:Order):Observable<any>{
    return this.httpClient.post<Order>('https://be-ecommerce1.herokuapp.com/order/add',order);
  }
   updateOrderStatus(madh:String,trangthai:number):Observable<any>{
    return this.httpClient.put<Order>('https://be-ecommerce1.herokuapp.com/order/put/'+madh+'/'+trangthai,null);
  }

}

