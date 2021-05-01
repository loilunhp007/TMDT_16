import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDetail } from '../model/user-detail';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminguardGuard implements CanActivate {
 
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        let userId=JSON.parse(sessionStorage.getItem('user'));
        if(userId!=null){
          return true;
        }else{
          this.router.navigate(['/home'])
          return false;
        
        return false;
  }
}
  
  
}
