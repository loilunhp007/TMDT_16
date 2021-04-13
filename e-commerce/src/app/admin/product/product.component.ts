import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(){
    this.productService.getProduct().subscribe(
      (response)=>{ this.products =response;
          console.log(this.products);
        
      })
  }

}
