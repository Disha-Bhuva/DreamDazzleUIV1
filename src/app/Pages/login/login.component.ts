import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoginServices } from '../../Services/login.services';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private loginServices: LoginServices,

    private router: Router
  ) {}
  @Injectable({
    providedIn: 'root',
  })
  toastr = inject(ToastrService);
  isUserChecked: boolean = true;
  passwordFieldType: string = 'password';

  loginObj: any = {
    username: '',
    Password: '',
  };

  signUpForm: any = {
    FirstName: '',
    LastName: '',
    Email: '',
  };

  Islogin() {
    this.loginServices.UserLogin(this.loginObj).subscribe((res: any) => {
      if (res.isSuccess) {
        this.router.navigate(['/home']);
      } else {
        this.toastr.error(res.message, 'Login Failed');
      }
    });
  }

  IsSignUp() {
    this.loginServices.addUser(this.signUpForm).subscribe((res: any) => {
      if (res.isSuccess) {
        this.toastr.success(res.message, 'Sign-Up Successful');
        this.isUserChecked = true;
        this.router.navigate(['/login']);
      } else {
        this.toastr.error(res.message, 'Sign-Up Failed');
      }
    });
  }

  VerifyEmail() {
    this.loginServices
      .veryfyEmail(`?Email=${this.signUpForm.Email}`)
      .subscribe((res: any) => {
        if (res.isSuccess) {
          this.toastr.success(res.message, 'Email Verified');
        } else {
          this.toastr.error(res.message, 'Verification Failed');
        }
      });
  }

  forgotPassword() {
    this.loginServices
      .ForgotPassword(`?Email=${this.loginObj.username}`)
      .subscribe((res: any) => {
        if (res.isSuccess) {
          this.toastr.success(res.message, 'Password Reset Email Sent');
        } else {
          this.toastr.error(res.message, 'Password Reset Failed');
        }
      });
  }

  togglePasswordVisibility(): void {
    this.passwordFieldType =
      this.passwordFieldType === 'password' ? 'text' : 'password';
  }
}
