export function DataFields({ data, fields }) {
  if (!data) return null;

  return (
    <div className="row g-4">
      {fields.map((field) => (
        <div key={field.name} className={field.col || "col-md-6"}>
          <div style={{ fontSize: 10, color: "var(--bs-secondary-color)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 4 }}>
            {field.label}
          </div>
          <div style={{ fontSize: 13, color: "var(--bs-body-color)", paddingBottom: 6, borderBottom: "0.5px solid var(--bs-border-color)" }}>
            {data[field.name] || "—"}
          </div>
        </div>
      ))}
    </div>
  );
}