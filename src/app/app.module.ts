import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AddpostsComponent } from './addposts/addposts.component';
import { ViewpostsComponent } from './viewposts/viewposts.component';
import { UsersAppliedComponent } from './users-applied/users-applied.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserHomeComponent } from './user-home/user-home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminhomeComponent,
    AddpostsComponent,
    ViewpostsComponent,
    UsersAppliedComponent,
    UserprofileComponent,
    UserHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
