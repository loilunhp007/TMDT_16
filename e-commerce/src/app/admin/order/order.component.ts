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
    this.getAllOrderCancel(0);
  }
  getAllOrder(matv:string){
    this.order = new Order(); 
    this.orderService.getAllOrder(matv).subscribe(
      Response=>{
        this.orders=Response;
        console.log(this.orders);}
    )

  }
  getAllOrderCancel(trangthai:number){
    this.order = new Order(); 
    this.orderService.getAllOrderByTrangthai(trangthai).subscribe(
      Response=>{
        this.cancelOrders=Response;
        }
    )

  }
  goDetail(order:Order){
    this.actRouter.queryParams.subscribe(
      params=>{
        const id=order.madh;
        this.router.navigate(['admin','orderdetail'],{queryParams: {id}})
        console.log(params)
        alert(params)
      }
    )
  }
}
