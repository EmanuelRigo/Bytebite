/**
 * Auth Service
 * Maneja autenticación y autorización
 */

import { api } from "./api";

interface LoginRequest {
  email: string;
  password: string;
}

interface RegisterRequest {
  email: string;
  password: string;
  name: string;
}

interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

export const authService = {
  /**
   * Login con email y contraseña
   */
  login: (data: LoginRequest) => api.post<AuthResponse>("/auth/login", data),

  /**
   * Registro de nuevo usuario
   */
  register: (data: RegisterRequest) =>
    api.post<AuthResponse>("/auth/register", data),

  /**
   * Logout
   */
  logout: () => api.post("/auth/logout"),

  /**
   * Obtener usuario actual
   */
  getCurrentUser: () => api.get("/auth/me"),

  /**
   * Refresh token
   */
  refreshToken: () => api.post("/auth/refresh"),
};
