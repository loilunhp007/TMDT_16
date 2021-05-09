import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Comment } from '../model/comment';
import { Order } from '../model/order';
import { Product } from '../model/product';
import { CartService } from '../service/cartservice';
import { CommentService } from '../service/comment.service';
import { OrderService } from '../service/order.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  products:Array<Product>
  product : Product
  s:String
  pId:String
  userId:String
  flag=false
  comments:Array<Comment>
  order:Order
  comment:Comment
  commentForm = this.formBuilder.group({
    madh:['',Validators.required,],
    masp:['',Validators.required],
    noidung:['',Validators.required],
    selectedStar:['',Validators.required]
  })
  size=0;
  DELLs:any = [{name:'DELL PRECISION'},{name:'DELL LATITULE'},{name:'DELL ALIENWARE'},{name:'DELL XPS'},{name:'DELL VOSTRO'},{name:'DELL INSPIRON'}]
  HPs:any=[{name:'HP ELITEBOOK'},{name:'HP ENVY'},{name:'HP PROBOOK'},{name:'HP PAVILION'},{name:'HP ZBOOK'},{name:'HP SPECTRE'},{name:'HP OMEN'}]
  ASUSs:any=[{name:'ASUS G'},{name:'ASUS UX'},{name:'ASUS X'},{name:'ASUS K'},{name:'ASUS N'},{name:'ASUS PU'},]
  LENOVOs:any=[{name:'LENOVO THINKPAD'},{name:'LENOVO THINKBOOK'},{name:'LENOVO IDEAPAD'},{name:'LENOVO YOGA'},{name:'LENOVO LEGION'},]
  ACERs:any=[{name:'ACER ASPIRE'},{name:'ACER NITRO'},{name:'ACER SWIFT'},{name:'ACER PREDATOR'}]
  MSIs:any=[{name:'MSI MODERN'},{name:'MSI GF'},{name:'MSI GL'},{name:'MSI BRAVO'},{name:'MSI GS'},{name:'MSI PRESTIGE'}]
  constructor(private productService:ProductService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private cartService:CartService,
    private commentService:CommentService,
    private orderService:OrderService,
    private formBuilder:FormBuilder) { }
    idx=0;
  ngOnInit(): void {
    this.comment = new Comment()
    this.order = new Order();
    this.product = new Product();
    this.getProduct(1);
    this.actRoute.queryParams.subscribe(data=>{
      this.s = data.id
      this.madh.setValue(data.dh);
      this.masp.setValue(this.s);
      this.selectedStar.setValue(5);
      console.log(data)
    this.getProductById(this.s);
    this.getViewProduct(this.s);
    this.checkComment(this.madh.value,this.masp.value)
    if(this.product.trangthai==0 || this.product.soluong==0){
      alert("Sản Phẩm hiện không có sẵn.Vui lòng chọn sản phẩm khác")
    }
    this.getAllComment(this.s);
    })
  

  }
  getProduct(trangthai:number){
    this.productService.getProductByTrangthai(trangthai).subscribe(
      (response)=>{ this.products =response;
        
      })
  }
  getProductById(masp:String){
    this.productService.getProductByID(masp).subscribe(
      Response=>{
        this.product=Response
      }
    )
  }
  addToCart(product:Product){
    if(sessionStorage.getItem("user")!=null){
      this.userId = JSON.parse(sessionStorage.getItem("user"));
      let s1= this.userId+''
     this.cartService.addToCart(s1,product.masp).subscribe(
       Response=>{
          console.log(Response)
          alert("Add to cart Sucess")
       },
       (error)=>{
         console.log(s1+"sp:"+product.masp)
         alert("Add to cart Sucess")
       }
     )
    }
     
  }

  getViewProduct(masp:String){
    let sss=masp+''
    this.productService.getProductByID(sss).subscribe(
      Response=>{
        let product2 = new Product()
         product2 = Response;
        product2.luotxem+=1
        this.productService.updateProduct(product2).subscribe(
          Response2=>{
            
          }
        )
      }
    )
  }
  getAllComment(masp:String){
     this.commentService.getAllByMasp(masp).subscribe(
      Response=>{
        this.comments=Response;
        this.size = this.comments.length;
        this.comments.forEach(data=>{
          let ss=data.madh+''
          this.orderService.getOrderById(ss).subscribe(
            Response2=>{
              data.donhang=Response2;
          })

        })
          
      })
  }
  selectedStarChange(star:number){
    console.log(this.selectedStar);
  }
  rating(){
    let comment2=new Comment();
    comment2.madh=this.madh.value;
    comment2.masp=this.masp.value;
    comment2.noidung=this.noidung.value
    comment2.sao=this.selectedStar.value
    this.commentService.addCmt(comment2).subscribe(
      Response=>{
        this.exit();
      }
    )
    
  }
  exit() {
    location.reload();
  }
  get madh(){
    return this.commentForm.get('madh');
  }
  get masp(){
    return this.commentForm.get('masp');
  }
  get noidung(){
    return this.commentForm.get('noidung');
  }
  get selectedStar(){
    return this.commentForm.get('selectedStar');
  }
  checkComment(madh:String,masp:String){
    this.commentService.getCommentById(madh,masp).subscribe(
      Response=>{
        if(Response!=null){
          console.log(Response)
          return this.flag=false;
        
      } else{
        return this.flag=true
      }
      }
    )

  }
  findByCategory(keyword2:String){
    let keyword=keyword2.toLowerCase()
    this.router.navigate(['home','search'],{queryParams:{keyword}})
  }
}
