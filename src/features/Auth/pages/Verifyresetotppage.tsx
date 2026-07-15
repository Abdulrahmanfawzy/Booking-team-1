import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthLayout } from "../components/AuthLayout";
import { OtpInput } from "../components/OtpInput";
import { Button } from "@/components/ui/button";
import { useVerifyResetOtp, useForgotPassword } from "../hooks/useAuthMutations";
import { useCountdown } from "../hooks/useCountdown";
import { getApiErrorMessage } from "@/services/axiosInstance";

const RESEND_SECONDS = 60;

export function VerifyResetOtpPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const phone = (location.state as { phone?: string } | null)?.phone;

  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { mutate: verifyResetOtp, isPending: isVerifying } = useVerifyResetOtp();
  const { mutate: resendOtp, isPending: isResending } = useForgotPassword();
  const { secondsLeft, isFinished, restart } = useCountdown(RESEND_SECONDS);

  if (!phone) {
    return (
      <AuthLayout title={t("auth.verifyOtp.title")} subtitle={t("auth.verifyOtp.subtitle")}>
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

  const handleChange = (value: string) => {
    setOtp(value);
    if (errorMessage) setErrorMessage(null);
  };

  const handleVerify = () => {
    if (otp.length < 4) return;
    verifyResetOtp(
      { phone, otp },
      {
        onSuccess: (data) => {
          navigate("/reset-password", {
            state: { phone, resetToken: data.data.reset_token },
          });
        },
        onError: (error) => {
          setErrorMessage(getApiErrorMessage(error));
        },
      },
    );
  };

  const handleResend = () => {
    resendOtp(phone, {
      onSuccess: () => {
        setErrorMessage(null);
        setOtp("");
        restart();
      },
      onError: (error) => {
        setErrorMessage(getApiErrorMessage(error));
      },
    });
  };

  return (
    <AuthLayout title={t("auth.verifyOtp.title")} subtitle={t("auth.verifyOtp.subtitle")}>
      <div className="flex w-full flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-6">
          <span className="font-montserrat text-sm text-brand-600">
            {t("auth.verifyOtp.checkPhone")}: {phone}
          </span>

          <OtpInput value={otp} onChange={handleChange} hasError={!!errorMessage} />

          {errorMessage ? (
            <div className="flex flex-col items-center gap-2">
              <span className="font-montserrat text-sm text-red-500">{errorMessage}</span>
              <div className="flex items-center gap-2 font-montserrat text-sm">
                <button
                  type="button"
                  onClick={handleResend}
                  disabled={isResending}
                  className="text-brand-600"
                >
                  {t("auth.verifyOtp.resend")}
                </button>
                <span className="text-neutral-400">{t("auth.verifyOtp.or")}</span>
                <button type="button" onClick={() => navigate(-1)} className="text-brand-600">
                  {t("auth.verifyOtp.enterAnotherPhone")}
                </button>
              </div>
            </div>
          ) : (
            <span className="font-montserrat text-sm text-neutral-500">
              {isFinished ? (
                <button type="button" onClick={handleResend} className="text-brand-600">
                  {t("auth.verifyOtp.resend")}
                </button>
              ) : (
                t("auth.verifyOtp.resendIn", { seconds: secondsLeft })
              )}
            </span>
          )}
        </div>

        <Button onClick={handleVerify} isLoading={isVerifying} disabled={otp.length < 4}>
          {isVerifying ? t("auth.verifyOtp.submitting") : t("auth.verifyOtp.submit")}
        </Button>
      </div>
    </AuthLayout>
  );
}