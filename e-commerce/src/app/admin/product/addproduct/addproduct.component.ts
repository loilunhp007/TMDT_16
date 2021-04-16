import { Component, Input, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service'; 
// MDB Angular Free

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  validatingForm: FormGroup

  @Input()
  product: Product;
  constructor(private ProductService: ProductService,
    private route:Router) { }

  ngOnInit(): void {
    this.validatingForm = new FormGroup({
      ProductFormModalID: new FormControl('', Validators.required),
      ProductFormModalName: new FormControl('', Validators.required),
      ProductFormModalPrice: new FormControl('', Validators.pattern('[0-9]')),
      ProductFormModalQuantity: new FormControl('', Validators.required),
      ProductFormModalInfo: new FormControl('', Validators.required),
    });
  }
  addProduct(){
    this.ProductService.addProduct(this.product).subscribe(
      (data)=>{
        this.route.navigate(['admin',['product']]);
      },
      (error)=>{
          console.log(error);
      }
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


}
