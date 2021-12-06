import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {User} from "../entity/user";

const CLIENT_API = 'api/admin_client/';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(private http: HttpClient) { }

  createText(clientId: string, text: Text): Observable<any> {
    return this.http.post(environment.baseUrl + CLIENT_API + clientId + 'create_text', text);
  }

  getAllTexts(clientId: string): Observable<any> {
    return this.http.get(environment.baseUrl + CLIENT_API + clientId + 'texts');
  }

  getTextById(clientId: string, textId: string): Observable<any> {
    return this.http.get(environment.baseUrl + CLIENT_API + clientId + 'texts/' + textId);
  }
}
