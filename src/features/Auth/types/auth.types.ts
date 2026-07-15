export interface Country {
  code: string; // ISO 3166-1 alpha-2, e.g. "EG"
  name: string; // e.g. "Egypt"
  dialCode: string; // e.g. "+20"
}

// ---- Form values (what the UI collects) ----

export interface SignInFormValues {
  phone: string;
  password: string;
}

export interface SignUpFormValues {
  fullName: string;
  email: string;
  countryCode: string; // Country.code — used to build the phone the API expects
  phone: string;
  password: string;
  passwordConfirmation: string;
}

export interface VerifyOtpFormValues {
  otp: string;
}

export interface ForgotPasswordFormValues {
  phone: string;
}

export interface ResetPasswordFormValues {
  password: string;
  passwordConfirmation: string;
}

export interface CompleteGoogleRegistrationFormValues {
  countryCode: string;
  phone: string;
}

// ---- API request bodies (exact shape the backend expects) ----

export interface RegisterRequest {
  name: string;
  email: string;
  phone: string;
  password: string;
  password_confirmation: string;
}

export interface LoginRequest {
  phone: string;
  password: string;
}

export interface VerifyOtpRequest {
  phone: string;
  otp: string;
}

export interface ResendOtpRequest {
  phone: string;
}

export interface ForgotPasswordRequest {
  phone: string;
}

export interface VerifyResetOtpRequest {
  phone: string;
  otp: string;
}

export interface ResetPasswordRequest {
  phone: string;
  reset_token: string;
  password: string;
  password_confirmation: string;
}

export interface GoogleLoginRequest {
  id_token: string;
}

export interface CompleteGoogleRegistrationRequest {
  phone: string;
  temp_token: string;
}

// ---- API response shapes (confirmed from Postman collection) ----

export interface ApiUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  image: string | null;
  phone_verified_at: string | null;
  created_at: string;
}

export interface VerifyOtpResponse {
  success: boolean;
  message: string;
  data: unknown[]; // backend returns an empty array here, confirmed
}

export interface ResendOtpResponse {
  success: boolean;
  message: string;
  data?: unknown;
}

// Confirmed: real response is { success, message, data: { user, token } } —
// same shape we guessed, just user/token order swapped (doesn't matter in JS).

export interface ForgotPasswordResponse {
  success: boolean;
  message: string;
  data: unknown[];
}

export interface VerifyResetOtpResponse {
  success: boolean;
  message: string;
  data: {
    reset_token: string;
  };
}

export interface ResetPasswordResponse {
  success: boolean;
  message: string;
  data: unknown[];
}

// TODO: not confirmed with real backend response yet — the only Google
// response we've seen so far is the "package not installed" error.
// Once google/apiclient is installed on the backend and a real success
// response comes back, confirm this shape (especially requires_phone /
// temp_token field names) and adjust here + in useGoogleLogin if needed.
export interface GoogleLoginResponse {
  success: boolean;
  message: string;
  data?: {
    token?: string;
    user?: ApiUser;
    requires_phone?: boolean;
    temp_token?: string;
  };
}

export interface CompleteGoogleRegistrationResponse {
  success: boolean;
  message: string;
  data: {
    user: ApiUser;
    token: string;
  };
}

export interface ApiErrorResponse {
  success: false;
  message: string;
  errors?: Record<string, string[]>;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  data: ApiUser;
}

// Confirmed: real response is { success, message, data: { user, token } } —
// same shape we guessed, just user/token order swapped (doesn't matter in JS).
export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    user: ApiUser;
    token: string;
  };
}

export interface CurrentUserResponse {
  success: boolean;
  message: string;
  data: ApiUser;
}

export interface LogoutResponse {
  success: boolean;
  message: string;
  data?: unknown;
}

export interface DeleteAccountResponse {
  success: boolean;
  message: string;
  data?: unknown;
}
