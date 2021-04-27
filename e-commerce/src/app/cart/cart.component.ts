import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/cart';
import { Product } from '../model/product';
import { User } from '../model/user';
import { CartService } from '../service/cartservice';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts: Array<Cart>
  products : Array<Product>;
  cartTotal=0
  product:Product
  constructor(private cartService : CartService,
    private productService:ProductService) { }
  user:User
  ngOnInit(): void {
    this.user = new User()
    this.product = new Product()
    this.getCart();
    this.getTotal();
    console.log(this.products)
  }
  getCart(){
    
    this.user =JSON.parse(sessionStorage.getItem("user"));
    this.cartService.getCartItems(this.user.matv).subscribe(
      Response =>{
        console.log()
        this.carts = Response
        console.log(this.carts)
      })
    }
  getTotal(){
      this.user =JSON.parse(sessionStorage.getItem("user"));
      this.cartService.getCartItems(this.user.matv).subscribe(
      Response =>{
        this.carts = Response
        if(this.carts !=null){
          this.carts.forEach(item=>{
            this.productService.getProductByID(item.product.masp).subscribe(
              Response1=>{
                this.product = Response1
                console.log(this.product)
                this.cartTotal+=(this.product.gia*item.soluong)
              }
            )
          })
        }
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
