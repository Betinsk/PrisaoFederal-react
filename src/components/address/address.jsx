import { useEffect, useState } from "react";

export default function Addresses() {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/addresses") // ajusta pra sua API
      .then((res) => res.json())
      .then((data) => {
        setAddresses(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar endereços:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de Endereços</h1>

      {addresses.length === 0 ? (
        <p>Nenhum endereço encontrado.</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Rua</th>
              <th>Complemento</th>
              <th>Cidade</th>
              <th>Estado</th>
              <th>País</th>
            </tr>
          </thead>
          <tbody>
            {addresses.map((addr) => (
              <tr key={addr.id}>
                <td>{addr.id}</td>
                <td>{addr.street}</td>
                <td>{addr.addressComplement}</td>
                <td>{addr.city}</td>
                <td>{addr.state}</td>
                <td>{addr.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}