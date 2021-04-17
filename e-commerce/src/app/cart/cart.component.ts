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
}
