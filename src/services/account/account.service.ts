import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalConstants } from '../../assets/common/globals';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  rootURL = GlobalConstants.apiURL;

  createAccount(initialBalance: number) {   
    return this.http.post(this.rootURL + '/api/account/create', (initialBalance ?? 0));
  }

  removeAccount() { 
    return this.http.delete(this.rootURL + '/api/account/delete');
  }
}
