import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';
import { CartService } from '../service/cartservice';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private productService:ProductService,
    private cartService : CartService,
    private route: ActivatedRoute) { }
    products : Array<Product>
    selectedProduct : Product
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
  addToCart(product:Product){
    let len = localStorage.length;
    len+=1;
    localStorage.setItem("item"+len,JSON.stringify(product))
  }

}
