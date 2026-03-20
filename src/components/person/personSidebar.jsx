export function PersonSidebar({ person, editing, onEdit, onSave, onCancel }) {
  return (
    <div className="card border-0 shadow-sm text-center">
      <div className="card-body">

        <img
          src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
          className="rounded-circle mb-3 border"
          width="90"
          alt="profile"
        />

        <h6 className="fw-bold mb-1">{person.name}</h6>
        <p className="text-muted small mb-3">ID: {person.id}</p>

        <div className="d-grid gap-2">

          {!editing ? (
            <>
              <button className="btn btn-secondary btn-sm" onClick={onEdit}>
                Editar
              </button>
              <button className="btn btn-outline-danger btn-sm">
                Status
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-success btn-sm" onClick={onSave}>
                Salvar
              </button>
              <button className="btn btn-outline-secondary btn-sm" onClick={onCancel}>
                Cancelar
              </button>
            </>
          )}

        </div>

      </div>
    </div>
  );
}