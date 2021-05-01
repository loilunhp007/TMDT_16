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
}
