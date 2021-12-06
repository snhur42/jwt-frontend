import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment";
import {Role} from "../entity/role";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(username: string, password: string): Observable<any> {
    return this.http.post(environment.baseUrl + 'api/auth/login', {
      username: username,
      password: password
    });
  }

  public  createUser(firstName: string, lastName: string, email: string, phone: string, password: string,  role: Role) {
    return this.http.post(environment.baseUrl + 'api/admin_panel/create_admin', {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      password: password,
      role: role,
    });
  }

  // public logout(): Observable<any> {
  //   return this.http.post(environment.baseUrl + 'api/auth/logout',);
  // }
}
