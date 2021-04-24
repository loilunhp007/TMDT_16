import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  exportAs:'mdbModal',
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
  
})
export class UpdateProductComponent implements OnInit {
  
  @Input() product:Product;
  selectedFile:File
  imgURL:any
  validatingForm = this.formBuilder.group({
    ProductFormModalID: ['', Validators.required],
    ProductFormModalName: ['', Validators.required],
    ProductFormModalPrice: ['', Validators.pattern('[0-9]')],
    ProductFormModalQuantity:['', Validators.required],
    ProductFormModalInfo: ['', Validators.required],
    ProductFormModalImage: ['',Validators.required ]
  });
    constructor(private productService:ProductService,
      private formBuilder:FormBuilder){ }

  ngOnInit(): void {
    
  }
  updateProduct(id:String){
    
  

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
  get validatingControl(){
    return  this.validatingForm.controls;
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
