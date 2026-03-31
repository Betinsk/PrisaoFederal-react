

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

  try {
    const response = await fetch(`${url}`, config);

    // 🔐 equivalente ao interceptor de response
    if (response.status === 401) {
      sessionStorage.removeItem("token");
      window.location.href = "/login";
      console.log("Session expired!")
      throw new Error("Sessão expirada");
    }
    
    return response;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
}