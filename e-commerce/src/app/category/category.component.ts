import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';
import { User } from '../model/user';
import { CartService } from '../service/cartservice';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  searchText;
  amount=0;
  constructor(private productService:ProductService,
    private cartService : CartService,
    private Actroute: ActivatedRoute,
    private router:Router) { }
    products : Array<Product>
    product : Product;
    userId:String
    productId:String;
    p:number=1
  ngOnInit(): void {

    // status 1 product can be bought 
    this.getProduct(1);
  }
  getProduct(trangthai:number){
    this.productService.getProductByTrangthai(trangthai).subscribe(
      (response)=>{ this.products =response;
          console.log(this.products);
        
      })
  }
  getProductByID(id:String){
    this.productService.getProductByID(id).subscribe(
      Response=>{this.product = Response;

      }
    )
  }
  addToCart(product:Product){
    if(sessionStorage.getItem("user")!=null){
      this.userId = JSON.parse(sessionStorage.getItem("user"));
      let s= this.userId+''
     this.cartService.addToCart(s,product.masp).subscribe(
       Response=>{
          console.log(Response)
       },
       (error)=>{
         console.log(s+"sp:"+product.masp)
         alert("Add to cart Sucess")
       }
     )
    }
     
  }

  goDetail(product:Product){
    this.Actroute.queryParams.subscribe(
      params=>{
        const id=product.masp;
        this.router.navigate(['home','product-detail'],{queryParams: {id}})
      }
    )
  
  }
}
