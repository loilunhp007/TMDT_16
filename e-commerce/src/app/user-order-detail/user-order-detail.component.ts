import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as GoogleMapsLoader from 'google-maps';
import { Order } from '../model/order';
import { OrderDetail } from '../model/order-detail';
import { UserDetail } from '../model/user-detail';
import { OrderDetailService } from '../service/order-detail.service';
import { OrderService } from '../service/order.service';
import { ProductService } from '../service/product.service';
import { UserService } from '../service/user.service';
declare var google;
@Component({
  selector: 'app-user-order-detail',
  templateUrl: './user-order-detail.component.html',
  styleUrls: ['./user-order-detail.component.css']
})
export class UserOrderDetailComponent implements OnInit {
  orderdetails:Array<OrderDetail>
  order:Order;
  userDetail:UserDetail;
  constructor(private actRoute:ActivatedRoute,
    private orderDetailService:OrderDetailService,
    private orderService:OrderService,
    private userService:UserService,
    private productService:ProductService,
    private actRouter:ActivatedRoute,
    private router:Router) { }
  madh:String
  orderTotal =0
  orderTotal2 = 0 
  Shipping=25000
  purchase=0
  gps1:any
  gps2:any
  time:any
  ngay:String
  thoigiannhan
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
        let diachii=this.order.tvmua.diachi+'';
        this.calculating(this.order.tvban.diachi,diachii);
        let newDate = new Date(this.order.ngaytao+'');
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
  goDetail(orderDetail:OrderDetail){
    this.actRoute.queryParams.subscribe(
      params=>{
        const id=orderDetail.masp;
        const dh=orderDetail.madh;
        this.router.navigate(['home','product-detail'],{queryParams: {id,dh}})
      }
    )
  
  }
  calculating(address1:String,address2:string){
    let speed = 100
    this.orderDetailService.getFromAddress(address1).subscribe(
      Response=>{
        let data1 = Response.results[0].geometry.lat;
        let num = data1    
        let data2 = Response.results[0].geometry.lng;
        let num2= data2
        this.gps1 = new google.maps.LatLng(num,num2);
        this.orderDetailService.getFromAddress(address2).subscribe(
          Response2=>{
            let data3 = Response2.results[0].geometry.lat;
            let data4 = Response2.results[0].geometry.lng;
            let num = data3
            let num2= data4
           this.gps2 = new google.maps.LatLng(num,num2);
           var distance = google.maps.geometry.spherical.computeDistanceBetween(this.gps1,this.gps2)
            this.time = Number(distance/speed);
            this.thoigiannhan = Math.floor(this.time/24);
            if(this.thoigiannhan ==0){
              this.thoigiannhan+=1
            }

          }
        )
      }
    )
   
    
  }
}
