import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient : HttpClient) { 
    
  }
  getProduct(matv:String):Observable<Product[]>{
    return this.httpClient.get<Product[]>("http://localhost:8080/products/get/matv/"+matv);
  }
  addProduct(product: Product){
   return this.httpClient.post<Product>("http://localhost:8080/products/add",product);
  }
  getProductByName(tensp:String){
   return this.httpClient.get<Product[]>("http://localhost:8080/product/get/"+tensp);
  }
  getProductByID(masp:String):Observable<any>{
    return this.httpClient.get<Product>('http://localhost:8080/products/get/'+masp);
  }
  updateProduct(product : Product):Observable<any>{
    return  this.httpClient.put<Product>("http://localhost:8080/products/put/"+product.masp,product);
  }
  deteleProductByID(masp:String):Observable<any>{
    return this.httpClient.delete<Product>("http://localhost:8080/products/delete/"+masp);
  }
  getProductByTrangthai(trangthai:number):Observable<any>{
    return this.httpClient.get<Product[]>('http://localhost:8080/products/get/trangthai/'+trangthai)
  }
  getProductByLikeName(k:String):Observable<any>{
    return this.httpClient.get<Product[]>('http://localhost:8080/products/get/tensp/'+k)
  }
}
