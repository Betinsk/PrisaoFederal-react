import InmateForm from "../imate/InmateForm";
import { DataInmateTab } from "./DataInmateTab";

export function InmateTab({ person, formData, editing, onChange, errors }) {

  const fields = [
    { name: "commitedCrime", label: "Commited Crime", col: "col-md-10" },
    { name: "arrestDate", label: "Arrest Date", col: "col-md-6" },
    { name: "sentencedYears", label: "Sentenced Years", col: "col-md-4" }
  ];

  return (
    <div className="container-fluid">

      <div className="mb-3 border-bottom pb-2">
        <h6 className="fw-bold text-uppercase mb-0">
          Inmate Information Data
        </h6>
      </div>

      <div className="row g-2">

        {editing ? (
          <InmateForm
            attributes={formData}
            onChange={onChange}
            errors={errors}
            isEdit={true}

          />
        ) : (

            <DataInmateTab data={person} fields={fields} />
        )}

      </div>
    </div>
  )
}
