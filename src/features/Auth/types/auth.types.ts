export interface Country {
  code: string;
  name: string; 
  dialCode: string; 
  flag: string; 
}

export interface SignInFormValues {
  countryCode: string; 
  phone: string;
}

export interface SignUpFormValues {
  fullName: string;
  email: string;
  countryCode: string; 
  phone: string;
}

export interface VerifyOtpFormValues {
  otp: string;
}

export interface AuthUser {
  id: string;
  fullName: string;
  email: string;
  phone: string;
}

export interface SignInResponse {
  user: AuthUser;
  token: string;
}

export type SignUpResponse = SignInResponse;
export type VerifyOtpResponse = SignInResponse;

export interface ResendOtpResponse {
  success: true;
}