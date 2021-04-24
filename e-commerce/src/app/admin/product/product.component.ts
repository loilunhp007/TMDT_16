import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MDBModalRef, MDBModalService, ModalDirective } from 'angular-bootstrap-md';
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
  selectedFile:File
  imgURL:any
  validatingForm = this.formBuilder.group({
    ProductFormModalID: ['', Validators.required],
    ProductFormModalName: ['', Validators.required],
    ProductFormModalPrice: ['', Validators.pattern('[0-9]')],
    ProductFormModalQuantity:['', Validators.required],
    ProductFormModalInfo: ['', Validators.required],
    ProductFormModalImage: [''],
    ProductFormModalMaloai: [''],
    ProductFormModalTrangThai : ['']

  });
  constructor(private productService:ProductService,
    private router: Router,
    private activatedRoute : ActivatedRoute,
    private formBuilder:FormBuilder,
    private httpClient:HttpClient) { }

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
    this.activatedRoute.queryParams.subscribe(
      (params)=>{
        this.action= params['action'];
        const id=product.masp;
        this.router.navigate(['admin','product'],{queryParams: {id,action:'update'}})
        this.displayProduct(product);
      })
      
  }
  displayProduct(product:Product){
    this.ProductFormModalID.setValue( product.masp)
    this.ProductFormModalName.setValue( product.tensp)
    this.ProductFormModalInfo.setValue( product.thongtinsanpham)
    this.ProductFormModalPrice.setValue( product.gia)
    this.ProductFormModalQuantity.setValue( product.soluong)
    this.imgURL="../../../../assets/images/"+ product.hinhanh
    this.ProductFormModalMaLoai.setValue(product.maloai)
    this.ProductFormModalTrangThai.setValue(product.trangthai)
  }
  updateProduct()
  {
        let product2= new Product() 
        this.productService.getProductByID(this.ProductFormModalID.value).subscribe(Response=>{
            product2=Response
            product2.tensp=this.ProductFormModalName.value;
            product2.thongtinsanpham=this.ProductFormModalInfo.value
            product2.gia = this.ProductFormModalPrice.value
            product2.soluong = this.ProductFormModalQuantity.value
            product2.maloai = this.ProductFormModalMaLoai.value
            product2.trangthai = this.ProductFormModalTrangThai.value
            let srcImg="../../../../assets/images/"+ product2.hinhanh
            const uploadData = new FormData();
            let img=product2.hinhanh+''
            if(srcImg!= this.imgURL){
              product2.hinhanh= img
              uploadData.append('imageFile', this.selectedFile,img);
              console.log(product2)
              this.httpClient.post('http://localhost:8080/products/upload',uploadData,{ observe : "response"}).subscribe(
                (Response)=>{
                  if(Response.status === 200){
                    this.productService.updateProduct(product2).subscribe(
                      (response)=>{
                        
                        
                      },
                      (error)=>{ 
                        console.log(product2)
                        console.log(srcImg)
                        console.log(this.ProductFormModalImage)
                        console.log(product2.maloai)
                        
                      }
                
                    )
    
                  }
              })
            }else{
              this.productService.updateProduct(product2).subscribe(
                Response=>{
                 
                  
                },
                error=>{console.log(product2)
                  console.log(srcImg)
                  console.log(this.ProductFormModalImage)}
              )
            }
        })
       
     
  

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
  get ProductFormModalID() {
    return this.validatingForm.get('ProductFormModalID');
  }

  get ProductFormModalInfo() {
    return this.validatingForm.get('ProductFormModalInfo');
  }
  get ProductFormModalName() {
    return this.validatingForm.get('ProductFormModalName');
  }
  get ProductFormModalPrice() {
    return this.validatingForm.get('ProductFormModalPrice');
  }

  get ProductFormModalQuantity() {
    return this.validatingForm.get('ProductFormModalQuantity');
  }
  get ProductFormModalImage() {
    return this.validatingForm.get('ProductFormModalImage');
  }
  get ProductFormModalMaLoai() {
    return this.validatingForm.get('ProductFormModalMaloai');
  }
  get ProductFormModalTrangThai() {
    return this.validatingForm.get('ProductFormModalTrangThai');
  }
  deleteProduct(product:Product){
    if(confirm("Are you sure to delete "+product.tensp)) {
      this.productService.deteleProductByID(product.masp).subscribe(
        Response=>{
            this.router.navigate(['admin/products'])
        }
      )
    }
    
  }
}
