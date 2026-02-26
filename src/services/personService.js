
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

    if (!res.ok) {
      throw new Error("Erro na API");
    }

    return JSON.parse(text);
  } catch (error) {
    console.error("ERRO DETALHADO:", error);
    throw error;
  }
}