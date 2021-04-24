import { Component, Input, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service'; 
import { FileSaverService } from 'ngx-filesaver';
import { HttpClient } from '@angular/common/http';
// MDB Angular Free

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  validatingForm: FormGroup
  selectedFile : File
  @Input()
  product: Product;
  imgURL:any
  constructor(private ProductService: ProductService,
    private route:Router,
    private fileSaver: FileSaverService,
    private httpClient:HttpClient) { }

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
  addProduct(){
    const uploadData = new FormData();
    const random2 = Math.floor(Math.random() * (9999 - 1000));
    let imageName = random2+''+this.selectedFile.name;
    uploadData.append('imageFile', this.selectedFile, imageName);
    const random = Math.floor(Math.random() * (9999 - 1000));
    this.product.masp = this.ProductFormModalID.value;
        this.product.maloai = "1";
        this.product.tensp = this.ProductFormModalName.value;
        this.product.thongtinsanpham =this.ProductFormModalInfo.value;
        this.product.gia = this.ProductFormModalPrice.value;
        this.product.soluong = this.ProductFormModalQuantity.value;
        this.product.trangthai=1;
        this.product.hinhanh= imageName     
    this.httpClient.post('http://localhost:8080/products/upload',uploadData,{ observe : "response"}).subscribe(
      (Response)=>{
        if(Response.status === 200){
          this.ProductService.addProduct(this.product).subscribe(
            (response)=>{
              console.log(this.product);
              alert(response)
              this.route.navigate(['admin',['product']]);
            },
            (error)=>{ 
                
            }
      
          )
        console.log('Image upload Sucess');
        }
    },
  
    
)

    

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

  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(this.selectedFile)
    reader.onload = (event2)=>{
      this.imgURL = reader.result
    }
  }
}
