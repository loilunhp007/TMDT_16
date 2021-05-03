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
    DELLs:any = [{name:'DELL PRECISION'},{name:'DELL LATITULE'},{name:'DELL ALIENWARE'},{name:'DELL XPS'},{name:'DELL VOSTRO'},{name:'DELL INSPIRON'}]
    HPs:any=[{name:'HP ELITEBOOK'},{name:'HP ENVY'},{name:'HP PROBOOK'},{name:'HP PAVILION'},{name:'HP ZBOOK'},{name:'HP SPECTRE'},{name:'HP OMEN'}]
    ASUSs:any=[{name:'ASUS G'},{name:'ASUS UX'},{name:'ASUS X'},{name:'ASUS K'},{name:'ASUS N'},{name:'ASUS PU'},]
    LENOVOs:any=[{name:'LENOVO THINKPAD'},{name:'LENOVO THINKBOOK'},{name:'LENOVO IDEAPAD'},{name:'LENOVO YOGA'},{name:'LENOVO LEGION'},]
    ACERs:any=[{name:'ACER ASPIRE'},{name:'ACER NITRO'},{name:'ACER SWIFT'},{name:'ACER PREDATOR'}]
    MSIs:any=[{name:'MSI MODERN'},{name:'MSI GF'},{name:'MSI GL'},{name:'MSI BRAVO'},{name:'MSI GS'},{name:'MSI PRESTIGE'}]
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
  findByCategory(keyword2:String){
    let keyword=keyword2.toLowerCase()
    this.router.navigate(['home','search'],{queryParams:{keyword}})
  }
}
