import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetail } from 'src/app/model/order-detail';
import { Product } from 'src/app/model/product';
import { OrderDetailService } from 'src/app/service/order-detail.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  orderdetails:Array<OrderDetail>
  constructor(private actRoute:ActivatedRoute,
    private orderDetailService:OrderDetailService,
    private productService:ProductService) { }
  products : any = []
  madh:String
  
  ngOnInit(): void {
    this.actRoute.queryParams.subscribe(data=>{
      const s = data.id;
      this.madh=s;
      this.getOrderDetail(s);
      this.getProduct(s);
    
  })
 


}
  getOrderDetail(madh:String){
    let ss = madh+''
    this.orderDetailService.getOrderDetail(ss).subscribe(
      Response=>{
        this.orderdetails=Response;
        console.log(this.orderdetails)
      }
    )
      
  }
  getProduct(madh:String){
    let ss = madh+''
    this.orderDetailService.getOrderDetail(ss).subscribe(
      Response=>{
        this.orderdetails=Response;
        this.orderdetails.forEach(data=>{
          this.productService.getProductByID(data.masp).subscribe(
            Response2=>{
              let product = new Product();
              product = Response2;
              console.log(product)
              this.products.push(product)
              console.log(this.products)
            }
          )

        })
      }
    )
      
  }
}

