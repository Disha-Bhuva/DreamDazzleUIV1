import { environment } from '../../environments/environment';

export const BaseURI = environment.BaseURI;
export const addUser = BaseURI + 'User/AddUsers';
export const EmailVerify = BaseURI + 'User/EmailVerify';
export const UserLogin = BaseURI + 'User/UserLogin';
export const ForgotPassword = BaseURI + 'User/ForgotPasswordSentEmail';
export const resetPassword = BaseURI + 'User/ResetPassword';
export const getall = BaseURI + 'Category/GetAll';
export const getAllReview = BaseURI + 'Review/GetAllReviews';
