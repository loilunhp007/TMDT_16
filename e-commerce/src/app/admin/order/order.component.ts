import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';

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
    private actRouter:ActivatedRoute) { }
  Id:string;
  order:Order
  ngOnInit(): void {
    let Id=JSON.parse(sessionStorage.getItem('user'));
    this.getAllOrder(Id);
    this.getAllOrderCancel(0,Id);
  }
  getAllOrder(matv:string){
    this.order = new Order(); 
    this.orderService.getAllOrder(matv).subscribe(
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
