import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User;
  loginForm = this.formBuilder.group({
    email: '',
    matkhau: ''
  })

  constructor(private userService : UserService,
    private route : Router,
    private formBuilder: FormBuilder) { }

  ngOnInit( ): void {
    this.user = new User();

  }
  get f(){return this.loginForm.controls}
  loginUser(){
    let role = "admin";
    this.user.email=  this.f.email.value;
    this.user.matkhau = this.f.matkhau.value;
    this.userService.loginUserFromRemote(this.user).subscribe(
      response => {this.user=response;
        console.log(this.user);
        sessionStorage.setItem("user",JSON.stringify(this.user));
        if(this.f.matkhau.value == this.user.matkhau){
            if(role == "admin"){
              this.route.navigate(["/admin"]);
            }else{this.route.navigate(["/home"]);}
          
        }


      },
      (error) =>{
        console.log(JSON.stringify(this.user));
        alert("Incorrect Email or password");
      }

    )
  }

}
