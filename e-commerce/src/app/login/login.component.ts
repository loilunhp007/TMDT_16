import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    email: '',
    matkhau: ''
  })
  user:User;
  emailId:string;
  password:string;
  
  constructor(private httpClientService : HttpClientService,
    private route : Router,
    private formBuilder: FormBuilder) { }

  ngOnInit( ): void {

  }
  get f(){return this.loginForm.controls}
  loginUser(){
    let role = "admin";
    this.emailId=  this.f.email.value;
    this.password = this.f.matkhau.value;
    this.httpClientService.loginUserFromRemote(this.emailId,this.password).subscribe(
      response => {this.user=response;
        sessionStorage.setItem("user",JSON.stringify(this.user));
        if(this.password == this.user.matkhau){
            if(role =="admin"){
              this.route.navigate(["/dashboard"]);
            }
          this.route.navigate(["/home"]);
        }


      },
      (error) =>{
        alert("Incorrect Email or password");
      }

    )
  }

}
