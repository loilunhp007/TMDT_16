import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
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
     user = JSON.parse(sessionStorage.getItem("user"));
  constructor(private userService : UserService,
    private router:Router,
    private actRoute:ActivatedRoute,
    private formBuilder:FormBuilder
    ) {     
  }

  ngOnInit(): void {
     
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

