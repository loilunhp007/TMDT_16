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
import { BlogComponent } from './blog/blog.component';
import { SearchComponent } from './search/search.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { OrderComponent } from './admin/order/order.component';
import { OrderDetailComponent } from './admin/order-detail/order-detail.component';
import { ChartComponent } from './admin/chart/chart.component';
import { AdminguardGuard } from './admin/adminguard.guard';
import { UserOrderComponent } from './user-order/user-order.component';
import { UserOrderDetailComponent } from './user-order-detail/user-order-detail.component';
import { LayoutComponent } from './administrator/layout/layout.component';
import { AccountComponent } from './administrator/account/account.component';
const routes: Routes = [
  {
  path:'administrator',component:LayoutComponent,
  children:[
    {path:'account',component:AccountComponent}
  ]
  },
  {
    path:'admin',component: DashboardComponent,canActivate:[AdminguardGuard],
    children:[
      {
        path:"chart",component:ChartComponent
      },
      {
        path:"product",component:ProductComponent
      },
      {
        path:"users",component:UsersComponent
      },
      {
        path:"order",component:OrderComponent
      }
    ]
  },
  {path:'admin/orderdetail',
component:OrderDetailComponent},
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
    path:"home/order",
    component:UserOrderComponent,
  },
  {
    path:"home/order/orderdetail",
    component:UserOrderDetailComponent,
  },
  
  {
    path:"myprofile",
    component:MyprofileComponent,
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
