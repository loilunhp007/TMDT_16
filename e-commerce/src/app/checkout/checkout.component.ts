import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../model/cart';
import { Order } from '../model/order';
import { OrderDetail } from '../model/order-detail';
import { Product } from '../model/product';
import { UserDetail } from '../model/user-detail';
import { CartService } from '../service/cartservice';
import { OrderDetailService } from '../service/order-detail.service';
import { OrderService } from '../service/order.service';
import { ProductService } from '../service/product.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  carts: Array<Cart>
  cartTotal=0
  cartTotal2=0
  product:Product
  Shipping = 25000;
  userId:String
  info:UserDetail;
  date = new Date()
  
  infoForm = this.formBuilder.group({
    ho:[''],
    ten:[''],
    address:[''],
    phone:[''],
    email:['']
  })
  constructor(private cartService:CartService,
    private productService:ProductService,
    private actRoute:ActivatedRoute,
    private router:Router,
    private userSerVice:UserService,
    private formBuilder:FormBuilder,
    private orderService:OrderService,
    private oderDetailService:OrderDetailService
    ) { }

  ngOnInit(): void {
    
    this.info = new UserDetail();
    this.userId = JSON.parse(sessionStorage.getItem("user"));
    if(sessionStorage.getItem("user")!=null){
      this.userId = JSON.parse(sessionStorage.getItem("user"));
      this.getUserInfo();
    }
    this.product = new Product()

    this.getCart();
    this.getTotal();
  }

  getUserInfo(){
    this.userSerVice.getUserDetailByID(this.userId).subscribe(
      Response=>{
       this.info=Response;
       console.log(this.info)
       this.Ho.setValue(this.info.ho)
       this.Ten.setValue(this.info.ten)
       this.SDT.setValue(this.info.sdt)
       this.address.setValue(this.info.diachi)
       this.Email.setValue(this.info.gmail)
      }
    )
  }
  getCart(){
    
    
    this.cartService.getCartItems(this.userId).subscribe(
      Response =>{
        this.carts = Response

      })
    }
  getTotal(){
      
      this.cartService.getCartItems(this.userId).subscribe(
      Response =>{
        this.carts = Response
        if(this.carts !=null){
          this.carts.forEach(item=>{
            this.productService.getProductByID(item.product.masp).subscribe(
              Response1=>{
                this.product = Response1
                this.cartTotal+=(this.product.gia*item.soluong)
                this.cartTotal2+=(this.product.gia*item.soluong)+this.Shipping
              }
            )
          })
        }
      })
    }
    plusCart(product:Product){
   
      let s= this.userId+''
      this.cartService.plusCart(s,product.masp).subscribe(
        Response=>{
          this.exit()
        },
        (error)=>{
          this.exit()
        }
  
      )
    }
  minusCart(product:Product){
     
      let s= this.userId+''
      this.cartService.minusCart(s,product.masp).subscribe(
        Response=>{
          this.exit()
        },
        (error)=>{
          this.exit()
        }
  
      )
    }
    exit() {
      location.reload();
    }
    goDetail(product:Product){
      this.actRoute.queryParams.subscribe(
        params=>{
          const id=product.masp;
          this.router.navigate(['home','product-detail'],{queryParams: {id}})
          console.log(params)
        }
      )
    
    
    }
    createOrder(){
     if(confirm("Bạn chắc chắn muốn đặt hàng ?")){
      const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      
      this.userSerVice.getUserDetailByID(this.userId).subscribe(
        Response=>{

          this.info = Response;
          let tvmua=this.info;
          this.cartService.getCartItems(this.userId).subscribe(
            Response2=>{
              
              this.carts=Response2;
              this.carts.forEach(data=>{
                let order = new Order()
                let orderDetail = new OrderDetail()
                let product2 =new Product();
                const random = Math.floor(Math.random() * (99-10)+1)+''+randomChars.charAt(Math.floor(Math.random() * randomChars.length))+''+ Math.floor(Math.random() * (9-1))
                    order.madh = random
                order.tvmua  = tvmua
                const day=this.date.getDate();
                const month = this.date.getMonth()+1;
                const year = this.date.getFullYear();
                order.ngaytao = year+'-'+month+'-'+day
                order.tongtien =(data.soluong*data.product.gia)
                orderDetail.tongtien = order.tongtien 
                order.trangthai= 1
                orderDetail.soluong=data.soluong
                this.productService.getProductByID(data.product.masp).subscribe(
                  Response3=>{
                    product2 = Response3
                    orderDetail.madh= order.madh+''                     
                    orderDetail.gia = product2.gia
                    orderDetail.masp = product2.masp
                    orderDetail.thanhtoan=0
                    order.tvban = product2.userDetail
                    console.log(order)
                    this.orderService.addOrder(order).subscribe(
                      (Response4)=>{
                            console.log(orderDetail)
                            this.oderDetailService.addOrderDetail(orderDetail).subscribe(
                                Response5=>{
                                  alert("add detail sucess")
                                    let itemId= this.userId+'' 
                                    this.cartService.deleteCart(itemId).subscribe(
                                      Response6=>{
                                            this.exit();
                                      },(error)=>{
                                        this.exit();
                                      }
                                    );
                                },(error)=>{
                                        
                                      }

                            ),(error)=>{
                                        
                            }
                        }

                        
                    );

                  }
                )      
              })
            }
          )
     })
          
     }

    }
    getInfoForm(){
      return this.infoForm.controls;
    }
    get Ho() {
      return this.infoForm.get('ho');
    }
    get Ten() {
      return this.infoForm.get('ten');
    }
    get SDT() {
      return this.infoForm.get('phone');
    }
    get address() {
      return this.infoForm.get('address');
    }
    get Email() {
      return this.infoForm.get('email');
    }
    
}
