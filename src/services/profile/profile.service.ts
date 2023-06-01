import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalConstants } from '../../assets/common/globals';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) {

  }

  rootURL = GlobalConstants.apiURL;

  getUsers() {
    return this.http.get(this.rootURL + '/api/user/get/profile');
  }
}
