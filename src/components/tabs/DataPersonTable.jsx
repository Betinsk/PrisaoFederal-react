export function DataPersonTable({ data, fields }) {
  if (!data) return null;

  const isArray = Array.isArray(data);
  const rows = isArray ? data : [data];

  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">
    <div className="table-responsive">
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
            {rows.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>

                {fields.map((field) => (
                  <td key={field.name}>
                    {item?.[field.name] || "—"}
                  </td>
                ))}

              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}