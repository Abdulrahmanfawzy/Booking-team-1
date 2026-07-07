import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";
import { AuthLayout } from "../components/AuthLayout";
import { PhoneInput } from "../components/PhoneInput";
import { Button } from "@/components/ui/button";
import { signInSchema, type SignInSchema } from "../schemas/auth.schemas";
import { useSignIn } from "../hooks/useAuthMutations";
import { DEFAULT_COUNTRY } from "../constants/countries";

export function SignInPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { mutate, isPending } = useSignIn();

  const {
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: { countryCode: DEFAULT_COUNTRY.code, phone: "" },
  });

  const countryCode = watch("countryCode");
  const phone = watch("phone");

  const onSubmit = (values: SignInSchema) => {
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
      title={t("auth.signIn.title", "Sign in")}
      subtitle={t("auth.signIn.subtitle", "Please Enter your phone number")}
      footer={
        <p className="text-sm font-medium text-[#99A2AB] tracking-[0%] leading-[100%]">
          {t("auth.signIn.noAccount", "Don't have an account?")}{" "}
          <Link to="/signup" className="text-[#145DB8] font-medium hover:underline">
            {t("auth.signIn.signUpLink", "Sign up")}
          </Link>
        </p>
      }
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-4">
        
        {/* Phone number input field */}
        <div className="flex flex-col gap-1 text-left">
          <PhoneInput
            countryCode={countryCode}
            phone={phone}
            onCountryChange={(code) => setValue("countryCode", code)}
            onPhoneChange={(value) => setValue("phone", value, { shouldValidate: true })}
            placeholder={t("auth.signIn.phonePlaceholder", "Enter your number")}
            error={!!errors.phone}
          />
          {errors.phone && (
            <span className="text-xs text-red-500 mt-1">
              {t(errors.phone.message ?? "")}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-4 mt-2">
          {/* Main Sign-In button */}
          <Button 
            type="submit" 
            isLoading={isPending}
            className="w-full h-[48px] bg-[#145DB8] hover:bg-[#104b94] text-white rounded-[8px] text-base font-medium transition-colors"
          >
            {isPending ? t("auth.signIn.submitting", "Submitting...") : t("auth.signIn.submit", "Sign in")}
          </Button>

          {/* Divider line (Or) */}
          <div className="flex items-center gap-2 my-1">
            <div className="h-px flex-1 bg-[#99A2AB]/20" />
            <span className="text-sm text-[#99A2AB]">
              {t("auth.signIn.or", "or")}
            </span>
            <div className="h-px flex-1 bg-[#99A2AB]/20" />
          </div>

          {/* Google authentication button */}
          <Button 
            type="button" 
            variant="outline" 
            className="w-full h-[48px] border-[#99A2AB]/30 text-[#05162C] rounded-[8px] gap-2 hover:bg-slate-50 text-sm font-medium"
          >
            <FcGoogle className="h-5 w-5" />
            {t("auth.signIn.googleSignIn", "Sign in with Google")}
          </Button>
        </div>
      </form>
    </AuthLayout>
  );
}