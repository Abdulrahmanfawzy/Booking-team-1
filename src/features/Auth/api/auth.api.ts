import { axiosInstance } from "@/services/axiosInstance";
import type {
  CurrentUserResponse,
  LogoutResponse,
  DeleteAccountResponse,
  SignInFormValues,
  SignUpFormValues,
  VerifyOtpFormValues,
  ResetPasswordFormValues,
  RegisterRequest,
  LoginRequest,
  VerifyOtpRequest,
  ResendOtpRequest,
  ForgotPasswordRequest,
  VerifyResetOtpRequest,
  ResetPasswordRequest,
  GoogleLoginRequest,
  CompleteGoogleRegistrationRequest,
  RegisterResponse,
  LoginResponse,
  VerifyOtpResponse,
  ResendOtpResponse,
  ForgotPasswordResponse,
  VerifyResetOtpResponse,
  ResetPasswordResponse,
  GoogleLoginResponse,
  CompleteGoogleRegistrationResponse,
} from "../types/auth.types";


export const authApi = {

  getCurrentUser: async (): Promise<CurrentUserResponse> => {
    const { data } = await axiosInstance.get<CurrentUserResponse>("/user");
    return data;
  },

  logout: async (): Promise<LogoutResponse> => {
    const { data } = await axiosInstance.post<LogoutResponse>("/auth/logout");
    return data;
  },

  deleteAccount: async (): Promise<DeleteAccountResponse> => {
    const { data } = await axiosInstance.delete<DeleteAccountResponse>(
      "/auth/delete-account",
    );
    return data;
  },

  signUp: async (values: SignUpFormValues): Promise<RegisterResponse> => {
    const body: RegisterRequest = {
      name: values.fullName,
      email: values.email,
      phone: values.phone,
      password: values.password,
      password_confirmation: values.passwordConfirmation,
    };
    const { data } = await axiosInstance.post<RegisterResponse>("/auth/register", body);
    return data;
  },

  signIn: async (values: SignInFormValues): Promise<LoginResponse> => {
    const body: LoginRequest = {
      phone: values.phone,
      password: values.password,
    };
    const { data } = await axiosInstance.post<LoginResponse>("/auth/login", body);
    return data;
  },

  verifyOtp: async (
    phone: string,
    values: VerifyOtpFormValues,
  ): Promise<VerifyOtpResponse> => {
    const body: VerifyOtpRequest = { phone, otp: values.otp };
    const { data } = await axiosInstance.post<VerifyOtpResponse>("/auth/verify-otp", body);
    return data;
  },

  resendOtp: async (phone: string): Promise<ResendOtpResponse> => {
    const body: ResendOtpRequest = { phone };
    const { data } = await axiosInstance.post<ResendOtpResponse>("/auth/resend-otp", body);
    return data;
  },

  forgotPassword: async (phone: string): Promise<ForgotPasswordResponse> => {
    const body: ForgotPasswordRequest = { phone };
    const { data } = await axiosInstance.post<ForgotPasswordResponse>(
      "/auth/forgot-password",
      body,
    );
    return data;
  },

  verifyResetOtp: async (
    phone: string,
    otp: string,
  ): Promise<VerifyResetOtpResponse> => {
    const body: VerifyResetOtpRequest = { phone, otp };
    console.log(body);
    const { data } = await axiosInstance.post<VerifyResetOtpResponse>(
      "/auth/verify-reset-otp",
      body,
    );
    return data;
  },

  resetPassword: async (
    phone: string,
    resetToken: string,
    values: ResetPasswordFormValues,
  ): Promise<ResetPasswordResponse> => {
    const body: ResetPasswordRequest = {
      phone,
      reset_token: resetToken,
      password: values.password,
      password_confirmation: values.passwordConfirmation,
    };
    const { data } = await axiosInstance.post<ResetPasswordResponse>(
      "/auth/reset-password",
      body,
    );
    return data;
  },

  googleLogin: async (idToken: string): Promise<GoogleLoginResponse> => {
    const body: GoogleLoginRequest = { id_token: idToken };
    const { data } = await axiosInstance.post<GoogleLoginResponse>(
      "/auth/google-login",
      body,
    );
    return data;
  },

  completeGoogleRegistration: async (
    phone: string,
    tempToken: string,
  ): Promise<CompleteGoogleRegistrationResponse> => {
    const body: CompleteGoogleRegistrationRequest = {
      phone,
      temp_token: tempToken,
    };
    const { data } = await axiosInstance.post<CompleteGoogleRegistrationResponse>(
      "/auth/complete-google-registration",
      body,
    );
    return data;
  },
};

