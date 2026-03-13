import { countries } from "./countries";

export const Address = ({ attributes, onChange, errors }) => {
  

  const fields = [
  { name: "street", placeholder: "Street name", col: "col-md-6" },
  { name: "addressComplement", placeholder: "Complement", col: "col-md-6" },
  { name: "city", placeholder: "City", col: "col-md-4" },
  { name: "state", placeholder: "State", col: "col-md-4" }
];

  return (
    <div className="person-form row g-2">

    {fields.map((field) => (
      <div className={field.col} key={field.name}>

    <input
      type="text"
      name={field.name}
      value={attributes[field.name] || ""}
      onChange={(e) => onChange(field.name, e.target.value)}
      placeholder={field.placeholder}
      className={`form-control ${errors?.[field.name] ? "is-invalid" : ""}`}
    />

    {errors?.[field.name] && (
      <div className="invalid-feedback">
        {errors[field.name]}
      </div>
    )}

  </div>
))}
    <select
  name="country"
  className="col-md-6"
  value={attributes.country || ""}
  onChange={(e) => onChange("country", e.target.value)}
>

  {countries.map((country) => (
    <option key={country.code} value={country.code}>
      {country.name}
    </option>
  ))}

</select>
     </div>
      
   
  );
}

export default Address;