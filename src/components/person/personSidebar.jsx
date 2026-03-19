export function PersonSidebar({ person, editing, onEdit, onSave, onCancel }) {
  return (
    <div className="card text-center">
      <div className="card-body">

        <img
          src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
          className="rounded-circle mb-3"
          width="100"
          alt="profile"
        />

        <h5>{person.name}</h5>
        <p className="text-muted">ID: {person.id}</p>

        {!editing ? (
          <>
            <button className="btn btn-secondary mb-2" onClick={onEdit}>
              Edit
            </button>
            <button className="btn btn-outline-danger">
              Status
            </button>
          </>
        ) : (
          <>
            <button className="btn btn-success mb-2" onClick={onSave}>
              Save
            </button>
            <button className="btn btn-secondary" onClick={onCancel}>
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
  );
}