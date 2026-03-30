import { AddressForm } from "../address/AddressForm";
import { DataAddressTable } from "./DataAddressTab";

export function AddressTab({ person, formData, editing, onAddressChange, errors }) {

  const fields = [
    { name: "street", label: "street", col: "col-md-4" },
    { name: "addressComplement", label: "addressComplement", col: "col-md-6" },
    { name: "state", label: "state Date", col: "col-md-6" },
    { name: "city", label: "city", col: "col-md-6" },
    { name: "country", label: "country", col: "col-md-6" }
  ];

  console.log(person)
  return (
    <div className="container-fluid">
      <div className="mb-3 border-bottom pb-2">
        <h6 className="fw-bold text-uppercase mb-0">
          Addresses
        </h6>
      </div>

      
      {editing ? (
          formData.addresses?.map((address, index) => (
             <div key={index}>
             <span>Address {index + 1}</span>
            <AddressForm
              attributes={address}
              errors={errors[index] || {}}
              onChange={(e) => onAddressChange(e, index)}
            />
            </div>
          ))
    ) : (
      <DataAddressTable data={person.addresses} fields={fields} />
    )}
    </div>
      )}

                       