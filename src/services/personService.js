import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const apiBaseUrl = process.env.REACT_APP_API_URL;

export async function createPerson(data) {
    try {
    const res = await fetch(`${apiBaseUrl}person`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

     console.log("STATUS:", res.status);

    const text = await res.text(); // 👈 pega qualquer resposta
    console.log("BODY:", text);

    toast.success('Person successfully created!');

    if (!res.ok) {
      throw new Error("Erro na API");
    }

    return JSON.parse(text);
  } catch (error) {
    console.error("ERRO DETALHADO:", error);
    throw error;
  }
}

export async function getPersons() {
  const response = await fetch(`${apiBaseUrl}person`);

  if (!response.ok) {
    throw new Error("Error fetching persons");
  }

  return response.json();
}