import { useEffect, useState } from "react";

function PersonList() {
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.prisaofederal.lat/person")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar dados");
        }
        return response.json();
      })
      .then((data) => {
        setPersons(data);
        setLoading(false);
        console.log(data)
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;
 return (
    <div>
      <h2>Lista de Pessoas</h2>

      {persons.map((person) => (
        <div
          key={person.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{person.name}</h3>
          <p><strong>Email:</strong> {person.email}</p>
          <p><strong>SSN:</strong> {person.socialSecurity}</p>
          <p><strong>Data de Nascimento:</strong> {person.birthDate}</p>

          <h4>Endereços:</h4>
          {person.adresses.map((address) => (
            <div key={address.id} style={{ marginLeft: "15px" }}>
              <p>
                {address.streetAdress}, {address.adressComplement}
              </p>
              <p>
                {address.city} - {address.state} ({address.country})
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default PersonList;
