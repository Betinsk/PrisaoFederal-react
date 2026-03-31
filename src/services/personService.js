import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authHeader } from '../auth/loginService'
import { apiFetch } from '../api/api';

const apiBaseUrl = process.env.REACT_APP_API_URL;

export async function createPersonWithAddress(data) {
  const res = await apiFetch(`${apiBaseUrl}person`, {
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

export async function getPersons() {
  const response = await apiFetch(`${apiBaseUrl}person`, {
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

export async function findById(id) {
  const token = localStorage.getItem("token");

  const response = await apiFetch(`${apiBaseUrl}person/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
       ...authHeader()
    }
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar pessoa");
  }

  const data = await response.json();
  return data;
}

export async function updatePerson(id, person){
  try {
    const res = await apiFetch(`${apiBaseUrl}person/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json",
       ...authHeader()
     },
    body: JSON.stringify(person),
  });

     console.log("STATUS:", res.status);

    const text = await res.text(); // 👈 pega qualquer resposta
    console.log("BODY:", text);

    if (!res.ok) {
      throw new Error("Erro na API");
    }
    
    return JSON.parse(text);
  } catch (error) {
    console.error("ERRO DETALHADO:", error);
    throw error;
  }
}