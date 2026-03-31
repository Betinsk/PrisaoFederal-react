import 'react-toastify/dist/ReactToastify.css';
import { authHeader } from '../auth/loginService'
import { apiFetch } from '../api/api';



const apiBaseUrl = process.env.REACT_APP_API_URL;


export async function createInmateWithAddress(data) {
  const res = await apiFetch(`${apiBaseUrl}inmate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...authHeader(),
    },
    body: JSON.stringify(data),
  });

  const text = await res.text();

  if (!res.ok) {
    // tenta pegar mensagem do backend
    let message = "Erro na API";

    try {
      const json = JSON.parse(text);
      message = json.message || message;
    } catch {
      // resposta não era JSON
    }

    throw new Error(message);
  }

  return JSON.parse(text);
}

export async function getInmates() {
  const response = await apiFetch(`${apiBaseUrl}inmate`, {
     method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...authHeader()
        }

  });

  if (!response.ok) {
    throw new Error("Error fetching persons");
  }

  return response.json();
}
