import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  s:any=[]
  constructor(private httpClient : HttpClient) {

  }
  getProduct(matv:String):Observable<Product[]>{ 
    return this.httpClient.get<Product[]>("https://be-ecommerce1.herokuapp.com/products/get/matv/"+matv);
  }
  addProduct(formData:FormData):Observable<any>{
   return this.httpClient.post<Product>("https://be-ecommerce1.herokuapp.com/products/add",formData);
  }
  getProductByName(tensp:String){
   return this.httpClient.get<Product[]>("https://be-ecommerce1.herokuapp.com/product/get/"+tensp);
  }
  getProductByID(masp:String):Observable<any>{
    return this.httpClient.get<Product>('https://be-ecommerce1.herokuapp.com/products/get/'+masp);
  }
  updateProduct(product : Product):Observable<any>{
    return  this.httpClient.put<Product>("https://be-ecommerce1.herokuapp.com/products/put/"+product.masp,product);
  }
  deteleProductByID(masp:String):Observable<any>{
    return this.httpClient.delete<Product>("https://be-ecommerce1.herokuapp.com/products/delete/"+masp);
  }
  getProductByTrangthai(trangthai:number):Observable<any>{
    return this.httpClient.get<Product[]>('https://be-ecommerce1.herokuapp.com/products/get/trangthai/'+trangthai)
  }
  getProductByLikeName(k:String):Observable<any>{
    return this.httpClient.get<Product[]>('https://be-ecommerce1.herokuapp.com/products/get/tensp/'+k)
  }
}
