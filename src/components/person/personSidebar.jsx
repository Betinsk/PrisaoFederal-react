import { useRef } from "react";
import { uploadProfilePicture } from "../../services/imagesService";
import { requestWithToast } from "../../exceptions/toast";

export function PersonSidebar({ person, editing, onEdit, onSave, onCancel, isChanged, onPersonUpdate }) {
  const fileInputRef = useRef(null);

  async function handleProfileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    try {
      await requestWithToast(
        uploadProfilePicture(person.id, file),
        "Profile picture updated!"
      );
      onPersonUpdate(); // 👈 recarrega a person no pai
    } catch {
      // toast já exibido
    }
  }

  return (
    <div className="card border-0 shadow-sm text-center">
      <div className="card-body">
        <div className="d-flex justify-content-center">
          {/* 👇 clica na imagem para abrir o file picker */}
          <div
            className="position-relative"
            style={{ cursor: "pointer", width: 90 }}
            onClick={() => fileInputRef.current.click()}
            title="Clique para trocar a foto"
          >
            {person.profilePictureUrl ? (
              <img
                src={person.profilePictureUrl}
                className="rounded-circle mb-3 border"
                width="90"
                height="90"
                style={{ objectFit: "cover" }}
                alt="profile"
              />
            ) : (
              <div
                className="rounded-circle mb-3 border d-flex align-items-center justify-content-center bg-secondary text-white"
                style={{ width: 90, height: 90, fontSize: 36 }}
              >
                <i className="bi bi-person"></i>
              </div>
            )}
            {/* 👇 ícone de câmera sobre a foto */}
            <div
              className="position-absolute bottom-0 end-0 bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3"
              style={{ width: 24, height: 24 }}
            >
              <i className="bi bi-camera-fill text-white" style={{ fontSize: 12 }}></i>
            </div>
          </div>

          {/* input escondido */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleProfileUpload}
            onClick={(e) => e.target.value = null} // 👈 reseta para disparar sempre
          />
        </div>

        <h6 className="fw-bold mb-1">{person.name}</h6>
        <p className="text-muted small mb-3">ID: {person.id}</p>

        <div className="d-grid gap-2">
          {!editing ? (
            <>
              <button className="btn btn-secondary btn-sm" onClick={onEdit}>Editar</button>
              <button className="btn btn-outline-danger btn-sm">Status</button>
            </>
          ) : (
            <>
              <button className="btn btn-success btn-sm" onClick={onSave} disabled={!isChanged}>Save</button>
              <button className="btn btn-outline-secondary btn-sm" onClick={onCancel}>Cancel</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}