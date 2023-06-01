import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../../services/login/login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { setCookie } from '../../../assets/common/cookies.js'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private apiLogin: LoginService, private router: Router) {

  }

  userName: string = "";
  password: string = "";
  loginForm: any;
  error:string = "";
  
  ngOnInit() {
    this.loginForm = new FormGroup({
      userName: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    });
  }
  onClickSubmit(data: any) {
    if (this.loginForm.invalid) {
      this.error = "Please enter your credentials"
      return;
    }

    this.userName = data.userName;
    this.password = data.password;

    this.apiLogin.login(this.userName, this.password).subscribe((response: any) => {
      setCookie("token", response.token, 1);
      this.router.navigate(['/profile']);
    }, (error: HttpErrorResponse) => {
      this.error = error.error;
    })
  }
}
