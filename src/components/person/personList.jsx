import { useEffect, useState } from "react";
import { getPersons } from "../../services/personService";
import { Link } from "react-router-dom";

function PersonList() {
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPersons()
      .then((data) => {
        setPersons(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Persons</h2>


      {persons.map((person) => (
        <div key={person.id} className="card mb-3">
          <div className="card-body">
        <Link to={`/person/${person.id}`}>
          {person.name}
        </Link>
            <h5 className="card-title">{person.name}</h5>

            <p className="card-text">
              <strong>Email:</strong> {person.email}
            </p>

            <p className="card-text">
              <strong>SSN:</strong> {person.socialSecurity}
            </p>

            <p className="card-text">
              <strong>Date of Birth:</strong> {person.birthDate}
            </p>

            <h6 className="mt-3">Addresses</h6>

            {person.addresses.map((address) => (
              <div key={address.id} className="ms-3 mb-2">
                <p className="mb-0">
                  {address.street}, {address.addressComplement}
                </p>
                <p className="mb-0">
                  {address.city} - {address.state} ({address.country})
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PersonList;