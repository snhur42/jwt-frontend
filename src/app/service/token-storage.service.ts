import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {User} from "../entity/user";

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() {
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(environment.tokenKey);
    window.sessionStorage.setItem(environment.tokenKey, token);
  }

  public getToken(): string {
    // @ts-ignore
    return sessionStorage.getItem(environment.tokenKey);
  }

  public saveUser(user: User): void {
    window.sessionStorage.removeItem(environment.userKey);
    window.sessionStorage.setItem(environment.userKey, JSON.stringify(user));
  }

  public getUser(): string {
    // @ts-ignore
    return JSON.parse(sessionStorage.getItem(environment.userKey))
  }

  logOut(): void {
    window.sessionStorage.clear();
    window.location.reload();
  }
}

