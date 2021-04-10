import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

    @Input()
    user : User
    
  constructor(private httpClientService : HttpClientService,
    private route : Router) { }

  ngOnInit(): void {

  }
  addUser(){
    this.httpClientService.addUser(this.user).subscribe(
      (user) => {
        this.route.navigate(['admin',['user']]);
      }
    )
  }

}
