export function FormField({ field, value, onChange, error, isEdit }) {
  const isDisabled = isEdit && field.disabledOnEdit;

  const baseClass = `form-control form-control-sm ${error ? "is-invalid" : ""}`;

  const inputStyle = {
    fontSize: 13,
    borderColor: error ? undefined : "var(--bs-border-color)",
  };

  const labelStyle = {
    fontSize: 10,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: "var(--bs-secondary-color)",
    marginBottom: 4,
    display: "block",
  };

  return (
    <div className={field.col || "col-md-6"}>
      <label style={labelStyle}>{field.label ?? field.placeholder ?? field.name}</label>

      {field.type === "select" && (
        <select
          name={field.name}
          value={value || ""}
          onChange={onChange}
          disabled={isDisabled}
          className={baseClass}
          style={inputStyle}
        >
          {field.placeholder && (
            <option value="" disabled>{field.placeholder}</option>
          )}
          {field.options.map((opt) => (
            <option key={opt.value ?? opt} value={opt.value ?? opt}>
              {opt.label ?? opt}
            </option>
          ))}
        </select>
      )}

      {field.type === "textarea" && (
        <textarea
          name={field.name}
          value={value || ""}
          onChange={onChange}
          disabled={isDisabled}
          rows={field.rows ?? 3}
          className={baseClass}
          style={inputStyle}
        />
      )}

      {field.type !== "select" && field.type !== "textarea" && (
        <input
          type={field.type ?? "text"}
          name={field.name}
          value={value || ""}
          onChange={onChange}
          disabled={isDisabled}
          placeholder={field.placeholder}
          className={baseClass}
          style={inputStyle}
        />
      )}

      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}