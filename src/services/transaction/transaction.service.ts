import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalConstants } from '../../assets/common/globals';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  rootURL = GlobalConstants.apiURL;

  getTransactions() {
    return this.http.get(this.rootURL + '/api/transaction/get',{headers :{}});
  }
}
