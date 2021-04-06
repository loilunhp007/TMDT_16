import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : Array<User>
  constructor(private httpClientService: HttpClientService) { }

  ngOnInit(): void {
   this.httpClientService.getUser().subscribe(
     Response => this.handleSuccessfulResponse(Response),
   );

  }
  handleSuccessfulResponse(response): void {
    this.users = response;
  }

}
