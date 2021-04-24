import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems : Product[] =[]
  cartTotal=0;
  constructor() { 
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
  getItem(){
    const quantity=0
    for(var i =1;i<localStorage.length;i++)
      {
        let product = JSON.parse(localStorage.getItem("item"+i));
        product[i]= new Product
        product[i].soluong=1
        const exist = this.cartItems.find((item)=>{
          return item.masp == product.masp;
          
        })
        if(exist){
          exist.soluong++;
          console.log(exist.soluong);
         }
         else{
           this.cartItems.push(product)
         }
      
      }
      return this.cartItems;
      

  }
  removeItem(){
    const quantity=0
    for(var i =1;i<localStorage.length;i++)
      {
        let product = JSON.parse(localStorage.getItem("item"+i));
        const exist = this.cartItems.find((item)=>{
          return item.masp == product.masp;
          
        })
      }
    }
}
