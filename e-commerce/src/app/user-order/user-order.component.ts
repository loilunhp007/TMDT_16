import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../model/order';
import { OrderDetail } from '../model/order-detail';
import { Product } from '../model/product';
import { OrderDetailService } from '../service/order-detail.service';
import { OrderService } from '../service/order.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.css']
})
export class UserOrderComponent implements OnInit {
  orders:Array<Order>
  cancelOrders:Array<Order>
  constructor(private orderService:OrderService,
    private router:Router,
    private actRouter:ActivatedRoute,
    private orderDetailService:OrderDetailService,
    private productService:ProductService,
    ) { }
  Id:string;
  order:Order
  orderDetail:OrderDetail

  ngOnInit(): void {
    let Id=JSON.parse(sessionStorage.getItem('user'));
    this.getAllOrder(Id);
    this.getAllOrderCancel(0,Id);
   
     
   

  }
  getAllOrder(matv:string){
    this.order = new Order(); 
    this.orderService.getAllOrderByTvmua(matv).subscribe(
      Response=>{
        this.orders=Response;
        console.log(this.orders);}
    )

  }
  getAllOrderCancel(trangthai:number,matvban:String){
    this.order = new Order(); 
    let ss=matvban+''
    this.orderService.getAllOrderByTrangthaiAndTvban(trangthai,ss).subscribe(
      Response=>{
        this.cancelOrders=Response;
        }
    )

  }
  
  updateOrderCancel(order:Order){
    let ss = order.madh+''
    this.orderService.updateOrderStatus(ss,0).subscribe(
      Response=>{
        let order2 = new Order(); 
        order2 = Response
        this.orderDetailService.getOrderDetail(ss).subscribe(
          Response2=>{
            let orderDetail =new OrderDetail();
            orderDetail=Response2[0]
            console.log(orderDetail)
            let sss = orderDetail.masp+''
            console.log(sss)
            this.productService.getProductByID(sss).subscribe(
              Response3=>{
                let product = new Product();
                product = Response3;
                product.soluong+=Number(orderDetail.soluong)
                this.productService.updateProduct(product).subscribe(
                  Response4=>{
                    alert("don hang huy thanh cong")
                    this.exit();
                  }
                )

              }
            )
          }
        )

      }
    );
    }
  goDetail(order:Order){
    this.actRouter.queryParams.subscribe(
      params=>{
        const id=order.madh;
        this.router.navigate(['/home/order','orderdetail'],{queryParams: {id}})
      }
    )
  }
  exit() {
    location.reload();
  }
}
