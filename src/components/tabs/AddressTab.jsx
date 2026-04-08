import { AddressForm } from "../address/AddressForm";
import { DataFields } from "./DataFields";

const fields = [
  { name: "street",            label: "Street",     col: "col-12" },
  { name: "addressComplement", label: "Complement", col: "col-md-6" },
  { name: "city",              label: "City",       col: "col-md-6" },
  { name: "state",             label: "State",      col: "col-md-4" },
  { name: "country",           label: "Country",    col: "col-md-4" },
];

function AddressDivider({ index }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16, marginTop: index > 0 ? 28 : 0 }}>
      <span style={{ fontSize: 10, letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--bs-secondary-color)", whiteSpace: "nowrap" }}>
        Address {index + 1}
      </span>
      <div style={{ flex: 1, height: "0.5px", background: "var(--bs-border-color)" }} />
    </div>
  );
}

export function AddressTab({ person, formData, editing, onAddressChange, errors }) {
  const addresses = editing ? formData.addresses : person.addresses;

  if (!addresses?.length) {
    return (
      <div className="container-fluid">
        <p style={{ fontSize: 10, letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--bs-secondary-color)", marginBottom: 16, paddingBottom: 8, borderBottom: "0.5px solid var(--bs-border-color)" }}>
          Addresses
        </p>
        <p style={{ fontSize: 13, color: "var(--bs-secondary-color)" }}>No addresses registered.</p>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <p style={{ fontSize: 10, letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--bs-secondary-color)", marginBottom: 16, paddingBottom: 8, borderBottom: "0.5px solid var(--bs-border-color)" }}>
        Addresses
      </p>

      {addresses.map((address, index) => (
        <div key={index}>
          <AddressDivider index={index} />
          {editing ? (
            <AddressForm
              attributes={address}
              errors={errors[index] || {}}
              onChange={(e) => onAddressChange(e, index)}
            />
          ) : (
            <DataFields data={address} fields={fields} />
          )}
        </div>
      ))}
    </div>
  );
}