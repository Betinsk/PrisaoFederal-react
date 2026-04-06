import { authHeader } from '../auth/loginService';
import { apiFetch } from '../api/api';

const apiBaseUrl = process.env.REACT_APP_API_URL;


export async function createAddress(data) {
  const response = await apiFetch(`${apiBaseUrl}addresses/persons/${data.person.id}/addresses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
       ...authHeader()
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Erro ao criar endereço");
  }

  return response.json();
}

export async function updateAddress(id, address){
  try {
    const res = await apiFetch(`${apiBaseUrl}addresses/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json",
       ...authHeader()
     },
    body: JSON.stringify(address),
  });

     console.log("STATUS:", res.status);

    const text = await res.text(); // 👈 pega qualquer resposta
    console.log("BODY:", text);

    if (!res.ok) {
      throw new Error("Error in API");
    }

    return JSON.parse(text);
  } catch (error) {
    console.error("ERRO DETALHADO:", error);
    throw error;
  }
}

export async function addAddress(personId, address) {
  const res = await apiFetch(`${apiBaseUrl}person/${personId}/address`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeader() },
    body: JSON.stringify(address),
  });
  return res.json();
}