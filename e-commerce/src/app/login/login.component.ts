import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { UserDetail } from '../model/user-detail';
import { UserService } from '../service/user.service';
import {FormGroup} from'@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  date= new Date();
  max:number;
  userDetail:UserDetail;
  user:User;


  loginForm = this.formBuilder.group({
    email:['',Validators.required],
    matkhau: ['',Validators.required]
  })
  registerForm = this.formBuilder.group({
    regisFirstName: ['',Validators.required],
    regisLastName: ['',Validators.required],
    regisPhone: ['',[
                    Validators.required,
                    Validators.pattern('^((\\+84-?)|0)?[0-9]{10}$')
                ]],
    regisEmail: ['',[
                    //^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$
                    //^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$
                    Validators.required,
                    Validators.email
                ]],
    regisPassword: ['',
                    [Validators.minLength(6),
                     Validators.required,
                     Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$') 
                    ]]
  })


  matv:String
  action:string
  constructor(private userService : UserService,
    private route : Router,
    private formBuilder: FormBuilder,
    private activeRoute:ActivatedRoute) {    }

  ngOnInit( ): void {
    this.activeRoute.queryParams.subscribe(
      (params) => {
          this.action =  params['action']
        
      }
      )
    this.userDetail= new UserDetail();
    this.user = new User();
  }
  get f(){return this.loginForm.controls}
  get f1(){ return this.registerForm.controls}
  validate( str:String){
    str.toLowerCase();
    return str;
  }
  loginUser(){
    this.user.email=  this.f.email.value;
    this.user.matkhau = this.f.matkhau.value;
    this.userService.loginUserFromRemote(this.user).subscribe(
      response => {this.user=response;
        sessionStorage.setItem("user",JSON.stringify(this.user.matv));
        if(this.f.matkhau.value == this.user.matkhau){
              alert("login sucess")
              this.userService.getUserDetailByID(this.user.matv+'').subscribe(
                Response=>{
                  this.userDetail = new UserDetail();
                  this.userDetail=Response;
                  if(this.userDetail.loaithanhvien=="01"){
                    this.route.navigate(["/administrator"])
                  }
                }
              )
              this.route.navigate(["/home"])
          
        }


      },
      (error) =>{
        console.log(JSON.stringify(this.user));
        alert("Incorrect Email or password");
      }

    )
  }
  registerNewUser(){
    const day=this.date.getDate();
    const month = this.date.getMonth()+1;
    const year = this.date.getFullYear();
    const loaithanhvien="02";
    this.userService.getMaxUser().subscribe(
      response=>{ this.max=response;     
        const random = Math.floor(Math.random() * (99 - 10))+1;
        //userDetail
          this.matv= random+''+this.max; 
          this.userDetail.matv=this.matv;
          this.userDetail.loaithanhvien=loaithanhvien;
          this.userDetail.ho = this.validate(this.f1.regisLastName.value);
          this.userDetail.ten = this.validate(this.f1.regisFirstName.value);
          this.userDetail.sdt = this.validate(this.f1.regisPhone.value);
          this.userDetail.ngaytao = year.toString()+'-'+month+'-'+day;
          this.userDetail.trangthai="1";
          this.userService.addUserDetail(this.userDetail).subscribe(
            (data)=>{
              this.user.email=this.validate(this.f1.regisEmail.value);
              this.user.matkhau = this.validate(this.f1.regisPassword.value);
              this.user.trangthai="1";
              this.user.matv= this.matv;
              this.userService.addUser(this.user).subscribe(
                      (user)=>{
                        sessionStorage.setItem("user",JSON.stringify(this.user.matv));
                          this.route.navigate(['/home']);
                      },
                      (error)=>{}
                    );       
              }),(error)=>{}
             //user
    
          }),
          (error)=>{

              }
        }
        get email(){
          return this.loginForm.get('email')
        }
        get matkhau(){
          return this.loginForm.get('matkhau')
        }
        get regisFirstName(){
          return this.registerForm.get('regisFirstName')
        }
        get regisLastName(){
          return this.registerForm.get('regisLastName')
        }
        get regisPhone(){
          return this.registerForm.get('regisPhone')
        }
        get regisEmail(){
          return this.registerForm.get('regisEmail')
        }
        get regisPassword(){
          return this.registerForm.get('regisPassword')
        }
      }
