import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../services/profile/profile.service';
import { AccountService } from '../../../services/account/account.service';
import { TransactionService } from '../../../services/transaction/transaction.service';
import { getCookie, setCookie } from '../../../assets/common/cookies.js'
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  profile: any;
  transactions: any;
  hasAccount: boolean = false;
  public initialBalance: number = 0;

  dtOptions = {
    pagingType: 'full_numbers',
    pageLength: 5,
    processing: true
  };

  constructor(private apiProfile: ProfileService, private apiAccount: AccountService, private apiTransaction: TransactionService, private router: Router) {
    var token = getCookie("token");
    if (token == null || token == "") {
      this.logOut();
    }
  }

  async ngOnInit() {
    await this.getUserInfo();
    await this.getTransactions();
  }

  async getUserInfo() {
    await this.apiProfile.getUsers().subscribe((data) => {
      this.profile = data;
      this.hasAccount = (this.profile.hasAccount == 1)
      console.log(this.profile)
    }, (error: HttpErrorResponse) => {
      if (error.status == 401) {
        this.logOut();
      }
    })
  }

  async getTransactions() {
    await this.apiTransaction.getTransactions().subscribe((data) => {
      this.transactions = data;
    }, (error: HttpErrorResponse) => {
      if (error.status == 401) {
        this.logOut();
      }
    })
  }

  async create() {
    this.apiAccount.createAccount(this.initialBalance).subscribe(async () => {
      await this.getUserInfo();
      await this.getTransactions();
    }, (error: HttpErrorResponse) => {
      if (error.status == 401) {
        this.logOut();
      }
    })
  }

  async remove() {
    this.apiAccount.removeAccount().subscribe(async () => {
      await this.getUserInfo();
      await this.getTransactions();
    }, (error: HttpErrorResponse) => {
      if (error.status == 401) {
        this.logOut();
      }
    })
  }

  logOut() {
    setCookie("token", '', -1);
    this.router.navigate(['/login']);
  }
}
