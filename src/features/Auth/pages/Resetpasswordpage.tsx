import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { AuthLayout } from "../components/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { resetPasswordSchema, type ResetPasswordSchema } from "../schemas/auth.schemas";
import { useResetPassword } from "../hooks/useAuthMutations";
import { getApiErrorMessage } from "@/services/axiosInstance";

export function ResetPasswordPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { phone?: string; resetToken?: string } | null;
  const { mutate, isPending } = useResetPassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { password: "", passwordConfirmation: "" },
  });

  if (!state?.phone || !state?.resetToken) {
    return (
      <AuthLayout
        title={t("auth.resetPassword.title")}
        subtitle={t("auth.resetPassword.subtitle")}
      >
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="font-montserrat text-sm text-red-500">
            {t("auth.verifyOtp.missingPhone")}
          </p>
          <Button onClick={() => navigate("/forgot-password")}>
            {t("auth.forgotPassword.title")}
          </Button>
        </div>
      </AuthLayout>
    );
  }

  const { phone, resetToken } = state;

  const onSubmit = (values: ResetPasswordSchema) => {
    mutate(
      { phone, resetToken, values },
      {
        onSuccess: () => {
          toast.success(t("auth.resetPassword.success"));
          navigate("/login", { replace: true });
        },
        onError: (error) => {
          toast.error(getApiErrorMessage(error));
        },
      },
    );
  };

  return (
    <AuthLayout
      title={t("auth.resetPassword.title")}
      subtitle={t("auth.resetPassword.subtitle")}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="font-montserrat text-sm text-heading">
            {t("auth.signUp.passwordLabel")}
          </label>
          <Input
            type="password"
            {...register("password")}
            placeholder={t("auth.signUp.passwordPlaceholder")}
            error={!!errors.password}
          />
          {errors.password && (
            <span className="font-montserrat text-xs text-red-500">
              {t(errors.password.message ?? "")}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-montserrat text-sm text-heading">
            {t("auth.signUp.passwordConfirmationLabel")}
          </label>
          <Input
            type="password"
            {...register("passwordConfirmation")}
            placeholder={t("auth.signUp.passwordConfirmationPlaceholder")}
            error={!!errors.passwordConfirmation}
          />
          {errors.passwordConfirmation && (
            <span className="font-montserrat text-xs text-red-500">
              {t(errors.passwordConfirmation.message ?? "")}
            </span>
          )}
        </div>

        <Button type="submit" isLoading={isPending}  className="w-full h-[48px] bg-[#145DB8] hover:bg-[#104b94] text-white rounded-[8px] text-base font-medium transition-colors">
          {isPending ? t("auth.resetPassword.submitting") : t("auth.resetPassword.submit")}
        </Button>
      </form>
    </AuthLayout>
  );
}