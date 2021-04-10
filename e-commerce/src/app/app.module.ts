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


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsersComponent,
    AdduserComponent,
    AdminMenuComponent,
    FooterComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent
  ],


})
export class AppModule { }
