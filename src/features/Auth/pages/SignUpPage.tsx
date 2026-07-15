import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { AuthLayout } from "../components/AuthLayout";
import { PhoneInput } from "../components/PhoneInput";
import { GoogleSignInButton } from "../components/GoogleSignInButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signUpSchema, type SignUpSchema } from "../schemas/auth.schemas";
import { useSignUp, useGoogleLogin } from "../hooks/useAuthMutations";
import { DEFAULT_COUNTRY } from "../constants/countries";
import { getApiErrorMessage, getFieldErrors } from "@/services/axiosInstance";

export function SignUpPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { mutate, isPending } = useSignUp();
  const { mutate: googleLoginMutate, isPending: isGooglePending } =
    useGoogleLogin();

  const {
    register,
    watch,
    setValue,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchema>({
    mode: "onChange",
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: "",
      email: "",
      countryCode: DEFAULT_COUNTRY.code,
      phone: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  const countryCode = watch("countryCode");
  const phone = watch("phone");

  const onSubmit = (values: SignUpSchema) => {
    mutate(values, {
      onSuccess: (_data, variables) => {
        navigate("/verify-otp", { state: { phone: variables.phone } });
      },
      onError: (error) => {
        const fieldErrors = getFieldErrors(error);

        if (fieldErrors) {
          let matchedAny = false;
          for (const [field, message] of Object.entries(fieldErrors)) {
            if (field === "email" || field === "phone") {
              setError(field, { type: "server", message });
              matchedAny = true;
            }
          }
          if (!matchedAny) {
            toast.error(getApiErrorMessage(error));
          }
        } else {
          toast.error(getApiErrorMessage(error));
        }
      },
    });
  };

  const handleGoogleSuccess = (idToken: string) => {
    googleLoginMutate(idToken, {
      onSuccess: (response) => {
        if (response.data?.requires_phone && response.data.temp_token) {
          navigate("/complete-google-registration", {
            state: { tempToken: response.data.temp_token },
          });
          return;
        }
        navigate("/home", { replace: true });
      },
      onError: (error) => {
        toast.error(getApiErrorMessage(error));
      },
    });
  };

  return (
    <AuthLayout
      title={t("auth.signUp.title", "Sign up")}
      subtitle={t(
        "auth.signUp.subtitle",
        "Please provide all information required to create your account",
      )}
      footer={
        <p className="font-montserrat text-sm text-neutral-400">
          {t("auth.signUp.haveAccount", "Already have an account?")}{" "}
          <Link to="/login" className="text-brand-600">
            {t("auth.signUp.signInLink", "Sign in")}
          </Link>
        </p>
      }
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-4"
      >
        <div className="flex flex-col gap-1">
          <label className="font-montserrat text-sm text-heading">
            {t("auth.signUp.fullNameLabel", "Full Name")}
          </label>
          <Input
            {...register("fullName")}
            placeholder={t("auth.signUp.fullNamePlaceholder", "Full Name")}
            error={!!errors.fullName}
          />
          {errors.fullName && (
            <span className="font-montserrat text-xs text-red-500">
              {t(errors.fullName.message ?? "", "This field is required")}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-montserrat text-sm text-heading">
            {t("auth.signUp.emailLabel", "Email")}
          </label>
          <Input
            type="email"
            {...register("email")}
            placeholder={t("auth.signUp.emailPlaceholder", "Email")}
            error={!!errors.email}
          />
          {errors.email && (
            <span className="font-montserrat text-xs text-red-500">
              {errors.email.type === "server"
                ? errors.email.message
                : t(
                    errors.email.message ?? "",
                    "Please enter a valid email address",
                  )}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-montserrat text-sm text-heading">
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
            <span className="font-montserrat text-xs text-red-500">
              {errors.phone.type === "server"
                ? errors.phone.message
                : t(
                    errors.phone.message ?? "",
                    "Please enter a valid phone number",
                  )}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-montserrat text-sm text-heading">
            {t("auth.signUp.passwordLabel", "Password")}
          </label>
          <Input
            type="password"
            {...register("password")}
            placeholder={t("auth.signUp.passwordPlaceholder", "Password")}
            error={!!errors.password}
          />
          {errors.password && (
            <span className="font-montserrat text-xs text-red-500">
              {t(
                errors.password.message ?? "",
                "Password must be at least 8 characters",
              )}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-montserrat text-sm text-heading">
            {t("auth.signUp.passwordConfirmationLabel", "Confirm Password")}
          </label>
          <Input
            type="password"
            {...register("passwordConfirmation")}
            placeholder={t(
              "auth.signUp.passwordConfirmationPlaceholder",
              "Confirm Password",
            )}
            error={!!errors.passwordConfirmation}
          />
          {errors.passwordConfirmation && (
            <span className="font-montserrat text-xs text-red-500">
              {t(
                errors.passwordConfirmation.message ?? "",
                "Passwords don't match",
              )}
            </span>
          )}
        </div>

        <div className="mt-4 flex flex-col gap-4">
          <Button
            className="w-full h-[48px] bg-[#145DB8] hover:bg-[#104b94] text-white rounded-[8px] text-base font-medium transition-colors"
            type="submit"
            isLoading={isPending}
          >
            {isPending
              ? t("auth.signUp.submitting", "Creating account...")
              : t("auth.signUp.submit", "Sign up")}
          </Button>

          <div className="flex items-center gap-2">
            <div className="h-px flex-1 bg-divider" />
            <span className="font-montserrat text-base text-neutral-400">
              {t("auth.signUp.or", "or")}
            </span>
            <div className="h-px flex-1 bg-divider" />
          </div>

          <GoogleSignInButton
            label={t("auth.signUp.googleSignIn", "Sign in with Google")}
            onSuccess={handleGoogleSuccess}
            onError={() =>
              toast.error(t("auth.signUp.googleError", "Google sign-in failed"))
            }
            disabled={isGooglePending}
          />
        </div>
      </form>
    </AuthLayout>
  );
}
