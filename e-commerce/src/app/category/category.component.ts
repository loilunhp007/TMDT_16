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
  constructor(private productService:ProductService,
    private cartService : CartService,
    private route: ActivatedRoute) { }
    products : Array<Product>
    product : Product;
    user:User;
  ngOnInit(): void {
    const masp = +this.route.snapshot.params['masp'];
    this.getProduct();
  }
  getProduct(){
    this.productService.getProduct().subscribe(
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
     this.user = new User();
     this.user = JSON.parse(sessionStorage.getItem("user"));
     let s= this.user.matv+''
    this.cartService.addToCart(s,product.masp).subscribe(
      Response=>{

      },
      (error)=>{
        console.log(s+"sp:"+product.masp)
        alert(s+"sp:"+product.masp);
      }
    )
  }
  plusCart(product:Product){
    this.user = new User();
    this.user = JSON.parse(sessionStorage.getItem("user"));
    let s= this.user.matv+''
    this.cartService.plusCart(s,product.masp).subscribe(
      Response=>{

      },
      (error)=>{

      }

    )
  }
minusCart(product:Product){
    this.user = new User();
    this.user = JSON.parse(sessionStorage.getItem("user"));
    let s= this.user.matv+''
    this.cartService.minusCart(s,product.masp).subscribe(
      Response=>{

      },
      (error)=>{
        
      }

    )
  }
}
