import PersonForm from "../person/PersonForm";
import { DataFields } from "./DataFields";

export function PersonTab({ person, formData, editing, onChange, errors }) {
  const fields = [
    { name: "name",           label: "Name",            col: "col-md-6" },
    { name: "email",          label: "Email",           col: "col-md-6" },
    { name: "birthDate",      label: "Birth Date",      col: "col-md-4" },
    { name: "socialSecurity", label: "Social Security", col: "col-md-4" },
    { name: "gender",         label: "Gender",          col: "col-md-4" },
  ];

  return (
    <div className="container-fluid">
      <p style={{ fontSize: 10, letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--bs-secondary-color)", marginBottom: 16, paddingBottom: 8, borderBottom: "0.5px solid var(--bs-border-color)" }}>
        Personal information
      </p>
      {editing
        ? <PersonForm attributes={formData} onChange={onChange} errors={errors} isEdit />
        : <DataFields data={person} fields={fields} />
      }
    </div>
  );
}