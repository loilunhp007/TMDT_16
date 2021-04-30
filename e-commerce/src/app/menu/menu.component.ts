import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { UserDetail } from '../model/user-detail';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  formSearch = this.formBuilder.group({
    searchValue:[''],
  });
    searchText;
    isLogged = false;
     userId = JSON.parse(sessionStorage.getItem("user"));
     userDetail:UserDetail
  constructor(private userService : UserService,
    private router:Router,
    private actRoute:ActivatedRoute,
    private formBuilder:FormBuilder
    ) {     
  }

  ngOnInit(): void {
    this.userDetail = new UserDetail();
    if(this.userId!=null){
      this.userService.getUserDetailByID(this.userId).subscribe(
        Response=>{this.userDetail=Response}
      )
    }
     
  }
  isLoggedIn(){
    this.isLogged = this.userService.isLogged();
    return this.isLogged;
  }
  logout(){
    this.isLogged = this.userService.logOut();
    return this.router.navigate(["/home/login"]);
  }
  searchProduct(){
    const keyword= this.getFormControls().searchValue.value;
    this.router.navigate(['home','search'],{queryParams:{keyword}})
  }
     
  getFormControls(){
        return this.formSearch.controls;
    }
}

