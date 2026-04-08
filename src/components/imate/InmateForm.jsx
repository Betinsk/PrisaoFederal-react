import { FormField } from "../shared/FormField";
import { PersonForm } from "../person/PersonForm";

const inmateFields = [
  { name: "commitedCrime",  label: "Committed Crime",  type: "textarea", col: "col-12",   rows: 3 },
  { name: "arrestDate",     label: "Arrest Date",      type: "date",     col: "col-md-6" },
  { name: "sentencedYears", label: "Sentenced Years",  type: "text",     col: "col-md-6" },
];

export function InmateForm({ attributes, onChange, errors, isEdit }) {
  return (
    <div>
      {!isEdit && (
        <>
          <p style={{ fontSize: 10, letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--bs-secondary-color)", marginBottom: 12, paddingBottom: 8, borderBottom: "0.5px solid var(--bs-border-color)" }}>
            Personal information
          </p>
          <PersonForm attributes={attributes} onChange={onChange} errors={errors} isEdit={false} />
        </>
      )}

      <p style={{ fontSize: 10, letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--bs-secondary-color)", marginBottom: 12, paddingBottom: 8, borderBottom: "0.5px solid var(--bs-border-color)", marginTop: isEdit ? 0 : 20 }}>
        Inmate information
      </p>

      <div className="row g-3 mb-3">
        {inmateFields.map((field) => (
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
    </div>
  );
}

export default InmateForm;