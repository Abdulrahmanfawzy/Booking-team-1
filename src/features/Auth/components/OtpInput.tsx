import { OTPInput, type SlotProps } from "input-otp";
import { cn } from "@/lib/utils";

interface OtpInputProps {
  value: string;
  onChange: (value: string) => void;
  hasError?: boolean;
}

export function OtpInput({ value, onChange, hasError }: OtpInputProps) {
  return (
    <OTPInput
      maxLength={4}
      value={value}
      onChange={onChange}
      containerClassName="flex items-center gap-3"
      render={({ slots }) => (
        <>
          {slots.map((slot, idx) => (
            <Slot key={idx} {...slot} hasError={hasError} />
          ))}
        </>
      )}
    />
  );
}

function Slot(props: SlotProps & { hasError?: boolean }) {
  return (
    <div
      className={cn(
        "flex h-14 w-14 items-center justify-center rounded-lg border font-montserrat text-xl text-heading",
        props.hasError
          ? "border-red-500"
          : props.isActive
            ? "border-brand-600 ring-2 ring-brand-600/20"
            : "border-neutral-300",
        props.char && !props.hasError && "bg-brand-50",
      )}
    >
      {props.char}
      {props.hasFakeCaret && (
        <div className="pointer-events-none w-px animate-pulse bg-heading" style={{ height: "1.2em" }} />
      )}
    </div>
  );
}