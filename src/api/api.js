
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

    if (response.status === 401) {
      sessionStorage.removeItem("token");
      window.location.href = "/login";
      console.log("Session expired!")
      throw new Error("Sessão expirada");
    }

    if (!response.ok) {
      const errorText = await response.text(); 
      console.error("Erro da API:", errorText);
      throw new Error(errorText);
    }

    return response;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
}