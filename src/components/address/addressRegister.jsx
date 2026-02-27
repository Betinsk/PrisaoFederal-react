export const CreateAddress = ({ attributes, onChange }) => {
  return (
    <>
      <input
        placeholder="Street name"
        value={attributes.street}
        onChange={(e) => onChange("street", e.target.value)}
      />

      <input
        placeholder="Complement"
        value={attributes.addressComplement}
        onChange={(e) => onChange("addressComplement", e.target.value)}
      />

      <input
        placeholder="City"
        value={attributes.city}
        onChange={(e) => onChange("city", e.target.value)}
      />

      <input
        placeholder="State"
        value={attributes.state}
        onChange={(e) => onChange("state", e.target.value)}
      />

      <input
        placeholder="Country"
        value={attributes.country}
        onChange={(e) => onChange("country", e.target.value)}
      />
    </>
  );
}

export default CreateAddress;