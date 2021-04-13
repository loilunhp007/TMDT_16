import { Component, OnInit } from '@angular/core';
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
  constructor(private httpClientService : HttpClientService) {     
  }

  ngOnInit(): void {

  }
  isLoggedIn(){
    this.isLogged = this.httpClientService.isLogged();
    return this.isLogged;
  }

}
