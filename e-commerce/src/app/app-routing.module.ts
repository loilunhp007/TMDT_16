import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminMenuComponent } from './admin/admin-menu/admin-menu.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductComponent } from './admin/product/product.component';
import { UsersComponent } from './admin/users/users.component';
import { CartComponent } from './cart/cart.component';

import { CategoryComponent } from './category/category.component';

import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { NotfoundexceptionComponent } from './notfoundexception/notfoundexception.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShoplayoutComponent } from './shoplayout/shoplayout.component';
import { AuthGuardService as AuthGuard } from './service/auth-guard.service';
import { BlogComponent } from './blog/blog.component';
import { SearchComponent } from './search/search.component';
import { CheckoutComponent } from './checkout/checkout.component';
const routes: Routes = [
  {
    path:'admin',component: DashboardComponent,
    children:[
      {
        path:"product",component:ProductComponent
      },
      {
        path:"users",component:UsersComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path:'home',component:ShoplayoutComponent,
    
  
  },
  {
    path:"home/cart",
    component:CartComponent,
  },
  {
    path:'home/product-detail',
    component:ProductDetailComponent
  },
  {
    path:"home/blog",component:BlogComponent,
  },
  {
    path:"home/checkout",component:CheckoutComponent,
  },
  {
    path:"home/search",component:SearchComponent,
  },
  {
    path:'home/login', component: LoginComponent,
  },
  {
    path:'**', component: NotfoundexceptionComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
