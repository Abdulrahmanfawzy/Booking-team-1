import type { ReactNode } from "react";
import { BsHeartPulse } from "react-icons/bs";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;  //lform
  footer?: ReactNode;
}

export function AuthLayout({ title, subtitle, children, footer }: AuthLayoutProps) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white flex flex-col justify-between selection:bg-blue-100 font-sans">

      {/* Background wave */}
      <div className="absolute top-0 right-0 h-full w-[45%] hidden md:block pointer-events-none z-0">
        <svg
          className="w-full h-full object-cover object-right"
          viewBox="0 0 797 852"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Light blue wave fill */}
          <path 
            d="M605.176 236.855C695.484 111.759 545.028 -135.568 545.028 -135.568L1280.56 286.45L716.378 1269.75L-2.53736e-06 858.722C-2.53736e-06 858.722 339.213 780.1 396.516 600.526C427.131 504.584 335.409 437.434 386.747 350.146C437.222 264.324 546.976 317.473 605.176 236.855Z" 
            fill="#E8EFF8"
          />
          {/* Blue wave outline */}
          <path 
            d="M607.841 230.438C698.39 104.924 548.152 -142.784 548.152 -142.784L1283.68 279.234L717.729 1265.63L1.35023 854.598C1.35023 854.598 340.934 775.33 398.525 595.253C429.294 499.043 337.592 431.858 389.088 344.294C439.72 258.2 549.487 311.326 607.841 230.438Z" 
            stroke="#145DB8" 
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Brand logo - Matches Figma spacing */}
      <div className="absolute left-6 top-8 sm:left-[100px] sm:top-[50px] z-20">
        <BsHeartPulse className="h-8 w-8 text-[#145DB8]" />
      </div>

      {/* Main content container */}
      <div className="flex flex-1 items-center justify-center px-6 pt-24 pb-16 z-10">
        <div className="flex w-[420px] max-w-full flex-col items-center gap-[32px]">

          {/* Header section */}
          <div className="flex flex-col items-center gap-[16px] text-center w-full">
            <h1 className="font-serif text-[32px] font-normal leading-[120%] text-[#05162C]">
              {title}
            </h1>
            <p className="text-sm font-normal text-[#404448] leading-[140%] max-w-[320px]">
              {subtitle}
            </p>
          </div>

          {/* Fixed-width form container */}
          <div className="w-full max-w-[378px] flex flex-col">
            {children}
          </div>

          {/* Optional footer */}
          {footer && (
            <div className="text-center mt-2">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}