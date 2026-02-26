export const CreateAddress = ({ attributes, onChange }) => {
  return (
    <>
      <input
        placeholder="Rua"
        value={attributes.street}
        onChange={(e) => onChange("street", e.target.value)}
      />

      <input
        placeholder="Complemento"
        value={attributes.addressComplement}
        onChange={(e) => onChange("addressComplement", e.target.value)}
      />

      <input
        placeholder="Cidade"
        value={attributes.city}
        onChange={(e) => onChange("city", e.target.value)}
      />

      <input
        placeholder="Estado"
        value={attributes.state}
        onChange={(e) => onChange("state", e.target.value)}
      />

      <input
        placeholder="País"
        value={attributes.country}
        onChange={(e) => onChange("country", e.target.value)}
      />
    </>
  );
}

export default CreateAddress;