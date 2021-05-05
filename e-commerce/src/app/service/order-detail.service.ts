import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderDetail } from '../model/order-detail';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {
  
  constructor(private httpClient:HttpClient) { }
  getOrderDetail(madh:string):Observable<any>{
    return this.httpClient.get<OrderDetail>('http://localhost:8080/orderdetail/get/'+madh);
  }
  addOrderDetail(orderDetail:OrderDetail):Observable<any>{
    return this.httpClient.post<OrderDetail>('http://localhost:8080/orderdetail/add',orderDetail);
  }
  updateOrderDetail(orderDetail:OrderDetail):Observable<any>{
    return this.httpClient.put<OrderDetail>('http://localhost:8080/orderdetail/put',orderDetail);
  }
  ThongKeSP(masp:String):Observable<any>{
    return this.httpClient.get<number>('http://localhost:8080/orderdetail/get/thongke/'+masp);
  }
  thongKeDoanhthu(masp:String):Observable<any>{
    return this.httpClient.get<number[]>('http://localhost:8080/orderdetail/get/tongtien/'+masp);
  } 
  getFromAddress(address:String):Observable<any>{
    return this.httpClient.get('https://api.opencagedata.com/geocode/v1/json?q='+address+'&key=d38ba382c7434d7d91669d2e9e112c4c');
  }
}
