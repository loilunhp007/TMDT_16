import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { UpdateProductComponent } from './update-product/update-product.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products : Array<Product>
  selectedProduct : Product
  action : String
  modalRef: MDBModalRef
  modalOptions = {
    class: 'modal-frame modal-top'
}
  constructor(private productService:ProductService,
    private router: Router,
    private activatedRoute : ActivatedRoute,
    private modal:MDBModalService) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(){
    this.productService.getProduct().subscribe(
      (response)=>{ this.products =response;
          console.log(this.products);
        
      })
  }
  getProductByID(matv:String){
    this.productService.getProduct().subscribe(
      (response)=>{ this.products =response;
          console.log(this.products);
        
      },
      (error)=>{
        alert(error);
      })

  }
  getProductByName(tensp:string){
    this.productService.getProduct().subscribe(
      (response)=>{ this.products =response;
          console.log(this.products);
        
      })
  }
  editProduct(product:Product){
    console.log(product);
    this.modalRef = this.modal.show(UpdateProductComponent,this.modalOptions);
  }
}
