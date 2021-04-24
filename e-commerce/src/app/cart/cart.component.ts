import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { CartService } from '../service/cartservice';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products : Array<Product>;
  cartTotal=0
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.getItems()
    this.getTotal()
    console.log(this.products)
  }
  getItems(){
    this.products = this.cartService.getItem()
  }
  getTotal(){
      this.products.forEach(item=>{
        this.cartTotal+=(item.soluong*item.gia);
      })

  }
  removeItem(masp:String){
    for(let i =0;i<localStorage.length;i++){
      const exist = this.products.forEach(item=>{
        if(item.masp == masp){
          localStorage.removeItem("item"+i);
          console.log("item"+i)
        }
      })
      
    }

  }
}
