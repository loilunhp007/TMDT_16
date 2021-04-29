import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private productService:ProductService,
    private actRoute:ActivatedRoute) { }
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
}
