import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/model/order';
import { OrderDetail } from 'src/app/model/order-detail';
import { Sanpham } from 'src/app/model/sanpham';
import { OrderDetailService } from 'src/app/service/order-detail.service';
import { OrderService } from 'src/app/service/order.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders:Array<Order>
  cancelOrders:Array<Order>
  constructor(private orderService:OrderService,
    private router:Router,
    private actRouter:ActivatedRoute,
    private productService:ProductService,
    private orderDetailService:OrderDetailService) { }
  Id:string;
  order:Order
  p:number=1
  ngOnInit(): void {
    let Id=JSON.parse(sessionStorage.getItem('user'));
    this.getAllOrder(Id);
    this.getAllOrderCancel(0,Id);
    this.updateAll(Id);

  }
  getAllOrder(matv:string){
    this.order = new Order(); 
    this.orderService.getAllOrder(matv).subscribe(
      Response=>{
        this.orders=Response;
        console.log(this.orders);}
    )
  }
    updateAll(matv:string){
      this.order = new Order(); 
      this.orderService.getAllOrder(matv).subscribe(
        Response=>{
          this.orders=Response;
          this.orders.forEach(data=>{
            if(data.trangthai ==4){
              let sss=data.madh+''
              this.orderDetailService.getOrderDetail(sss).subscribe(
                Response2=>{
                  let orderDetail2= new OrderDetail();
                  orderDetail2=Response2[0];
                  
                  if(orderDetail2.thanhtoan==0){
                    this.orderDetailService.updateOrderDetail(orderDetail2).subscribe(
                      Response3=>{
                        alert("success")
                        this.exit();
                      }
                    )     
                    
                  }
  
                }
              )
            }
          })
        }
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
  updateOrder(order:Order){
    let ss = order.madh+''
    if(order.trangthai == 1){
    this.orderService.updateOrderStatus(ss,2).subscribe(
      Response=>{
        let order2 = new Order(); 
        order2 = Response
        this.exit();
      }
    );
    }
    if(order.trangthai == 2){
    this.orderService.updateOrderStatus(ss,3).subscribe(
      Response=>{
        let order2 = new Order(); 
        order2 = Response
        this.exit();
      })
    }
    if(order.trangthai == 3){
      this.orderService.updateOrderStatus(ss,4).subscribe(
        Response=>{
          let order2 = new Order(); 
          order2 = Response

          this.exit()
        })
      }
      
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
                let product = new Sanpham();
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
        this.router.navigate(['admin','orderdetail'],{queryParams: {id}})
      }
    )
  }
  exit() {
    location.reload();
  }
  
}
