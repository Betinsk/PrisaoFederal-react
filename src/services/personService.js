import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const apiBaseUrl = process.env.REACT_APP_API_URL;

export async function createPersonWithAddress(data) {
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

export async function findById(id) {
  const response = await fetch(`${apiBaseUrl}person/${id}`);
  const data = await response.json();
  return data;
}

export async function updatePerson(id, person){
  try {
    const res = await fetch(`${apiBaseUrl}person/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(person),
  });

     console.log("STATUS:", res.status);

    const text = await res.text(); // 👈 pega qualquer resposta
    console.log("BODY:", text);

    toast.success('Person successfully edited!');

    if (!res.ok) {
      throw new Error("Erro na API");
    }

    return JSON.parse(text);
  } catch (error) {
    console.error("ERRO DETALHADO:", error);
    throw error;
  }
}