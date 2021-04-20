import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';
import { ShoplayoutComponent } from './shoplayout/shoplayout.component';
import { NotfoundexceptionComponent } from './notfoundexception/notfoundexception.component';
import { AdduserComponent } from './admin/user/adduser/adduser.component';
import { AdminMenuComponent } from './admin/admin-menu/admin-menu.component';
import { ControlMenuComponent } from './admin/control-menu/control-menu.component';
import { AddproductComponent } from './admin/product/addproduct/addproduct.component';
import { UsersComponent } from './admin/users/users.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductComponent } from './admin/product/product.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProductDetailComponent } from './product-detail/product-detail.component'
import { ModalModule, WavesModule, InputsModule, ButtonsModule, MDBBootstrapModule, IconsModule } from 'angular-bootstrap-md';
import { CartComponent } from './cart/cart.component';
import { BlogComponent } from './blog/blog.component';



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
    ProductDetailComponent,
    CartComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    ModalModule,
    WavesModule,
    InputsModule,
    ButtonsModule,
    MDBBootstrapModule.forRoot(),
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent
  ],


})
export class AppModule { }
