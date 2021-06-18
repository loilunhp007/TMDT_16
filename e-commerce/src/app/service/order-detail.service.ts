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
    return this.httpClient.get<OrderDetail>('https://be-ecommerce1.herokuapp.com/orderdetail/get/'+madh);
  }
  addOrderDetail(orderDetail:OrderDetail):Observable<any>{
    return this.httpClient.post<OrderDetail>('https://be-ecommerce1.herokuapp.com/orderdetail/add',orderDetail);
  }
  updateOrderDetail(orderDetail:OrderDetail):Observable<any>{
    return this.httpClient.put<OrderDetail>('https://be-ecommerce1.herokuapp.com/orderdetail/put',orderDetail);
  }
  ThongKeSP(matv:String,thang:number):Observable<any>{
    return this.httpClient.get<number[]>('https://be-ecommerce1.herokuapp.com/orderdetail/get/thongkesoluong/'+matv+'/'+thang);
  }
  thongKeDoanhthu(matv:String,thang):Observable<any>{
    return this.httpClient.get<number[]>('https://be-ecommerce1.herokuapp.com/get/thongkedoanhthu/'+matv+'/'+thang);
  }
  getFromAddress(address:String):Observable<any>{
    return this.httpClient.get('https://api.opencagedata.com/geocode/v1/json?q='+address+'&key=d38ba382c7434d7d91669d2e9e112c4c');
  }
}
