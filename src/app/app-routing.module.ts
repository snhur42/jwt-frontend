import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {IndexComponent} from "./component/index/index.component";
import {UserProfileComponent} from "./component/user-profile/user-profile.component";
import {UserTextComponent} from "./component/user-text/user-text.component";
import {AddTextComponent} from "./component/add-text/add-text.component";
import {CreateUserComponent} from "./component/create-user/create-user.component";
import {AuthGuard} from "./shared/auth.guard";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'create_user', component: CreateUserComponent},
  {path: 'main', component: IndexComponent, canActivate: [AuthGuard]},
  {
    path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard], children: [
      {path: '', component: UserTextComponent, canActivate: [AuthGuard]},
      {path: 'add', component: AddTextComponent, canActivate: [AuthGuard]}
    ]
  },
  {path: '', redirectTo: 'main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
