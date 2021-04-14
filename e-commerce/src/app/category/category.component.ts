import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private productService:ProductService) { }
  products : Array<Product>
  selectedProduct : Product
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
