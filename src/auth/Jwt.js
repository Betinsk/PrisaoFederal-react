import { jwtDecode } from "jwt-decode";

export function isAuthenticated() {
  const token = sessionStorage.getItem("token");

  if (!token) return false;

  try {
    const decoded = jwtDecode(token);

    // tempo atual em segundos
    const currentTime = Date.now() / 1000;

    return decoded.exp > currentTime;
  } catch (error) {
    return false;
  }
}