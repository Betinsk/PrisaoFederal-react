import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PersonForm } from "../person/PersonForm";
import { AddressForm } from "../address/AddressForm";
import { createPersonWithAddress } from "../../services/personService";
import { useAddresses } from "../../hooks/useAddresses";
import { validatePerson } from "../../validations/personValidation";
import { requestWithToast } from "../../exceptions/toast";

function PersonRegister() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [person, setPerson] = useState({
    name: "", birthDate: "", socialSecurity: "", gender: "Male", email: "",
  });

  const { address, addresses, handleAddressChange, addAddress, resetAddresses } = useAddresses(setErrors);

  function handleChange(e) {
    const { name, value } = e.target;
    setPerson((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (loading) return;

    const validationErrors = validatePerson({ ...person, addresses });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      const res = await requestWithToast(
        createPersonWithAddress({ ...person, addresses }),
        "Person created!"
      );
      navigate(`/person/${res.id}`);
    } catch {
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container mt-4" style={{ maxWidth: 720 }}>
      <form onSubmit={handleSubmit}>

        {/* Person */}
        <div className="mb-4">
          <p style={sectionLabel}>Personal information</p>
          <PersonForm attributes={person} onChange={handleChange} errors={errors} isEdit={false} />
        </div>

        {/* Address */}
        <div className="mb-3">
          <p style={sectionLabel}>Addresses</p>

          <AddressForm attributes={address} onChange={handleAddressChange} errors={errors} />

          <button
            type="button"
            onClick={addAddress}
            style={{ fontSize: 12, marginTop: 8, padding: "5px 14px", borderRadius: "var(--bs-border-radius)", border: "0.5px solid var(--bs-border-color)", background: "transparent", cursor: "pointer", color: "var(--bs-body-color)" }}
          >
            + Add address
          </button>
        </div>

        {/* Address preview */}
        {addresses.length > 0 && (
          <div className="mb-4">
            {addresses.map((addr, index) => (
              <div key={index}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, marginTop: index > 0 ? 16 : 0 }}>
                  <span style={{ fontSize: 10, letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--bs-secondary-color)", whiteSpace: "nowrap" }}>
                    Address {index + 1}
                  </span>
                  <div style={{ flex: 1, height: "0.5px", background: "var(--bs-border-color)" }} />
                </div>
                <div className="row g-2" style={{ fontSize: 12 }}>
                  <PreviewField label="Street"  value={addr.street} col="col-md-6" />
                  <PreviewField label="City"    value={addr.city}   col="col-md-4" />
                  <PreviewField label="State"   value={addr.state}  col="col-md-4" />
                  <PreviewField label="Country" value={addr.country}col="col-md-4" />
                  {addr.addressComplement && (
                    <PreviewField label="Complement" value={addr.addressComplement} col="col-md-6" />
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Submit */}
        <div style={{ borderTop: "0.5px solid var(--bs-border-color)", paddingTop: 16, display: "flex", justifyContent: "flex-end", gap: 8 }}>
          <button
            type="button"
            onClick={() => navigate(-1)}
            style={{ fontSize: 13, padding: "7px 16px", borderRadius: "var(--bs-border-radius)", border: "0.5px solid var(--bs-border-color)", background: "transparent", cursor: "pointer", color: "var(--bs-secondary-color)" }}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={addresses.length === 0 || loading}
            style={{ fontSize: 13, padding: "7px 20px", borderRadius: "var(--bs-border-radius)", border: "none", background: addresses.length === 0 || loading ? "var(--bs-secondary-bg)" : "#185FA5", color: addresses.length === 0 || loading ? "var(--bs-secondary-color)" : "white", cursor: addresses.length === 0 || loading ? "not-allowed" : "pointer", transition: "background .15s" }}
          >
            {loading ? "Saving..." : "Create person"}
          </button>
        </div>

      </form>
    </div>
  );
}

const sectionLabel = {
  fontSize: 10, letterSpacing: "0.05em", textTransform: "uppercase",
  color: "var(--bs-secondary-color)", marginBottom: 12,
  paddingBottom: 8, borderBottom: "0.5px solid var(--bs-border-color)",
};

function PreviewField({ label, value, col }) {
  return (
    <div className={col}>
      <div style={{ fontSize: 10, color: "var(--bs-secondary-color)", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 2 }}>{label}</div>
      <div style={{ fontSize: 12, paddingBottom: 4, borderBottom: "0.5px solid var(--bs-border-color)", color: "var(--bs-body-color)" }}>{value || "—"}</div>
    </div>
  );
}

export default PersonRegister;