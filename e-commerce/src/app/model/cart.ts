import { Sanpham } from "./sanpham";
import { UserDetail } from "./user-detail";

export class Cart {
    id:number;
    product = new Sanpham();
    userDetail = new UserDetail()
    soluong:number;

}
