import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    searchText;
    isLogged = false;
     user = JSON.parse(sessionStorage.getItem("user"));
  constructor(private userService : UserService,
    private router:Router) {     
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

}
