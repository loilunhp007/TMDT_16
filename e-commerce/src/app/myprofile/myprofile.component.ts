import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { User } from '../model/user';
import { UserDetail } from '../model/user-detail';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  date:Date
  date2:Date
  userForm = this.formBuilder.group({
    firstName:['',Validators.required],
    lastName : ['',Validators.required],
    phone:['',Validators.required],
    birthday:[''],
    email:[''],
    startDay:[''],
  })
  userId:String
  userDetail:UserDetail

  constructor(private formBuilder:FormBuilder,
    private userService:UserService) { }

  ngOnInit(): void {
    this.userDetail = new UserDetail();
    if(sessionStorage.getItem("user")!=null){
      this.userId = JSON.parse(sessionStorage.getItem("user"));
    }
    if(this.userId!=null){
      this.loadUser(this.userId);
      
    }
  }
  getForm(){
    return this.userForm.controls;
  }
  get Ho() {
    return this.userForm.get('lastName');
  }
  get Ten() {
    return this.userForm.get('firstName');
  }
  get SDT() {
    return this.userForm.get('phone');
  }

  get BirthDay() {
    return this.userForm.get('birthday');
  }
  get StartDay() {
    return this.userForm.get('startDay');
  }
  get Email() {
    return this.userForm.get('email');
  }
  loadUser(id:String){
    this.userService.getUserDetailByID(id).subscribe(
      Response=>{
          this.userDetail = Response;
          this.Ho.setValue(this.userDetail.ho,String);
          this.Ten.setValue(this.userDetail.ten,String)
          this.SDT.setValue(this.userDetail.sdt,String)
          this.Email.setValue(this.userDetail.gmail,String)
          this.BirthDay.setValue(this.userDetail.ngaysinh)
          this.StartDay.setValue(this.userDetail.ngaytao)
      }
    )

  }
  updateUser(){
    let user2 = new UserDetail();
    this.userService.getUserDetailByID(this.userId).subscribe(
      Response=>{
        user2=Response;
        user2.ho = this.Ho.value
        user2.ten = this.Ten.value
        user2.sdt = this.SDT.value
        user2.gmail = this.Email.value
        user2.ngaysinh= this.BirthDay.value;
        user2.ngaytao = this.StartDay.value;
        if(confirm("Bạn có chắc ?")){
          this.userService.updateUserDetail(this.userId,user2).subscribe(
            Response=>{
              alert("Update Sucess")
              this.exit();
            },
            (error)=>{
              console.error(error);
              alert("Update Sucess")
              
            }
            
          )
        }
        

      }
    )
  }
  exit() {
    location.reload();
  }
}
