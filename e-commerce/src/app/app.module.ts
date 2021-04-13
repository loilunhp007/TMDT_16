import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './admin/users/users.component';
import { MenuComponent } from './menu/menu.component';
import { AdduserComponent } from './admin/user/adduser/adduser.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminMenuComponent } from './admin/admin-menu/admin-menu.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';
import { ShoplayoutComponent } from './shoplayout/shoplayout.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { NotfoundexceptionComponent } from './notfoundexception/notfoundexception.component';
import { ProductComponent } from './admin/product/product.component';
import { ControlMenuComponent } from './admin/control-menu/control-menu.component';
import { AddproductComponent } from './admin/product/addproduct/addproduct.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsersComponent,
    AdduserComponent,
    AdminMenuComponent,
    FooterComponent,
    CategoryComponent,
    LoginComponent,
    ShoplayoutComponent,
    DashboardComponent,
    ProductComponent,
    NotfoundexceptionComponent,
    ControlMenuComponent,
    AddproductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent
  ],


})
export class AppModule { }
