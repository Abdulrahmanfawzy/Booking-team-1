import { useMutation } from "@tanstack/react-query";
import { authApi } from "../api/auth.api";

export function useSignIn() {
  return useMutation({
    mutationFn: authApi.signIn,
  });
}

export function useSignUp() {
  return useMutation({
    mutationFn: authApi.signUp,
  });
}

export function useVerifyOtp() {
  return useMutation({
    mutationFn: authApi.verifyOtp,
  });
}

export function useResendOtp() {
  return useMutation({
    mutationFn: authApi.resendOtp,
  });
}