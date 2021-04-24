import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  product:Product
  selectedFile:File
  validatingForm:FormGroup
  imgURL:any
  modalOptions = {
    class: 'modal-frame modal-top'
}
    constructor(private productService:ProductService,
      public modalRef:MDBModalRef ){ }

  ngOnInit(): void {
    this.product= new Product();
    this.validatingForm = new FormGroup({
      ProductFormModalID: new FormControl('', Validators.required),
      ProductFormModalName: new FormControl('', Validators.required),
      ProductFormModalPrice: new FormControl('', Validators.pattern('[0-9]')),
      ProductFormModalQuantity: new FormControl('', Validators.required),
      ProductFormModalInfo: new FormControl('', Validators.required),
      ProductFormModalImage: new FormControl('',Validators.required )
    });
  }
  updateProduct(id:String){
    this.productService.getProductByID(id).subscribe(
      Response=>{
        this.product=Response;
        this.ProductFormModalID.setValue(this.product.masp)
        this.ProductFormModalName.setValue(this.product.tensp)
        this.ProductFormModalInfo.setValue(this.product.thongtinsanpham)
        this.ProductFormModalPrice.setValue(this.product.gia)
        this.ProductFormModalQuantity.setValue(this.product.soluong)
        this.ProductFormModalImage.setValue(this.product.hinhanh)
        console.log(this.product);
      }
    )

  }
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(this.selectedFile)
    reader.onload = (event2)=>{
      this.imgURL = reader.result
    }
  }
  get ProductFormModalName() {
    return this.validatingForm.get('ProductFormModalName');
  }

  get ProductFormModalID() {
    return this.validatingForm.get('ProductFormModalID');
  }

  get ProductFormModalInfo() {
    return this.validatingForm.get('ProductFormModalInfo');
  }
  get ProductFormModalPrice() {
    return this.validatingForm.get('ProductFormModalName');
  }

  get ProductFormModalQuantity() {
    return this.validatingForm.get('ProductFormModalQuantity');
  }
  get ProductFormModalImage() {
    return this.validatingForm.get('ProductFormModalImage');
  }
}
