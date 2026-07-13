import { useRef } from "react";
import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";

interface GoogleSignInButtonProps {
  label: string;
  onSuccess: (idToken: string) => void;
  onError?: () => void;
  disabled?: boolean;
}

export function GoogleSignInButton({
  label,
  onSuccess,
  onError,
  disabled,
}: GoogleSignInButtonProps) {
  const hiddenBtnRef = useRef<HTMLDivElement>(null);

  const handleCredentialResponse = (credentialResponse: CredentialResponse) => {
    if (credentialResponse.credential) {
      onSuccess(credentialResponse.credential);
    } else {
      onError?.();
    }
  };

  const triggerGoogleLogin = () => {
    const realGoogleButton = hiddenBtnRef.current?.querySelector(
      "div[role='button']",
    ) as HTMLElement | null;
    realGoogleButton?.click();
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        disabled={disabled}
        onClick={triggerGoogleLogin}
        className="flex h-[48px] w-full items-center justify-center gap-2 rounded-[8px] border border-divider font-montserrat text-base font-medium transition-colors hover:bg-neutral-50 disabled:opacity-60"
      >
        <FcGoogle className="h-6 w-6" />
        {label}
      </button>

      <div
        ref={hiddenBtnRef}
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-0"
        aria-hidden="true"
      >
        <GoogleLogin
          onSuccess={handleCredentialResponse}
          onError={() => onError?.()}
          useOneTap={false}
        />
      </div>
    </div>
  );
}