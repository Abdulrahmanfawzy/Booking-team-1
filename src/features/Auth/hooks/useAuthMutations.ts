import { useMutation , useQueryClient} from "@tanstack/react-query";
import { authApi } from "../api/auth.api";
import type { VerifyOtpFormValues, ResetPasswordFormValues } from "../types/auth.types";

export function useSignUp() {
  return useMutation({
    mutationFn: authApi.signUp,
  });
}

export function useSignIn() {
  return useMutation({
    mutationFn: authApi.signIn,
    onSuccess: (data) => {
      if (data?.data?.token) {
        localStorage.setItem("auth_token", data.data.token);
      }
    },
  });
}

export function useVerifyOtp() {
  return useMutation({
    mutationFn: ({ phone, values }: { phone: string; values: VerifyOtpFormValues }) =>
      authApi.verifyOtp(phone, values),
  });
}

export function useResendOtp() {
  return useMutation({
    mutationFn: (phone: string) => authApi.resendOtp(phone),
  });
}

export function useForgotPassword() {
  return useMutation({
    mutationFn: (phone: string) => authApi.forgotPassword(phone),
  });
}

export function useVerifyResetOtp() {
  return useMutation({
    mutationFn: ({ phone, otp }: { phone: string; otp: string }) =>
      authApi.verifyResetOtp(phone, otp),
  });
}

export function useResetPassword() {
  return useMutation({
    mutationFn: ({
      phone,
      resetToken,
      values,
    }: {
      phone: string;
      resetToken: string;
      values: ResetPasswordFormValues;
    }) => authApi.resetPassword(phone, resetToken, values),
  });
}

export function useGoogleLogin() {
  return useMutation({
    mutationFn: authApi.googleLogin,
    onSuccess: (data) => {
      // لو المستخدم عنده حساب أصلاً (مش محتاج phone)، هيرجع token زي أي login عادي
      if (data?.data?.token) {
        localStorage.setItem("auth_token", data.data.token);
      }
      // لو requires_phone === true، مفيش token لسه، هننتقل لصفحة استكمال البيانات
    },
  });
}

export function useCompleteGoogleRegistration() {
  return useMutation({
    mutationFn: ({ phone, tempToken }: { phone: string; tempToken: string }) =>
      authApi.completeGoogleRegistration(phone, tempToken),
    onSuccess: (data) => {
      if (data?.data?.token) {
        localStorage.setItem("auth_token", data.data.token);
      }
    },
  });
}

export function useLogout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      localStorage.removeItem("auth_token");
      queryClient.clear();
    },
    onError: () => {
      localStorage.removeItem("auth_token");
      queryClient.clear();
    },
  });
}

export function useDeleteAccount() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authApi.deleteAccount,
    onSuccess: () => {
      localStorage.removeItem("auth_token");
      queryClient.clear();
    },
  });
}