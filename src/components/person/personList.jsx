import { useEffect, useState } from "react";
import { getPersons } from "../../services/personService";
import { Link } from "react-router-dom";
import { DataPersonTable } from "../tabs/DataPersonTable";
import { AddressTab } from "../tabs/AddressTab";
import { DataAddressTable } from "../tabs/DataAddressTab";

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
    <div className="container mt-4 ">
      <h2 className="mb-4">Persons</h2>


      {persons.map((person) => (
        <div key={person.id} className="card mb-3">
          <div className="card-body">
            <Link
              to={`/person/${person.id}`}
              className="btn btn-sm btn-outline-secondary mb-2 d-inline-block"
            >
              {person.name}
            </Link>
            <DataPersonTable data={person} fields={[
              { name: "email", label: "Email" },
              { name: "birthDate", label: "Birth Date" },
              { name: "socialSecurity", label: "Social Security" },
              { name: "gender", label: "Gender" }
            ]} />

            <DataAddressTable data={person.addresses}
              fields={[
                { name: "street", label: "street", col: "col-md-4" },
                { name: "addressComplement", label: "addressComplement", col: "col-md-6" },
                { name: "state", label: "state Date", col: "col-md-6" },
                { name: "city", label: "city", col: "col-md-6" },
                { name: "country", label: "country", col: "col-md-6" }
              ]} />

          </div>
        </div>
      ))}
    </div>
  );
}

export default PersonList;