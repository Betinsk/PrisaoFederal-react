const apiBaseUrl = process.env.REACT_APP_API_URL;

export async function apiFetch(url, options = {}) {
  const token = sessionStorage.getItem("token");

  const config = {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  };

  const response = await fetch(`${url}`, config); // 👈 sem try/catch aqui

  if (response.status === 401) {
    const isLoginRoute = url.includes("auth/login");

    if (isLoginRoute) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Wrong email or password");
    }

    sessionStorage.removeItem("token");
    window.location.href = "/login";
    throw new Error("Expired session");
  }

  if (!response.ok) {
    let errorMsg = "Unexpected error";

    try {
      const errorData = await response.json();
      errorMsg = errorData.message || errorData.error || "Unexpected error";
    } catch {
      errorMsg = await response.text();
    }

    throw new Error(errorMsg); // 👈 só lança, sem toast
  }

  return response; // 👈 retorna a response limpa
}