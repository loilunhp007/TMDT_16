import { Component, Input, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service'; 
import { FileSaverService } from 'ngx-filesaver';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { Category } from 'src/app/model/category';
// MDB Angular Free

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  date= new Date();
  validatingForm: FormGroup
  selectedFile : File
  @Input()
  product: Product;
  imgURL:any;
  Categorys : Category[]
  category1: Category
  category2:Category

  private userDetailId:String;
  constructor(private ProductService: ProductService,
    private route:Router,
    private fileSaver: FileSaverService,
    private httpClient:HttpClient,
    private userService:UserService) { }

  ngOnInit(): void {
  
    this.userDetailId = JSON.parse(sessionStorage.getItem("user"));
    this.product= new Product();
    this.validatingForm = new FormGroup({
      ProductFormModalID: new FormControl('', Validators.required),
      ProductFormModalName: new FormControl('', Validators.required),
      ProductFormModalPrice: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.min(1000000)]),
      ProductFormModalQuantity: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]\d*$/)] ),
      ProductFormModalInfo: new FormControl('', Validators.required),
      ProductFormModalImage: new FormControl('',Validators.required )
    });
  }
  addProduct(){
    const uploadData = new FormData();
    const day=this.date.getDate();
    const month = this.date.getMonth()+1;
    const year = this.date.getFullYear();
    const random2 = Math.floor(Math.random() * (999 - 100));
    let imageName = random2+''+day+month+year+this.selectedFile.name;
    uploadData.append('imageFile', this.selectedFile, imageName);
    const random = Math.floor(Math.random() * (9999 - 1000));
    this.product.masp = this.ProductFormModalID.value;
        this.product.maloai = "1";
        this.product.tensp = this.ProductFormModalName.value;
        this.product.thongtinsanpham =this.ProductFormModalInfo.value;
        this.product.gia = this.ProductFormModalPrice.value;
        this.product.soluong = this.ProductFormModalQuantity.value;
        this.product.trangthai=1;
        this.userService.getUserDetailByID(this.userDetailId).subscribe(
          data=>{
            this.product.userDetail = data;
            uploadData.append("sanpham",JSON.stringify(this.product));
          this.ProductService.addProduct(uploadData).subscribe(
            (response)=>{
              console.log(response)
              this.route.navigate(['admin','product']);
            },
            (error)=>{ 
              console.log(error)
              
              alert(this.product)
            }
      
          ),
          (error)=>{
            console.log(this.product)
              alert(this.product)
          }
        console.log('Image upload Sucess');
        
    },
  


          
        ),
        (error)=>{
            console.log(error);
            console.log(this.product);
            alert(this.product)
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
    return this.validatingForm.get('ProductFormModalPrice');
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
