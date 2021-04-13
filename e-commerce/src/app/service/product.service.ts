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
  getProduct():Observable<Product[]>{
    return this.httpClient.get<Product[]>("http://localhost:8080/products/get");
  }
  addProduct(product: Product){
   return this.httpClient.post<Product>("http://localhost:8080/product/add",{product});
  }
  getProductByName(){
   return this.httpClient.get<Product[]>("http://localhost:8080/product/get{name}");
  }
  updateProduct(product : Product){
    return  this.httpClient.post<Product>("http://localhost:8080/product/put",{product});
  }
  deteleProductByID(matv:String):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8080/delete/{id}",{matv});
  }
}
