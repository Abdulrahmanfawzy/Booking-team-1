import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { AuthLayout } from "../components/AuthLayout";
import { PhoneInput } from "../components/PhoneInput";
import { Button } from "@/components/ui/button";
import { DEFAULT_COUNTRY } from "../constants/countries";
import { useCompleteGoogleRegistration } from "../hooks/useAuthMutations";
import { getApiErrorMessage } from "@/services/axiosInstance";

const schema = z.object({
  countryCode: z.string(),
  phone: z.string().min(6, "auth.phone.invalid"),
});
type FormValues = z.infer<typeof schema>;

export function CompleteGoogleRegistrationPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const tempToken = (location.state as { tempToken?: string } | null)?.tempToken;

  const { mutate, isPending } = useCompleteGoogleRegistration();

  const {
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { countryCode: DEFAULT_COUNTRY.code, phone: "" },
  });

  const countryCode = watch("countryCode");
  const phone = watch("phone");

  if (!tempToken) {
    navigate("/login", { replace: true });
    return null;
  }

  const onSubmit = (values: FormValues) => {
    mutate(
      { phone: values.phone, tempToken },
      {
        onSuccess: () => navigate("/home", { replace: true }),
        onError: (error) => toast.error(getApiErrorMessage(error)),
      },
    );
  };

  return (
    <AuthLayout
      title={t("auth.completeGoogle.title", "Complete your profile")}
      subtitle={t(
        "auth.completeGoogle.subtitle",
        "We need your phone number to finish setting up your account",
      )}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-4">
        <PhoneInput
          countryCode={countryCode}
          phone={phone}
          onCountryChange={(code) => setValue("countryCode", code)}
          onPhoneChange={(value) => setValue("phone", value, { shouldValidate: true })}
          error={!!errors.phone}
        />
        {errors.phone && (
          <span className="font-montserrat text-xs text-red-500">
            {t(errors.phone.message ?? "", "Please enter a valid phone number")}
          </span>
        )}

        <Button
          type="submit"
          isLoading={isPending}
          className="h-[48px] w-full rounded-[8px] bg-[#145DB8] text-base font-medium text-white transition-colors hover:bg-[#104b94]"
        >
          {t("auth.completeGoogle.submit", "Continue")}
        </Button>
      </form>
    </AuthLayout>
  );
}