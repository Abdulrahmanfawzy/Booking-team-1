import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthLayout } from "../components/AuthLayout";
import { OtpInput } from "../components/OtpInput";
import { Button } from "@/components/ui/button";
import { useVerifyOtp, useResendOtp } from "../hooks/useAuthMutations";
import { useCountdown } from "../hooks/useCountdown";

const RESEND_SECONDS = 60;

export function VerifyOtpPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const phone = (location.state as { phone?: string } | null)?.phone;

  const [otp, setOtp] = useState("");
  const [hasError, setHasError] = useState(false);

  const { mutate: verifyOtp, isPending: isVerifying } = useVerifyOtp();
  const { mutate: resendOtp, isPending: isResending } = useResendOtp();
  const { secondsLeft, isFinished, restart } = useCountdown(RESEND_SECONDS);

  const handleChange = (value: string) => {
    setOtp(value);
    if (hasError) setHasError(false);
  };

  const handleVerify = () => {
    if (otp.length < 4) return;
    verifyOtp(
      { otp },
      {
        onSuccess: () => {
          navigate("/", { replace: true });
        },
        onError: () => {
          setHasError(true);
        },
      },
    );
  };

  const handleResend = () => {
    resendOtp(undefined, {
      onSuccess: () => {
        setHasError(false);
        setOtp("");
        restart();
      },
    });
  };

  return (
    <AuthLayout
      title={t("auth.verifyOtp.title", "Code Verification")}
      subtitle={t("auth.verifyOtp.subtitle", "Code has been sent to your phone number")}
    >
      <div className="flex w-full flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-6 w-full">

          {/* Phone number confirmation link */}
          <button
            type="button"
            className="text-sm font-normal text-[#1490E3] hover:underline transition-all"
          >
            {t("auth.verifyOtp.checkPhone", "Check your phone number")}
            {phone ? `: ${phone}` : ""}
          </button>

          {/* OTP input field */}
          <div className="w-full flex justify-center items-center py-2">
            <OtpInput value={otp} onChange={handleChange} hasError={hasError} />
          </div>

          {/* Error state or resend countdown */}
          {hasError ? (
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-red-500 font-medium">
                {t("auth.verifyOtp.wrongCode", "Wrong code")}
              </span>
              <div className="flex items-center gap-2 text-sm">
                <button
                  type="button"
                  onClick={handleResend}
                  disabled={isResending}
                  className="text-[#145DB8] font-medium hover:underline"
                >
                  {t("auth.verifyOtp.resend", "Resend")}
                </button>
                <span className="text-[#99A2AB]">{t("auth.verifyOtp.or", "or")}</span>
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="text-[#145DB8] font-medium hover:underline"
                >
                  {t("auth.verifyOtp.enterAnotherPhone", "Enter another phone")}
                </button>
              </div>
            </div>
          ) : (
            <span className="text-sm text-[#404448]">
              {isFinished ? (
                <button
                  type="button"
                  onClick={handleResend}
                  className="text-[#145DB8] font-medium hover:underline"
                >
                  {t("auth.verifyOtp.resend", "Resend")}
                </button>
              ) : (
                `${t("auth.verifyOtp.resendIn", "Resend code in")} ${secondsLeft} s`
              )}
            </span>
          )}
        </div>

        {/* Verify button */}
        <Button
          onClick={handleVerify}
          isLoading={isVerifying}
          disabled={otp.length < 4}
          className="w-full h-[48px] bg-[#145DB8] hover:bg-[#104b94] text-white rounded-[8px] text-base font-medium transition-colors"
        >
          {isVerifying
            ? t("auth.verifyOtp.submitting", "Verifying...")
            : t("auth.verifyOtp.submit", "Verify")}
        </Button>
      </div>
    </AuthLayout>
  );
}