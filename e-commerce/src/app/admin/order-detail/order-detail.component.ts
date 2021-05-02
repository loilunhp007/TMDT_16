import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/model/order';
import { OrderDetail } from 'src/app/model/order-detail';
import { Product } from 'src/app/model/product';
import { UserDetail } from 'src/app/model/user-detail';
import { OrderDetailService } from 'src/app/service/order-detail.service';
import { OrderService } from 'src/app/service/order.service';
import { ProductService } from 'src/app/service/product.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  orderdetails:Array<OrderDetail>
  order:Order;
  userDetail:UserDetail;
  constructor(private actRoute:ActivatedRoute,
    private orderDetailService:OrderDetailService,
    private orderService:OrderService,
    private userService:UserService,
    private productService:ProductService) { }
  madh:String
  orderTotal =0
  orderTotal2 = 0 
  Shipping=25000
  purchase=0
  ngOnInit(): void {
    this.order = new Order();
    this.userDetail= new UserDetail();
    this.actRoute.queryParams.subscribe(data=>{
      const s = data.id;
      this.getOrderById(s);
      this.madh=s;
      this.getTotal(s);
      
     
    
  })
}
  getOrderById(madh:String){
    let ss=madh+'';
    this.orderService.getOrderById(ss).subscribe(
      Response=>{
        this.order = Response;
      }
    )
  }
  getTotal(madh:String){
    let ss = madh+''
    this.orderDetailService.getOrderDetail(ss).subscribe(
      Response=>{
        this.orderdetails=Response;
        if(this.orderdetails!=null){
          this.orderdetails.forEach(data=>{
            this.orderTotal+=Number(data.gia)*Number(data.soluong)
            this.purchase=Number(data.thanhtoan)
            this.productService.getProductByID(data.masp).subscribe(
              Response2=>{
                data.product=Response2;
              }
            )
          })
          this.orderTotal2=this.orderTotal;
          this.orderTotal2+=+this.Shipping;
         
        }else{
          if(this.orderdetails==null){
          alert("don hang khong ton tai")}
        }
      }
    )
      
 
  }
}

