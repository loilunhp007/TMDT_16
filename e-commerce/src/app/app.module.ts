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
import { ModalModule, WavesModule, InputsModule, ButtonsModule, MDBBootstrapModule, IconsModule, ModalDirective } from 'angular-bootstrap-md';
import { CartComponent } from './cart/cart.component';
import { BlogComponent } from './blog/blog.component';
import { UpdateProductComponent } from './admin/product/update-product/update-product.component';
import { FileSaverModule } from 'ngx-filesaver';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchComponent } from './search/search.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ChartComponent } from './chart/chart.component';
import { MyprofileComponent } from './myprofile/myprofile.component';





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
    UpdateProductComponent,
    SearchComponent,
    CheckoutComponent,
    ChartComponent,
    MyprofileComponent,
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
    IconsModule,
    FileSaverModule,
    ModalModule,
    Ng2SearchPipeModule,
    MatSelectModule,
    MatSlideToggleModule,
    NgxPaginationModule
  ],
  providers: [ModalDirective],
  bootstrap: [AppComponent
  ],


})
export class AppModule { }
