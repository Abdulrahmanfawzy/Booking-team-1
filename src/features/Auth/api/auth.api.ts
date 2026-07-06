import type {
  SignInFormValues,
  SignUpFormValues,
  VerifyOtpFormValues,
  SignInResponse,
  SignUpResponse,
  VerifyOtpResponse,
  ResendOtpResponse,
} from "../types/auth.types";

/**
 * MOCK IMPLEMENTATION
 * -------------------
 * TODO: replace the bodies of these functions with real axios calls once
 * the Laravel endpoints are ready, e.g.:
 *
 *   import { axiosInstance } from "@/services/axiosInstance";
 *   export const authApi = {
 *     signIn: (values: SignInFormValues) =>
 *       axiosInstance.post<SignInResponse>("/auth/sign-in", values).then(r => r.data),
 *     ...
 *   };
 *
 * Keep the function signatures and return shapes exactly as they are below —
 * that's what lets us swap this file out without touching hooks/pages.
 */

const MOCK_DELAY = 900;

function delay<T>(value: T, ms = MOCK_DELAY): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

export const authApi = {
  signIn: async (values: SignInFormValues): Promise<SignInResponse> => {
    await delay(null);
    return {
      user: {
        id: "mock-user-1",
        fullName: "Mock User",
        email: "mock@example.com",
        phone: `${values.countryCode}${values.phone}`,
      },
      token: "mock-token",
    };
  },

  signUp: async (values: SignUpFormValues): Promise<SignUpResponse> => {
    await delay(null);
    return {
      user: {
        id: "mock-user-1",
        fullName: values.fullName,
        email: values.email,
        phone: `${values.countryCode}${values.phone}`,
      },
      token: "mock-token",
    };
  },

  // Simulates the "Wrong code" state from the Figma design.
  // Type 1234 as the OTP to simulate success.
  verifyOtp: async (values: VerifyOtpFormValues): Promise<VerifyOtpResponse> => {
    await delay(null);
    if (values.otp !== "1234") {
      throw new Error("WRONG_CODE");
    }
    return {
      user: {
        id: "mock-user-1",
        fullName: "Mock User",
        email: "mock@example.com",
        phone: "",
      },
      token: "mock-token",
    };
  },

  resendOtp: async (): Promise<ResendOtpResponse> => {
    await delay(null);
    return { success: true };
  },
};