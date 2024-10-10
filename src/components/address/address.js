
const AddressForm = ({ addressDto, handleChange }) => {
 
  return (
    <div>
      <input
        type="text"
        name="street"
        value={addressDto.street}
        onChange={handleChange}
        placeholder="Street"
      />
      <input
        type="text"
        name="number"
        value={addressDto.number}
        onChange={handleChange}
        placeholder="Number"
      />
      <input
        type="text"
        name="cityName"
        value={addressDto.cityName}
        onChange={handleChange}
        placeholder="City"
      />
      <input
        type="text"
        name="stateName"
        value={addressDto.stateName}
        onChange={handleChange}
        placeholder="State"
      />
    </div>
  );
};

export default AddressForm;
