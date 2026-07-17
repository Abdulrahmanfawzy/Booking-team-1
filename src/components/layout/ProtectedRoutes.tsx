import { Navigate, Outlet, useLocation } from "react-router-dom";

export function ProtectedRoutes() {
  const location = useLocation();
  const token = localStorage.getItem("auth_token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}