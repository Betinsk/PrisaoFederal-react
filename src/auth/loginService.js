import { apiFetch } from "../api/api";

const apiBaseUrl = process.env.REACT_APP_API_URL;

export async function login(email, password) {
  // 👇 sem try/catch aqui — deixa o erro do apiFetch subir para o componente
  const response = await apiFetch(`${apiBaseUrl}auth/login`, {
    method: "POST",
    body: JSON.stringify({ email, password })
  });

  const data = await response.json(); // 👈 era .text(), mas agora o back retorna JSON
  sessionStorage.setItem("token", data.token);

  return data.token;
}

export function authHeader() {
  const token = sessionStorage.getItem("token");
  return {
    Authorization: `Bearer ${token}`
  };
}