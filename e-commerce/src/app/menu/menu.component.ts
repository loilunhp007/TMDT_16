import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { UserDetail } from '../model/user-detail';
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
     userId = JSON.parse(sessionStorage.getItem("user"));
     userDetail:UserDetail
     DELLs:any = [{name:'DELL PRECISION'},{name:'DELL LATITULE'},{name:'DELL ALIENWARE'},{name:'DELL XPS'},{name:'DELL VOSTRO'},{name:'DELL INSPIRON'}]
     HPs:any=[{name:'HP ELITEBOOK'},{name:'HP ENVY'},{name:'HP PROBOOK'},{name:'HP PAVILION'},{name:'HP ZBOOK'},{name:'HP SPECTRE'},{name:'HP OMEN'}]
     ASUSs:any=[{name:'ASUS G'},{name:'ASUS UX'},{name:'ASUS X'},{name:'ASUS K'},{name:'ASUS N'},{name:'ASUS PU'},]
     LENOVOs:any=[{name:'LENOVO THINKPAD'},{name:'LENOVO THINKBOOK'},{name:'LENOVO IDEAPAD'},{name:'LENOVO YOGA'},{name:'LENOVO LEGION'},]
     ACERs:any=[{name:'ACER ASPIRE'},{name:'ACER NITRO'},{name:'ACER SWIFT'},{name:'ACER PREDATOR'}]
     MSIs:any=[{name:'MSI MODERN'},{name:'MSI GF'},{name:'MSI GL'},{name:'MSI BRAVO'},{name:'MSI GS'},{name:'MSI PRESTIGE'}]
  constructor(private userService : UserService,
    private router:Router,
    private actRoute:ActivatedRoute,
    private formBuilder:FormBuilder
    ) {     
  }

  ngOnInit(): void {
    console.log(this.DELLs)
    this.userDetail = new UserDetail();
    if(this.userId!=null){
      this.userService.getUserDetailByID(this.userId).subscribe(
        Response=>{this.userDetail=Response}
      )
    }
     
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
  findByCategory(keyword2:String){
    let keyword=keyword2.toLowerCase()
    this.router.navigate(['home','search'],{queryParams:{keyword}})
  }
     
  getFormControls(){
        return this.formSearch.controls;
    }
}

