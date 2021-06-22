import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sanpham } from '../model/sanpham';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  s:any=[]
  constructor(private httpClient : HttpClient) {

  }
  getProduct(matv:String):Observable<Sanpham[]>{
    return this.httpClient.get<Sanpham[]>("https://be-ecommerce1.herokuapp.com/products/get/matv/"+matv);
  }
  addProduct(sanpham: Sanpham,file:File):Observable<any>{
    let myForm:FormData = new FormData();
    myForm.append('file', file);
    myForm.append('sanpham', JSON.stringify(sanpham));
    console.log(myForm);
   return this.httpClient.post<Sanpham>("https://be-ecommerce1.herokuapp.com/products/add",myForm);
  }
  getProductByName(tensp:String){
   return this.httpClient.get<Sanpham[]>("https://be-ecommerce1.herokuapp.com/product/get/"+tensp);
  }
  getProductByID(masp:String):Observable<any>{
    return this.httpClient.get<Sanpham>('https://be-ecommerce1.herokuapp.com/products/get/'+masp);
  }
  updateProduct(sanpham : Sanpham):Observable<any>{
    return  this.httpClient.put<Sanpham>("https://be-ecommerce1.herokuapp.com/products/put/"+sanpham.masp,sanpham);
  }
  deteleProductByID(masp:String):Observable<any>{
    return this.httpClient.delete<Sanpham>("https://be-ecommerce1.herokuapp.com/products/delete/"+masp);
  }
  getProductByTrangthai(trangthai:number):Observable<any>{
    return this.httpClient.get<Sanpham[]>('https://be-ecommerce1.herokuapp.com/products/get/trangthai/'+trangthai)
  }
  getProductByLikeName(k:String):Observable<any>{
    return this.httpClient.get<Sanpham[]>('https://be-ecommerce1.herokuapp.com/products/get/tensp/'+k)
  }
}
