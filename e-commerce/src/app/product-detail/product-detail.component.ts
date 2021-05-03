import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { CartService } from '../service/cartservice';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  products:Array<Product>
  product : Product
  s:String
  pId:String
  userId:String
  flag=false
  constructor(private productService:ProductService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private cartService:CartService) { }
    idx=0;
  ngOnInit(): void {
    this.product = new Product();
    this.getProduct(1);
    this.actRoute.queryParams.subscribe(data=>{
      this.s = data.id
      console.log(data)
    this.getProductById(this.s);
    this.getViewProduct(this.s);
    if(this.product.trangthai==0 || this.product.soluong==0){
      alert("Sản Phẩm hiện không có sẵn.Vui lòng chọn sản phẩm khác")
    }
    
    })
  

  }
  getProduct(trangthai:number){
    this.productService.getProductByTrangthai(trangthai).subscribe(
      (response)=>{ this.products =response;
          console.log(this.products);
        
      })
  }
  getProductById(masp:String){
    this.productService.getProductByID(masp).subscribe(
      Response=>{
        this.product=Response
      }
    )
  }
  addToCart(product:Product){
    if(sessionStorage.getItem("user")!=null){
      this.userId = JSON.parse(sessionStorage.getItem("user"));
      let s1= this.userId+''
     this.cartService.addToCart(s1,product.masp).subscribe(
       Response=>{
          console.log(Response)
          alert("Add to cart Sucess")
       },
       (error)=>{
         console.log(s1+"sp:"+product.masp)
         alert("Add to cart Sucess")
       }
     )
    }
     
  }

  getViewProduct(masp:String){
    let sss=masp+''
    this.productService.getProductByID(sss).subscribe(
      Response=>{
        let product2 = new Product()
         product2 = Response;
        product2.luotxem+=1
        this.productService.updateProduct(product2).subscribe(
          Response2=>{

          }
        )
      }
    )
  }
}
