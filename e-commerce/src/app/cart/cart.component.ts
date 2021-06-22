import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../model/cart';
import { Sanpham } from '../model/sanpham';
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
  products : Array<Sanpham>;
  cartTotal=0
  cartTotal2=0
  product:Sanpham
  Shipping = 25000;
  flag =true
  constructor(private cartService : CartService,
    private productService:ProductService,
    private router:Router,
    private actRoute:ActivatedRoute) { }
  userId:String
  ngOnInit(): void {
    this.userId = JSON.parse(sessionStorage.getItem("user"));
    if(sessionStorage.getItem("user")!=null){
      this.userId = JSON.parse(sessionStorage.getItem("user"));
    }
    this.product = new Sanpham()
    this.getCart();
    this.getTotal();
    
  }
  getCart(){
    
    
    this.cartService.getCartItems(this.userId).subscribe(
      Response =>{
        this.carts = Response

      })
    }
  getTotal(){
      
      this.cartService.getCartItems(this.userId).subscribe(
      Response =>{
        this.carts = Response
        if(this.carts !=null){
          this.carts.forEach(item=>{
            this.productService.getProductByID(item.product.masp).subscribe(
              Response1=>{
                this.product = Response1
                console.log(this.product)
                this.cartTotal2+=this.Shipping
                this.cartTotal+=(this.product.gia*item.soluong)
                this.cartTotal2+=(this.product.gia*item.soluong)
              }
            )
          })
        }
      })
    }
    
  plusCart(product:Sanpham){
   
    let s= this.userId+''
    this.cartService.plusCart(s,product.masp).subscribe(
      Response=>{
        this.exit()
      },
      (error)=>{
        this.exit()
      }

    )
  }
minusCart(product:Sanpham){
   
    let s= this.userId+''
    this.cartService.minusCart(s,product.masp).subscribe(
      Response=>{
        this.exit()
      },
      (error)=>{
        this.exit()
      }

    )
  }
  deleteCartItem(product:Sanpham){
    let s= this.userId+''
    this.cartService.deleteCartItem(s,product.masp).subscribe(
      Response=>{
        this.exit()
      },
      (error)=>{
        this.exit()
      }

    )
  }
  exit() {
    location.reload();
  }
  goDetail(product:Sanpham){
    this.actRoute.queryParams.subscribe(
      params=>{
        const id=product.masp;
        this.router.navigate(['home','product-detail'],{queryParams: {id}})
        
      }
    )
  
  }
}
