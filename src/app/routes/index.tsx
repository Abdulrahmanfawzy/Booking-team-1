import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";

// Auth pages 
import { SignInPage } from "@/features/Auth/pages/SignInPage";
import { SignUpPage } from "@/features/Auth/pages/SignUpPage";
import { VerifyOtpPage } from "@/features/Auth/pages/VerifyOtpPage";

// Real pages — wrapped in MainLayout
import HomePage from "@/features/Home Page/pages/HomePage";
import AppointmentPage from "@/features/AppointmentPage/AppointmentPage.jsx";
import ProfilePage from "@/features/profilepage/ProfilePage";

export const authRoutes = [
  { path: "/login", element: <SignInPage /> },
  { path: "/signup", element: <SignUpPage /> },
  { path: "/verify-otp", element: <VerifyOtpPage /> },
];

const router = createBrowserRouter([
  // Root redirect
  { path: "/", element: <Navigate to="/login" replace /> },
  ...authRoutes,
  {
    element: <MainLayout />,
    children: [
      { path: "/home", element: <HomePage /> },
      { path: "/appointments", element: <AppointmentPage /> },
      { path: "/profile", element: <ProfilePage /> },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}