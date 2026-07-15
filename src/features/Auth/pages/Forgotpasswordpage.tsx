import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { AuthLayout } from "../components/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { forgotPasswordSchema, type ForgotPasswordSchema } from "../schemas/auth.schemas";
import { useForgotPassword } from "../hooks/useAuthMutations";
import { getApiErrorMessage } from "@/services/axiosInstance";

export function ForgotPasswordPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { mutate, isPending } = useForgotPassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { phone: "" },
  });

  const onSubmit = (values: ForgotPasswordSchema) => {
    mutate(values.phone, {
      onSuccess: () => {
        navigate("/verify-reset-otp", { state: { phone: values.phone } });
      },
      onError: (error) => {
        toast.error(getApiErrorMessage(error));
      },
    });
  };

  return (
    <AuthLayout
      title={t("auth.forgotPassword.title")}
      subtitle={t("auth.forgotPassword.subtitle")}
      footer={
        <Link to="/login" className="font-montserrat text-sm text-brand-600">
          {t("auth.forgotPassword.backToSignIn")}
        </Link>
      }
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-4">
        <div className="flex flex-col gap-1">
          <Input
            type="tel"
            inputMode="numeric"
            {...register("phone")}
            placeholder={t("auth.forgotPassword.phonePlaceholder")}
            error={!!errors.phone}
          />
          {errors.phone && (
            <span className="font-montserrat text-xs text-red-500">
              {t(errors.phone.message ?? "")}
            </span>
          )}
        </div>

        <Button 
        type="submit" isLoading={isPending} className="w-full h-[48px] bg-[#145DB8] hover:bg-[#104b94] text-white rounded-[8px] text-base font-medium transition-colors">
          {isPending ? t("auth.forgotPassword.submitting") : t("auth.forgotPassword.submit")}
        </Button>
      </form>
    </AuthLayout>
  );
}