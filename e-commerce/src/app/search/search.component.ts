import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';
import { google } from "google-maps";
declare var google:any
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    
  constructor(private productService:ProductService,
    private actRoute:ActivatedRoute,
    private router:Router) { }
    searchText
    products: Product[]
    p:number=1
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
}
