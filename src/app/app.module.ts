import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './component/login/login.component';
import { IndexComponent } from './component/index/index.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { CreateUserComponent } from './component/create-user/create-user.component';
import { EditUserComponent } from './component/edit-user/edit-user.component';
import { AddTextComponent } from './component/add-text/add-text.component';
import {MaterialModule} from "./shared/material/material.module";
import { UserTextComponent } from './component/user-text/user-text.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    NavigationComponent,
    UserProfileComponent,
    CreateUserComponent,
    EditUserComponent,
    AddTextComponent,
    UserTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
