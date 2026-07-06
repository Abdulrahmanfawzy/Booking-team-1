import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { SignInPage } from "@/features/dashboard/Auth/pages/SignInPage";
import { SignUpPage } from "@/features/dashboard/Auth/pages/SignUpPage";
import { VerifyOtpPage } from "@/features/dashboard/Auth/pages/VerifyOtpPage";


export const authRoutes = [
  { path: "/login", element: <SignInPage /> },
  { path: "/signup", element: <SignUpPage /> },
  { path: "/verify-otp", element: <VerifyOtpPage /> },
];

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/login" replace /> },
  ...authRoutes,
  // ...other routes 
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}