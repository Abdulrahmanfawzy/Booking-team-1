import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { AuthLayout } from "../components/AuthLayout";
import { GoogleSignInButton } from "../components/GoogleSignInButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signInSchema, type SignInSchema } from "../schemas/auth.schemas";
import { useSignIn, useGoogleLogin } from "../hooks/useAuthMutations";
import { getApiErrorMessage } from "@/services/axiosInstance";

export function SignInPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { mutate, isPending } = useSignIn();
  const { mutate: googleLoginMutate, isPending: isGooglePending } = useGoogleLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    mode: "onChange",
    defaultValues: { phone: "", password: "" },
  });

  const onSubmit = (values: SignInSchema) => {
    mutate(values, {
      onSuccess: () => {
        navigate("/home", { replace: true });
      },
      onError: (error) => {
        toast.error(getApiErrorMessage(error));
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
      title={t("auth.signIn.title", "Sign in")}
      subtitle={t("auth.signIn.subtitle", "Please enter your phone number")}
      footer={
        <p className="font-montserrat text-sm text-neutral-400">
          {t("auth.signIn.noAccount", "Don't have an account?")}{" "}
          <Link to="/signup" className="text-brand-600">
            {t("auth.signIn.signUpLink", "Sign up")}
          </Link>
        </p>
      }
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-4">
        <div className="flex flex-col gap-1">
          <Input
            type="tel"
            inputMode="numeric"
            {...register("phone")}
            placeholder={t("auth.signIn.phonePlaceholder", "Enter your number")}
            error={!!errors.phone}
          />
          {errors.phone && (
            <span className="font-montserrat text-xs text-red-500">
              {t(errors.phone.message ?? "", "Invalid phone number")}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <Input
            type="password"
            {...register("password")}
            placeholder={t("auth.signIn.passwordPlaceholder", "Password")}
            error={!!errors.password}
          />
          {errors.password && (
            <span className="font-montserrat text-xs text-red-500">
              {t(errors.password.message ?? "", "This field is required")}
            </span>
          )}
          <Link
            to="/forgot-password"
            className="self-end font-montserrat text-xs text-brand-600"
          >
            {t("auth.signIn.forgotPassword", "Forgot password?")}
          </Link>
        </div>

        <div className="mt-4 flex flex-col gap-4">
          <Button
            className="w-full h-[48px] bg-[#145DB8] hover:bg-[#104b94] text-white rounded-[8px] text-base font-medium transition-colors"
            type="submit"
            isLoading={isPending}
          >
            {isPending
              ? t("auth.signIn.submitting", "Signing in...")
              : t("auth.signIn.submit", "Sign in")}
          </Button>

          <div className="flex items-center gap-2">
            <div className="h-px flex-1 bg-divider" />
            <span className="font-montserrat text-base text-neutral-400">
              {t("auth.signIn.or", "or")}
            </span>
            <div className="h-px flex-1 bg-divider" />
          </div>

          <GoogleSignInButton
            label={t("auth.signIn.googleSignIn", "Sign in with Google")}
            onSuccess={handleGoogleSuccess}
            onError={() =>
              toast.error(t("auth.signIn.googleError", "Google sign-in failed"))
            }
            disabled={isGooglePending}
          />
        </div>
      </form>
    </AuthLayout>
  );
}