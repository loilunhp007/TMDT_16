import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  users:Array<User>
  constructor(private userService:UserService) { }
  ngOnInit(): void {
    this.getUser();
  }
  getUser(){
    this.userService.getUsers().subscribe(
      Response=>{
        this.users=Response
      }
    )
  }
  updateStatus(user:User){
    let user2=user;
    let boolean =false
    if(user2.trangthai=="0"){
      boolean=true
    }
    if(boolean==true){
      user2.trangthai = "1" 
      this.userService.updateUser(user2).subscribe(
        Response=>{
          
        }
      )
    }
  
  if(boolean==false){
    user2.trangthai = "0" 
    this.userService.updateUser(user2).subscribe(
      Response=>{
        
      }
    )
  }
}
deleteUser(user:User){
  if(confirm("Bạn chắc chắn muốn xóa?")){
    this.userService.deleteUser(user.uid).subscribe(
      Response=>{
        this.exit()
      },
      (error)=>{
        this.exit()
      }
    )
  }
}
exit() {
  location.reload();
}
}
