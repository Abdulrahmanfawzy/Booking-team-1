import { useQuery } from "@tanstack/react-query";
import { authApi } from "../api/auth.api";

export function useCurrentUser() {
  const hasToken = !!localStorage.getItem("auth_token");

  return useQuery({
    queryKey: ["currentUser"],
    queryFn: () => authApi.getCurrentUser(),
    enabled: hasToken,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });
}