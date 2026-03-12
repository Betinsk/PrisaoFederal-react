import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { findById, updatePerson } from "../../services/personService";

function PersonProfile() {

  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [tab, setTab] = useState("personal");
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState(null);


  useEffect(() => {
    findById(id).then(data => {setPerson(data)
        setFormData(data)
      }
  );
  }, [id]);



   async function handleSave(){
    const updated = await updatePerson(person.id, formData);
    setEditing(false);
    setPerson(updated);   
    setFormData(updated); 
  }

   function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  if (!person) return <div className="container mt-4">Loading...</div>;

  return (
    <div className="container mt-4">

      <div className="row">

        {/* PROFILE SIDEBAR */}
        <div className="col-md-3">

          <div className="card text-center">

            <div className="card-body">

              <img
                src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                className="rounded-circle mb-3"
                width="100"
                alt="profile"
              />

              <h5>{person.name}</h5>
              <p className="text-muted">ID: {person.id}</p>

              <div className="d-grid gap-2">

                 {!editing && (
              <>
                <button
                  className="btn btn-secondary mb-2"
                  onClick={() => setEditing(true)}
                >
                  Edit
                </button>

                <button className="btn btn-outline-danger">
                  Status
                </button>
              </>
            )}

            {editing && (
              <>
                <button
                  className="btn btn-success mb-2"
                  onClick={handleSave}
                >
                  Save
                </button>

                <button
                  className="btn btn-secondary"
                      onClick={() => {
                      setEditing(false);
                      setFormData({ ...person });
                    }}>
                  Cancel
                </button>
              </>
            )}

              </div>

            </div>
          </div>

        </div>

        {/* MAIN CONTENT */}
        <div className="col-md-9">

          <div className="card">

            <div className="card-body">

              {/* TABS */}
              <ul className="nav nav-tabs mb-3">

                <li className="nav-item">
                  <button
                    className={`nav-link ${tab === "personal" ? "active" : ""}`}
                    onClick={() => setTab("personal")}
                  >
                    Personal
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

                 <li className="nav-item">
                  <button
                    className={`nav-link ${tab === "history" ? "active" : ""}`}
                    onClick={() => setTab("history")}
                  >
                    History
                  </button>
                </li>

              </ul>

              {/* PERSONAL TAB */}
              {tab === "personal" && (
                <div className="row">

                  <div className="col-md-6">

                <label className="form-label">Name</label>

                   {editing ? (
                  <input
                    type="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                  />
                ) : (
                  <p>{person.name}</p>
                )}

              <div className="mb-3">
                <label className="form-label">Email</label>

                {editing ? (
                  <input
                    type="email"
                    name="email"
                    value={formData?.email || ""}
                    onChange={handleChange}
                    className="form-control"
                  />
                ) : (
                  <p>{person.email}</p>
                )}
              </div>

                  <div className="mb-3">
                <label className="form-label">BirthDate</label>
                     {editing ? (
                  <input
                    type="date"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}
                    className="form-control"
                  />
                ) : (
                  <p>{person.birthDate}</p>
                )}

                </div>
                  </div>

                  <div className="col-md-6">
                    <p><strong>SSN:</strong> {person.socialSecurity}</p>
                  </div>

                </div>
              )}

              {/* ADDRESS TAB */}
              {tab === "address" && person.addresses && (

                <div className="row">

                  {person.addresses.map(address => (

                    <div key={address.id} className="col-md-6 mb-3">

                      <div className="card border-secondary">

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

              {/* INMATE TAB */}
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

      </div>

    </div>
  );
}

export default PersonProfile;