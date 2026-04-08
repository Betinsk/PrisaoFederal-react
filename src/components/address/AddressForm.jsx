import { FormField } from "../shared/FormField";
import { countries } from "./countries";

const fields = [
  { name: "street",            label: "Street",     type: "text", col: "col-12" },
  { name: "addressComplement", label: "Complement", type: "text", col: "col-md-6" },
  { name: "city",              label: "City",       type: "text", col: "col-md-6" },
  { name: "state",             label: "State",      type: "text", col: "col-md-4" },
  {
    name: "country",
    label: "Country",
    type: "select",
    col: "col-md-4",
    options: countries.map((c) => ({ value: c.code, label: c.name })),
  },
];

export function AddressForm({ attributes, onChange, errors }) {
  return (
    <div className="row g-3 mb-3">
      {fields.map((field) => (
        <FormField
          key={field.name}
          field={field}
          value={attributes[field.name]}
          onChange={onChange}
          error={errors?.[field.name]}
        />
      ))}
    </div>
  );
}

export default AddressForm;