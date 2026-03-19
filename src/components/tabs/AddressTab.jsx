export function AddressTab({ formData, editing, onAddressChange }) {
  return (
    <div className="row">
      {formData.addresses.map((address, index) => (
        <div key={address.id} className="col-md-6">

          <input
            name="street"
            value={address.street || ""}
            onChange={(e) => onAddressChange(e, index)}
            className="form-control"
          />

        </div>
      ))}
    </div>
  );
}