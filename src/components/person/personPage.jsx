import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { findById } from "../../services/personService";

function PersonProfile() {

  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [tab, setTab] = useState("personal");

  useEffect(() => {
    findById(id).then(data => setPerson(data));
  }, [id]);

  if (!person) return <div className="container mt-4">Carregando...</div>;

  return (
    <div className="container mt-4">

      <div className="card">
        <div className="card-header">
          <h3>{person.name}</h3>
        </div>

        <div className="card-body">

          {/* Tabs */}
          <ul className="nav nav-tabs mb-3">
            <li className="nav-item">
              <button
                className={`nav-link ${tab === "personal" ? "active" : ""}`}
                onClick={() => setTab("personal")}
              >
                Personal Data
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link ${tab === "address" ? "active" : ""}`}
                onClick={() => setTab("address")}
              >
                Address
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link ${tab === "inmate" ? "active" : ""}`}
                onClick={() => setTab("inmate")}
              >
                Inmate
              </button>
            </li>
          </ul>

          {/* Personal */}
          {tab === "personal" && (
            <div className="row">
              <div className="col-md-6">
                <p><strong>Email:</strong> {person.email}</p>
                <p><strong>BirthDate:</strong> {person.birthDate}</p>
                <p><strong>SSN:</strong> {person.socialSecurity}</p>
              </div>
            </div>
          )}

          {/* Address */}
          {tab === "address" && person.addresses && (
            <div className="row">
              {person.addresses.map((address) => (
                <div key={address.id} className="col-md-6 mb-3">
                  <div className="card">
                    <div className="card-body">
                      <p><strong>Street:</strong> {address.street}</p>
                      <p><strong>City:</strong> {address.city}</p>
                      <p><strong>State:</strong> {address.state}</p>
                      <p><strong>Country:</strong> {address.country}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Inmate */}
          {tab === "inmate" && person.commitedCrime && (
            <div>
              <p><strong>Crime:</strong> {person.commitedCrime}</p>
              <p><strong>Arrest Date:</strong> {person.arrestDate}</p>
              <p><strong>Sentence:</strong> {person.sentenceYears} years</p>
            </div>
          )}

        </div>
      </div>

    </div>
  );
}

export default PersonProfile;