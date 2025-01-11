import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  getAllReview,
  addUser,
  EmailVerify,
  ForgotPassword,
  getall,
  resetPassword,
  UserLogin,
} from '../Constant/api.conts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginServices {
  constructor(private http: HttpClient) {}

  veryfyEmail(Mail: string) {
    return this.http.get(`${EmailVerify}/${Mail}`);
  }

  addUser(data: void) {
    return this.http.post(addUser, data);
  }
  getall(data: void) {
    return this.http.post(getall, data);
  }

  UserLogin(login: any) {
    return this.http.post(UserLogin, login);
  }
  ForgotPassword(Mail: string) {
    return this.http.get(`${ForgotPassword}/${Mail}`);
  }

  resetPassword(data: void) {
    return this.http.post(resetPassword, data);
  }
  getAllReview(): Observable<ProductReview[]> {
    return this.http.get<ProductReview[]>(getAllReview);
  }
}
export interface ProductReview {
  productReviewId: string;
  userId: string;
  productId: string;
  description: string;
  ratings: number;
  reviewDate: string;
}
