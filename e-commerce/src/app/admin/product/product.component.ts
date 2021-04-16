import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products : Array<Product>
  selectedProduct : Product
  action : String
  constructor(private productService:ProductService,
    private router: Router,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.getProduct();
    this.activatedRoute.queryParams.subscribe(
      (params) => {
          this.action =  params['action']
        
      }
      )
  }
  getProduct(){
    this.productService.getProduct().subscribe(
      (response)=>{ this.products =response;
          console.log(this.products);
        
      })
  }
  getProductByID(matv:String){
    this.productService.getProduct().subscribe(
      (response)=>{ this.products =response;
          console.log(this.products);
        
      })
  }
  getProductByName(tensp:string){
    this.productService.getProduct().subscribe(
      (response)=>{ this.products =response;
          console.log(this.products);
        
      })
  }
  addProduct(){
    this.selectedProduct = new Product();
    this.router.navigate(['admin','product'],{queryParams : {action : 'add'} })
  }


}
