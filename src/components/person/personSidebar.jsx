export function PersonSidebar({ person, editing, onEdit, onSave, onCancel, isChanged }) {
  return (
    <div className="card border-0 shadow-sm text-center">
      <div className="card-body">

        <img
          src={person.profilePictureUrl}
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
              <button className="btn btn-success btn-sm" onClick={onSave} disabled={!isChanged}>
                Save
              </button>
              <button className="btn btn-outline-secondary btn-sm" onClick={onCancel} >
                Cancel
              </button>
            </>
          )}

        </div>

      </div>
    </div>
  );
}