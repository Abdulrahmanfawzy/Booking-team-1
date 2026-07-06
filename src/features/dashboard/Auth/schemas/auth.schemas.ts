import { z } from "zod";


export const signInSchema = z.object({
  countryCode: z.string().min(1, "auth.validation.countryCodeRequired"),
  phone: z
    .string()
    .min(1, "auth.validation.phoneRequired")
    .regex(/^[0-9]{7,15}$/, "auth.validation.invalidPhone"),
});
export type SignInSchema = z.infer<typeof signInSchema>;

export const signUpSchema = z.object({
  fullName: z
    .string()
    .min(1, "auth.validation.nameRequired")
    .min(2, "auth.validation.nameTooShort"),
  email: z
    .string()
    .min(1, "auth.validation.emailRequired")
    .email("auth.validation.invalidEmail"),
  countryCode: z.string().min(1, "auth.validation.countryCodeRequired"),
  phone: z
    .string()
    .min(1, "auth.validation.phoneRequired")
    .regex(/^[0-9]{7,15}$/, "auth.validation.invalidPhone"),
});
export type SignUpSchema = z.infer<typeof signUpSchema>;

export const verifyOtpSchema = z.object({
  otp: z
    .string()
    .min(1, "auth.validation.otpRequired")
    .length(4, "auth.validation.otpLength"),
});
export type VerifyOtpSchema = z.infer<typeof verifyOtpSchema>;