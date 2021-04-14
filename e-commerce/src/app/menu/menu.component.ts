import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    isLogged = false;
     user = JSON.parse(sessionStorage.getItem("user"));
  constructor(private httpClientService : HttpClientService,
    private router:Router) {     
  }

  ngOnInit(): void {

  }
  isLoggedIn(){
    this.isLogged = this.httpClientService.isLogged();
    return this.isLogged;
  }
  logout(){
    this.isLogged = this.httpClientService.logOut();
    return this.router.navigate(["/home/login"]);
  }

}
