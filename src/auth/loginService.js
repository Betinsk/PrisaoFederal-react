import { apiFetch } from "../api/api";

const apiBaseUrl = process.env.REACT_APP_API_URL;

export async function login(email, password) {
  const response = await apiFetch(`${apiBaseUrl}auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

   if (!response.ok) {
    throw new Error("Invalid email or password"); // 🔥 ISSO FAZ O CATCH FUNCIONAR
  }

  const token = await response.text();

  // 💾 salva o token
  sessionStorage.setItem("token", token);

  return token;
}

export function authHeader() {
  const token = sessionStorage.getItem("token");

  return {
    "Authorization": `Bearer ${token}`
  };
}

