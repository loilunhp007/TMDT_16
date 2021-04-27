import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../model/cart';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private httpClient:HttpClient) { 
  }
  getCartItems(matv:String):Observable<any>{
    return this.httpClient.get<Cart[]>('http://localhost:8080/cart/get/'+matv)
  }
  addToCart(matv:string,masp:String):Observable<any>{
    return this.httpClient.post<Cart>('http://localhost:8080/cart/add/'+masp+'/'+matv,null)  
  }

 /*addItem(product:Product){
    const exist = this.cartItems.find((item)=>{
      return item.masp == product.masp;
    })
    if(exist)
      exist.quantity;
    else
      this.cartItems.push(product)
      console.log(this.cartItems)
  }*/
  
}
