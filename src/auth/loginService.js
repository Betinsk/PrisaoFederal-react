

const apiBaseUrl = process.env.REACT_APP_API_URL;

export async function login(email, password) {
  const response = await fetch(`${apiBaseUrl}auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  const token = await response.text();

  // 💾 salva o token
  localStorage.setItem("token", token);

  return token;

}

export function authHeader() {
  const token = localStorage.getItem("token");

  return {
    "Authorization": `Bearer ${token}`
  };
}