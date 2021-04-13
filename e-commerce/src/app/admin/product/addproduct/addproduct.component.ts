import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  @Input()
  product: Product;
  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
  }
  addProduct(){
    this.ProductService.addProduct(this.product).subscribe(
      (data)=>{
        console.log(data);
      },
      (error)=>{
          console.log(error);
      }
    )
  }

}
