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
  product : Product
  s:String
  pId:String
  userId:String
  flag=false
  constructor(private productService:ProductService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private cartService:CartService) { }

  ngOnInit(): void {
    this.product = new Product();
    this.actRoute.queryParams.subscribe(data=>{
      this.s = data.id
      console.log(data)
    this.getProductById(this.s);
    if(this.product.trangthai==0 || this.product.soluong==0){
      alert("Sản Phẩm hiện không có sẵn.Vui lòng chọn sản phẩm khác")
    }
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
  conditionDisable(product2:Product){
      if(product2.soluong ==0 || product2.trangthai==0){
        return false
      }
  }
}
