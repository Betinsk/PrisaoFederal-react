import { FormField } from "../shared/FormField";

const fields = [
  { name: "name",           label: "Name",            type: "text",   col: "col-md-6" },
  { name: "email",          label: "Email",           type: "text",   col: "col-md-6" },
  { name: "birthDate",      label: "Birth Date",      type: "date",   col: "col-md-4" },
  { name: "socialSecurity", label: "Social Security", type: "text",   col: "col-md-4", disabledOnEdit: true },
  { name: "gender",         label: "Gender",          type: "select", col: "col-md-4", options: ["Male", "Female"] },
];

export function PersonForm({ attributes, onChange, errors, isEdit }) {
  return (
    <div className="row g-3 mb-3">
      {fields.map((field) => (
        <FormField
          key={field.name}
          field={field}
          value={attributes[field.name]}
          onChange={onChange}
          error={errors?.[field.name]}
          isEdit={isEdit}
        />
      ))}
    </div>
  );
}

export default PersonForm;