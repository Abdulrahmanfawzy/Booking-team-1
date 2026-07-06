import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";
import { AuthLayout } from "../components/AuthLayout";
import { PhoneInput } from "../components/PhoneInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signUpSchema, type SignUpSchema } from "../schemas/auth.schemas";
import { useSignUp } from "../hooks/useAuthMutations";
import { DEFAULT_COUNTRY } from "../constants/countries";

export function SignUpPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { mutate, isPending } = useSignUp();

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: "",
      email: "",
      countryCode: DEFAULT_COUNTRY.code,
      phone: "",
    },
  });

  const countryCode = watch("countryCode");
  const phone = watch("phone");

  const onSubmit = (values: SignUpSchema) => {
    mutate(values, {
      onSuccess: () => {
        navigate("/verify-otp", { state: { phone: values.phone } });
      },
      onError: () => {
        toast.error(t("auth.validation.invalidPhone", "Invalid phone number"));
      },
    });
  };

  return (
    <AuthLayout
      /* Fallback text in case translation files fail to load */
      title={t("auth.signUp.title", "Sign up")}
      subtitle={t(
        "auth.signUp.subtitle",
        "Please provide all information required to create your account"
      )}
      footer={
        <p className="text-sm font-medium text-[#99A2AB] tracking-[0%] leading-[100%]">
          {t("auth.signUp.haveAccount", "Already have an account?")}{" "}
          <Link to="/login" className="text-[#145DB8] font-medium hover:underline">
            {t("auth.signUp.signInLink", "Sign in")}
          </Link>
        </p>
      }
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-4">

        {/* Full Name field */}
        <div className="flex flex-col gap-1.5 text-left">
          <label className="text-sm font-medium text-[#05162C]">
            {t("auth.signUp.fullNameLabel", "Full Name")}
          </label>
          <Input
            {...register("fullName")}
            placeholder={t("auth.signUp.fullNamePlaceholder", "Full Name")}
            error={!!errors.fullName}
            className="h-[48px] rounded-[8px] border-[#99A2AB]/40 focus:border-[#145DB8]"
          />
          {errors.fullName && (
            <span className="text-xs text-red-500 mt-0.5">
              {t(errors.fullName.message ?? "")}
            </span>
          )}
        </div>

        {/* Email field */}
        <div className="flex flex-col gap-1.5 text-left">
          <label className="text-sm font-medium text-[#05162C]">
            {t("auth.signUp.emailLabel", "Email")}
          </label>
          <Input
            type="email"
            {...register("email")}
            placeholder={t("auth.signUp.emailPlaceholder", "Email")}
            error={!!errors.email}
            className="h-[48px] rounded-[8px] border-[#99A2AB]/40 focus:border-[#145DB8]"
          />
          {errors.email && (
            <span className="text-xs text-red-500 mt-0.5">
              {t(errors.email.message ?? "")}
            </span>
          )}
        </div>

        {/* Phone number field */}
        <div className="flex flex-col gap-1.5 text-left">
          <label className="text-sm font-medium text-[#05162C]">
            {t("auth.signUp.phoneLabel", "Phone number")}
          </label>
          <PhoneInput
            countryCode={countryCode}
            phone={phone}
            onCountryChange={(code) => setValue("countryCode", code)}
            onPhoneChange={(value) =>
              setValue("phone", value, { shouldValidate: true })
            }
            placeholder={t("auth.signUp.phonePlaceholder", "Enter your number")}
            error={!!errors.phone}
          />
          {errors.phone && (
            <span className="text-xs text-red-500 mt-0.5">
              {t(errors.phone.message ?? "")}
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="mt-4 flex flex-col gap-4">
          <Button
            type="submit"
            isLoading={isPending}
            className="w-full h-[48px] bg-[#145DB8] hover:bg-[#104b94] text-white rounded-[8px] text-base font-medium transition-colors"
          >
            {isPending
              ? t("auth.signUp.submitting", "Submitting...")
              : t("auth.signUp.submit", "Sign in")}
          </Button>

          {/* Divider */}
          <div className="flex items-center gap-2 my-1">
            <div className="h-px flex-1 bg-[#99A2AB]/20" />
            <span className="text-sm text-[#99A2AB]">
              {t("auth.signUp.or", "or")}
            </span>
            <div className="h-px flex-1 bg-[#99A2AB]/20" />
          </div>

          {/* Google sign-in button */}
          <Button
            type="button"
            variant="outline"
            className="w-full h-[48px] border-[#99A2AB]/30 text-[#05162C] rounded-[8px] gap-2 hover:bg-slate-50 text-sm font-medium"
          >
            <FcGoogle className="h-5 w-5" />
            {t("auth.signUp.googleSignIn", "Sign in with Google")}
          </Button>
        </div>
      </form>
    </AuthLayout>
  );
}