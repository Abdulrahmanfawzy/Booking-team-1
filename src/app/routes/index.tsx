import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { SignInPage } from "@/features/Auth/pages/SignInPage";
import { SignUpPage } from "@/features/Auth/pages/SignUpPage";
import { VerifyOtpPage } from "@/features/Auth/pages/VerifyOtpPage";
import Booking from "@/features/Booking/Booking";


export const authRoutes = [
  { path: "/login", element: <SignInPage /> },
  { path: "/signup", element: <SignUpPage /> },
  { path: "/verify-otp", element: <VerifyOtpPage /> },
];

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/login" replace /> },
  ...authRoutes,
  // ...other routes 
  {path:"/booking", element:<Booking/>},
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}