import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';
import { google } from "google-maps";
import { CartService } from '../service/cartservice';
declare var google:any
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    
  constructor(private productService:ProductService,
    private actRoute:ActivatedRoute,
    private router:Router,
    private cartService:CartService) { }
    userId;
    searchText
    products: Product[]
    p:number=1
    DELLs:any = [{name:'DELL PRECISION'},{name:'DELL LATITULE'},{name:'DELL ALIENWARE'},{name:'DELL XPS'},{name:'DELL VOSTRO'},{name:'DELL INSPIRON'}]
    HPs:any=[{name:'HP ELITEBOOK'},{name:'HP ENVY'},{name:'HP PROBOOK'},{name:'HP PAVILION'},{name:'HP ZBOOK'},{name:'HP SPECTRE'},{name:'HP OMEN'}]
    ASUSs:any=[{name:'ASUS G'},{name:'ASUS UX'},{name:'ASUS X'},{name:'ASUS K'},{name:'ASUS N'},{name:'ASUS PU'},]
    LENOVOs:any=[{name:'LENOVO THINKPAD'},{name:'LENOVO THINKBOOK'},{name:'LENOVO IDEAPAD'},{name:'LENOVO YOGA'},{name:'LENOVO LEGION'},]
    ACERs:any=[{name:'ACER ASPIRE'},{name:'ACER NITRO'},{name:'ACER SWIFT'},{name:'ACER PREDATOR'}]
    MSIs:any=[{name:'MSI MODERN'},{name:'MSI GF'},{name:'MSI GL'},{name:'MSI BRAVO'},{name:'MSI GS'},{name:'MSI PRESTIGE'}]
  ngOnInit(): void {
    this.actRoute.queryParams.subscribe(
      data=>{
        const key = data.keyword;
        this.getProductByLikeName(key);
      })
  }
  getProductByLikeName(k:String){
    this.productService.getProductByLikeName(k).subscribe(
      Response=>{
        this.products=Response;
      }
    )
  }
  goDetail(product:Product){
    this.actRoute.queryParams.subscribe(
      params=>{
        const id=product.masp;
        this.router.navigate(['home','product-detail'],{queryParams: {id}})
      }
    )
  
  }
  findByCategory(keyword2:String){
    let keyword=keyword2.toLowerCase()
    this.router.navigate(['home','search'],{queryParams:{keyword}})
  }
  addToCart(product:Product){
    if(sessionStorage.getItem("user")!=null){
      this.userId = JSON.parse(sessionStorage.getItem("user"));
      let s= this.userId+''
     this.cartService.addToCart(s,product.masp).subscribe(
       Response=>{
       },
       (error)=>{

         alert("Add to cart Sucess")
       }
     )
    }
     
  }
}
