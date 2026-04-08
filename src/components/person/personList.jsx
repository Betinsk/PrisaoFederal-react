import { useEffect, useState } from "react";
import { getPersons } from "../../services/personService";
import PersonCard from "./PersonCard";

function PersonList() {
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPersons()
      .then((data) => { setPersons(data); setLoading(false); })
      .catch((err) => { setError(err.message); setLoading(false); });
  }, []);

  if (loading) return <p className="text-secondary mt-4">Loading...</p>;
  if (error)   return <p className="text-danger mt-4">Error: {error}</p>;

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
        <h2 className="mb-0 fw-500 fs-5">Persons</h2>
        <span className="badge rounded-pill bg-secondary bg-opacity-10 text-secondary fw-normal">
          {persons.length} records
        </span>
      </div>

      {persons.map((person) => (
        <PersonCard key={person.id} person={person} />
      ))}
    </div>
  );
}

export default PersonList;