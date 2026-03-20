import PersonForm from "../person/PersonForm";

export function PersonTab({ person, formData, editing, onChange, errors }) {

        const fields = [
            { name: "name", label: "Name", col: "col-md-4" },
            { name: "email", label: "Email", col: "col-md-6" },
            { name: "birthDate", label: "Birth Date", col: "col-md-6" },
            { name: "socialSecurity", label: "Social Security", col: "col-md-6" },
            { name: "gender", label: "Gender", col: "col-md-6" }
        ];
  
  return (
    <div className="container-fluid">

      <div className="mb-3 border-bottom pb-2">
        <h6 className="fw-bold text-uppercase mb-0">
          Dados Pessoais
        </h6>
      </div>

      <div className="row g-2">

        {editing ? (
          <PersonForm
            attributes={formData}
            onChange={onChange}
            errors={errors}
            isEdit={true}

          />
        ) : (
          fields.map((field) => (
            <div className={field.col} key={field.name}>

            <div className="border-bottom py-2">    
                <div className="form-label text-muted small mb-0">
                  {field.label}
                </div>

                <div className="form-control-plaintext">
                  {person[field.name] || "—"}
                </div>

              </div>

            </div>
          ))
        )}

      </div>

    </div>
  );
}