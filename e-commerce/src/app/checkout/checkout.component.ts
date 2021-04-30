import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../model/cart';
import { Product } from '../model/product';
import { CartService } from '../service/cartservice';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  carts: Array<Cart>
  cartTotal=0
  cartTotal2=0
  product:Product
  Shipping = 25000;
  userId:String
  constructor(private cartService:CartService,
    private productService:ProductService,
    private actRoute:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.userId = JSON.parse(sessionStorage.getItem("user"));
    if(sessionStorage.getItem("user")!=null){
      this.userId = JSON.parse(sessionStorage.getItem("user"));
    }
    this.product = new Product()
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
                this.cartTotal+=(this.product.gia*item.soluong)
                this.cartTotal2+=(this.product.gia*item.soluong)+this.Shipping
              }
            )
          })
        }
      })
    }
    plusCart(product:Product){
   
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
  minusCart(product:Product){
     
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
    exit() {
      location.reload();
    }
    goDetail(product:Product){
      this.actRoute.queryParams.subscribe(
        params=>{
          const id=product.masp;
          this.router.navigate(['home','product-detail'],{queryParams: {id}})
          console.log(params)
        }
      )
    
    }
}
