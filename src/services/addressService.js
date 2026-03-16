import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const apiBaseUrl = process.env.REACT_APP_API_URL;


export async function createAddress(data) {
  const response = await fetch(`${apiBaseUrl}addresses/persons/${data.person.id}/addresses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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
    const res = await fetch(`${apiBaseUrl}address/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(address),
  });

     console.log("STATUS:", res.status);

    const text = await res.text(); // 👈 pega qualquer resposta
    console.log("BODY:", text);

    toast.success('Address successfully edited!');

    if (!res.ok) {
      throw new Error("Error in API");
    }

    return JSON.parse(text);
  } catch (error) {
    console.error("ERRO DETALHADO:", error);
    throw error;
  }
}