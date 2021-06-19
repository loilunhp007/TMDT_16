import { Byte } from "@angular/compiler/src/util";
import { UserDetail } from "./user-detail";

export class Product {
    masp: string;
    maloai : string;
    tensp:string;
    gia: number;
    hinhanh :Blob;
    thongtinsanpham:string;
    soluong:number;
    danhgia:number;
    luotxem:number;
    trangthai:number;
    userDetail:UserDetail;
    constructor(){}
}
