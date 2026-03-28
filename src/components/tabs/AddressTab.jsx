import { AddressForm } from "../address/AddressForm";

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
        <AddressForm
          key={index}
          attributes={address}
           errors={errors[index] || {}}
          onChange={(e) => onAddressChange(e, index)}
        />
      ))
) : (
  person.addresses?.map((address, index) => (
    <div key={index} className="row mb-3">

      <div className="col-12">
        <strong>Address {index + 1}</strong>
      </div>

      {fields.map((field) => (
        <div className={field.col} key={field.name}>
          <div className="border-bottom py-2">
            <div className="form-label text-muted small mb-0">
              {field.label}
            </div>

            <div className="form-control-plaintext">
              {address?.[field.name] || "—"}
            </div>
          </div>
        </div>
      ))}

    </div>
    
  ))
)}
</div>
  )}

                       