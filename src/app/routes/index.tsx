import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { ProtectedRoutes } from "@/components/layout/ProtectedRoutes";

import { SignInPage } from "@/features/Auth/pages/SignInPage";
import { SignUpPage } from "@/features/Auth/pages/SignUpPage";
import { VerifyOtpPage } from "@/features/Auth/pages/VerifyOtpPage";
import { ForgotPasswordPage } from "@/features/Auth/pages/Forgotpasswordpage";
import { VerifyResetOtpPage } from "@/features/Auth/pages/Verifyresetotppage";
import { ResetPasswordPage } from "@/features/Auth/pages/Resetpasswordpage";
import { CompleteGoogleRegistrationPage } from "@/features/Auth/pages/CompleteGoogleRegistrationPage";

import HomePage from "@/features/Home Page/pages/HomePage";
import AppointmentPage from "@/features/AppointmentPage/AppointmentPage.jsx";
import ProfilePage from "@/features/profilepage/ProfilePage";
import Booking from "@/features/Booking/Booking";
import SearchDoctorsPage from "./SearchDoctors";
import ContactUs from "@/features/ContactUs/ContactUs";

export const authRoutes = [
  { path: "/login", element: <SignInPage /> },
  { path: "/signup", element: <SignUpPage /> },
  { path: "/verify-otp", element: <VerifyOtpPage /> },
  { path: "/forgot-password", element: <ForgotPasswordPage /> },
  { path: "/verify-reset-otp", element: <VerifyResetOtpPage /> },
  { path: "/reset-password", element: <ResetPasswordPage /> },
  { path: "/complete-google-registration", element: <CompleteGoogleRegistrationPage /> },
];

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/home" replace /> },

  ...authRoutes,

  {
    element: <MainLayout />,
    children: [
      { path: "/home", element: <HomePage /> },
      { path: "/doctors", element: <SearchDoctorsPage /> },
      { path: "/contact-us", element: <ContactUs /> },
    ],
  },

  {
    element: <ProtectedRoutes />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { path: "/appointments/:id", element: <AppointmentPage /> },
          { path: "/profile", element: <ProfilePage /> },
          { path: "/booking", element: <Booking /> },
        ],
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}