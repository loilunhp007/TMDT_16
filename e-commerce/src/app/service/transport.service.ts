import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transport } from '../model/transport';

@Injectable({
  providedIn: 'root'
})
export class TransportService {

  constructor(private httpClient:HttpClient) { }
  getShipping():Observable<any>{
    return this.httpClient.get<Transport[]>('http://localhost:8080/transport/get')
  }
  getShippingById(tid:String):Observable<any>{
    return this.httpClient.get<Transport>('http://localhost:8080/transport/get/'+tid)
  }
}
