import PersonForm from "../person/PersonForm";
import { DataPersonTable } from "./DataPersonTable";

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
          Personal Information Data
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

            <DataPersonTable data={person} fields={fields} />
        )}

      </div>
    </div>
  )
}
