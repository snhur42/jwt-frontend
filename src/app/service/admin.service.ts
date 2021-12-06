import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {User} from "../entity/user";

const ADMIN_API = 'api/admin_panel/';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) { }

  createAdmin(user: User): Observable<any> {
    return this.http.post(environment.baseUrl + ADMIN_API + 'create_admin', user);
  }

  getAllAdmins(): Observable<any> {
    return this.http.get(environment.baseUrl + ADMIN_API + 'admins');
  }

  getAdminById(adminId: string): Observable<any> {
    return this.http.get(environment.baseUrl + ADMIN_API + 'admins/' + adminId);
  }

  updateAdmin(user: User): Observable<any> {
    return this.http.post(environment.baseUrl + ADMIN_API + 'admins', user);
  }

  createClient(user: User): Observable<any> {
    return this.http.post(environment.baseUrl + ADMIN_API + 'create_client', user);
  }

  getAllClients(): Observable<any> {
    return this.http.get(environment.baseUrl + ADMIN_API + 'clients');
  }

  getClientById(clientId: string): Observable<any> {
    return this.http.get(environment.baseUrl + ADMIN_API + 'clients/' + clientId);
  }

  updateClient(user: User): Observable<any> {
    return this.http.post(environment.baseUrl + ADMIN_API + 'clients', user);
  }


  getAllTexts(): Observable<any> {
    return this.http.get(environment.baseUrl + ADMIN_API + 'texts');
  }

  getTextById(textId: string): Observable<any> {
    return this.http.get(environment.baseUrl + ADMIN_API + 'texts/' + textId);
  }
}
