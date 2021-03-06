
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : Array<User>
  selectedUser : User
  action : String
  constructor(private userService: UserService,
    private router : Router,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
   this.userService.getUsers().subscribe(
     response => this.handleSuccessfulResponse(response),
   )
   this.activatedRoute.queryParams.subscribe(
    (params) => {
        this.action =  params['action']
      
    }
    )
  };


  handleSuccessfulResponse(response): void {
    this.users = response;
  };
  /*addUser(){
    this.selectedUser = new User();
    this.router.navigate(['admin','users'],{queryParams : {action : 'add'} })
  }*/

}
