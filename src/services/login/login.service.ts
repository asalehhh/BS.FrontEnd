import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalConstants } from '../../assets/common/globals';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

  }

  rootURL = GlobalConstants.apiURL;

  login(userName: string, password: string) {
    return this.http.post(this.rootURL + '/api/user/Login', { userName: userName, password: password });
  }
}
