import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

    @Input()
    user : User
    
  constructor(private userService : UserService,
    private route : Router) { }

  ngOnInit(): void {

  }
  addUser(){
    this.userService.addUser(this.user).subscribe(
      (user) => {
        this.route.navigate(['admin',['user']]);
      }
    )
  }

}
