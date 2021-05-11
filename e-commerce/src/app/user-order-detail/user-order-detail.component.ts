import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as GoogleMapsLoader from 'google-maps';
import { Order } from '../model/order';
import { OrderDetail } from '../model/order-detail';
import { Transport } from '../model/transport';
import { UserDetail } from '../model/user-detail';
import { OrderDetailService } from '../service/order-detail.service';
import { OrderService } from '../service/order.service';
import { ProductService } from '../service/product.service';
import { TransportService } from '../service/transport.service';
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
  transport:Transport;
  constructor(private actRoute:ActivatedRoute,
    private orderDetailService:OrderDetailService,
    private orderService:OrderService,
    private userService:UserService,
    private productService:ProductService,
    private actRouter:ActivatedRoute,
    private router:Router,
    private transportService:TransportService) { }
  madh:String
  orderTotal =0
  orderTotal2 = 0 
  Shipping=0
  purchase=0
  gps1:any
  gps2:any
  time:any
  ngay:String
  thoigiannhan;
  diachigiao:String;
  diachinhan:String;
  sss:any;
  ngOnInit(): void {
    
    this.order = new Order();
    this.userDetail= new UserDetail();
    this.actRoute.queryParams.subscribe(data=>{
      const s = data.id;
      this.getOrderById(s);
      this.madh=s;
      this.getTotal(s);  
      this.transport=new Transport();
      
      console.log(this.diachigiao+"nhan:"+this.diachinhan)
      setTimeout(()=>{
        this.getTransport(this.sss);
      },1000)
    
  })
  
}
  getOrderById(madh:String){
    let ss=madh+'';
    this.orderService.getOrderById(ss).subscribe(
      Response=>{
        this.order = Response;
        
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
             this.sss=data.tid+'';
            
            this.diachigiao=data.diachigiao;
            this.diachinhan=data.diachinhan;
            this.calculating(data.diachigiao,data.diachinhan+'')
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
  getTransport(tid:String){
    this.transportService.getShippingById(tid).subscribe(
      Response=>{
        this.transport=Response;
        this.orderTotal2+=Number(this.transport.fee)
        console.log(this.transport)
      }
    )
  }
  calculating(address1:String,address2:string){
    let speed = 20
    this.orderDetailService.getFromAddress(this.diachigiao).subscribe(
      Response=>{
        let data1 = Response.results[0].geometry.lat;
        let num = data1    
        let data2 = Response.results[0].geometry.lng;
        let num2= data2
        this.gps1 = new google.maps.LatLng(num,num2);
        this.orderDetailService.getFromAddress(this.diachinhan).subscribe(
          Response2=>{
            let data3 = Response2.results[0].geometry.lat;
            let data4 = Response2.results[0].geometry.lng;
            let num = data3
            let num2= data4
           this.gps2 = new google.maps.LatLng(num,num2);
           var distance = google.maps.geometry.spherical.computeDistanceBetween(this.gps1,this.gps2)
            this.time = Number(distance/(1000*speed));
            console.log(this.time)
            this.thoigiannhan = Math.floor((this.time)/12);
            if(this.thoigiannhan ==0){
              this.thoigiannhan+=1
            }

          }
        )
      }
    )
   
    
  }
 
}
