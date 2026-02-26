export async function createAddress(data) {
  const response = await fetch("http://localhost:8080/addresses/persons/1/addresses", {
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