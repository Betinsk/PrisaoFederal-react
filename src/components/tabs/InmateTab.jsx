import InmateForm from "../imate/InmateForm";
import { DataFields } from "./DataFields";

export function InmateTab({ person, formData, editing, onChange, errors }) {
  const fields = [
    { name: "commitedCrime",  label: "Committed Crime",  col: "col-12" },
    { name: "arrestDate",     label: "Arrest Date",      col: "col-md-6" },
    { name: "sentencedYears", label: "Sentenced Years",  col: "col-md-6" },
  ];

  return (
    <div className="container-fluid">
      <p style={{ fontSize: 10, letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--bs-secondary-color)", marginBottom: 16, paddingBottom: 8, borderBottom: "0.5px solid var(--bs-border-color)" }}>
        Inmate information
      </p>
      {editing
        ? <InmateForm attributes={formData} onChange={onChange} errors={errors} isEdit />
        : <DataFields data={person} fields={fields} />
      }
    </div>
  );
}