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