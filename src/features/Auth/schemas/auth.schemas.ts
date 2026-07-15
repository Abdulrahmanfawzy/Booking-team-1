

import { z } from "zod";

export const signInSchema = z.object({
  phone: z
    .string()
    .min(1, "auth.validation.required")
    .regex(/^[0-9]{7,15}$/, "auth.validation.invalidPhone"),
 password: z
  .string()
  .min(8, "auth.validation.passwordMinLength")
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    "auth.validation.passwordTooWeak"
  ),
});
export type SignInSchema = z.infer<typeof signInSchema>;

export const signUpSchema = z
  .object({
    fullName: z
      .string()
      .min(1, "auth.validation.nameRequired") 
      .regex(
        /^[a-zA-Z\u0600-\u06FF]{2,}\s+[a-zA-Z\u0600-\u06FF]{2,}.*$/,
        "auth.validation.nameMustBeDouble" 
      ),
    email: z
      .string()
      .min(1, "auth.validation.emailRequired")
      .email("auth.validation.invalidEmail"),
    countryCode: z.string().min(1, "auth.validation.countryCodeRequired"),
    phone: z
      .string()
      .min(1, "auth.validation.phoneRequired")
      .regex(/^[0-9]{7,15}$/, "auth.validation.invalidPhone"),
    password: z
      .string()
      .min(8, "auth.validation.passwordMinLength")
      .regex(/[A-Z]/, "auth.validation.passwordNeedUppercase") 
      .regex(/[0-9]/, "auth.validation.passwordNeedNumber") 
      .regex(/[@$!%*?&]/, "auth.validation.passwordNeedSpecial"), 
    passwordConfirmation: z.string().min(1, "auth.validation.confirmRequired"),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "auth.validation.passwordsDontMatch",
    path: ["passwordConfirmation"],
  });
export type SignUpSchema = z.infer<typeof signUpSchema>;

export const verifyOtpSchema = z.object({
  otp: z.string().length(4, "auth.validation.otpLength"),
});
export type VerifyOtpSchema = z.infer<typeof verifyOtpSchema>;

export const forgotPasswordSchema = z.object({
  phone: z
    .string()
    .min(1, "auth.validation.required")
    .regex(/^[0-9]{7,15}$/, "auth.validation.invalidPhone"),
});
export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;

export const resetPasswordSchema = z
  .object({
    password: z.string().min(8, "auth.validation.passwordMinLength"),
    passwordConfirmation: z.string().min(1, "auth.validation.required"),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "auth.validation.passwordsDontMatch",
    path: ["passwordConfirmation"],
  });
export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;