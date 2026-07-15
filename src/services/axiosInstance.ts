import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Attach the token automatically to every request (once we have one saved)
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auto-logout on 401 (token expired / invalid)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("auth_token");
      if (window.location.pathname !== "/login") {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  },
);
export function getApiErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data as
      | { success?: boolean; message?: string; errors?: Record<string, string[]> }
      | undefined;
    if (data?.message) return data.message;
  }
  return "Something went wrong. Please try again.";
}

export function getFieldErrors(error: unknown): Record<string, string> | null {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data as
      | { success?: boolean; message?: string; errors?: Record<string, string[]> }
      | undefined;
    if (data?.errors && typeof data.errors === "object" && !Array.isArray(data.errors)) {
      const fieldErrors: Record<string, string> = {};
      for (const [field, messages] of Object.entries(data.errors)) {
        if (Array.isArray(messages) && messages.length > 0) {
          fieldErrors[field] = messages[0];
        }
      }
      return Object.keys(fieldErrors).length > 0 ? fieldErrors : null;
    }
  }
  return null;
}