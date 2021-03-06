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
    return this.httpClient.get<Cart[]>('https://be-ecommerce1.herokuapp.com/cart/get/'+matv)
  }
  addToCart(matv:string,masp:String):Observable<any>{
    return this.httpClient.post<Cart>('https://be-ecommerce1.herokuapp.com/cart/add/'+masp+'/'+matv,null)
  }
  plusCart(matv:string,masp:String):Observable<any>{
    return this.httpClient.put<Cart>('https://be-ecommerce1.herokuapp.com/cart/put/plus/'+masp+"/"+matv,null);
  }
  minusCart(matv:string,masp:String):Observable<any>{
    return this.httpClient.put<Cart>('https://be-ecommerce1.herokuapp.com/cart/put/minus/'+masp+"/"+matv,null);
  }
  deleteCartItem(matv:string,masp:String):Observable<any>{
    return this.httpClient.delete<Cart>('https://be-ecommerce1.herokuapp.com/cart/delete/'+masp+'/'+matv);
  }
  deleteCart(matv:string):Observable<any>{
    return this.httpClient.delete<Cart>('https://be-ecommerce1.herokuapp.com/cart/delete/cart/'+matv);
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
