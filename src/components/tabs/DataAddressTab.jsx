export function DataAddressTable({ data, fields }) {
  if (!data) return null;

  const isArray = Array.isArray(data);
  const rows = isArray ? data : [data];

  return (
    <div className="card shadow-sm">
    <div className="card-body">

      <table className="table table-striped table-hover align-middle">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            {fields.map((field) => (
              <th key={field.name}>{field.label}</th>
            ))}
          </tr>
        </thead>

         <tbody>
            {data.map((address, index) => (
              <tr key={index}>
                <td>{index + 1}</td>

                {fields.map((field) => (
                  <td key={field.name}>
                    {address?.[field.name] || "—"}
                  </td>
                ))}

              </tr>
            ))}
          </tbody>
      </table>

    </div>
  </div>
)}
   
