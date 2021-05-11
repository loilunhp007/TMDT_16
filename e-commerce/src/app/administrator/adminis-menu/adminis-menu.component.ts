import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-adminis-menu',
  templateUrl: './adminis-menu.component.html',
  styleUrls: ['./adminis-menu.component.css']
})
export class AdminisMenuComponent implements OnInit {

  isLogged=false;
  constructor(private userService:UserService,
    private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.isLogged = this.userService.logOut();
    return this.router.navigate(["/home/login"]);
  }


}
