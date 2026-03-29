export const PersonForm = ({ attributes, onChange, errors, isEdit }) => {

  const handleChange = (e) => {
    onChange(e);
  };

  const fields = [
    { name: "name", type: "text", placeholder: "Name", col: "col-md-6" },
    { name: "birthDate", type: "date", placeholder: "Birth Date", col: "col-md-4" },
    { name: "socialSecurity", type: "text", placeholder: "Social Security", disabledOnEdit: true, col: "col-md-4" },
    { name: "gender", type: "select", options: ["Male", "Female"], col: "col-md-4" },
    { name: "email", type: "text", placeholder: "Email", col: "col-md-6" }
  ];

  return (
    <div className="person-form row g-2 mb-3">

      {fields.map((field) => (
        <div className={field.col} key={field.name}>

          {field.type === "select" ? (
            <select
              name={field.name}
              value={attributes[field.name] || ""}
              onChange={handleChange}
              className={`form-control form-control-sm  ${errors?.[field.name] ? "is-invalid" : ""}`}
            >
                {field.options.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                 ))}
            </select>
          ) : (
            <input
              type={field.type}
              name={field.name}
              value={attributes[field.name] || ""}
              onChange={handleChange}
              disabled={isEdit && field.disabledOnEdit}
              placeholder={field.placeholder}
              className={`form-control form-control-sm ${errors?.[field.name] ? "is-invalid" : ""}`}
            />
          )}

          {errors?.[field.name] && (
            <div className="invalid-feedback">
              {errors[field.name]}
            </div>
          )}

        </div>
      ))}

    </div>
  );
};

export default PersonForm;