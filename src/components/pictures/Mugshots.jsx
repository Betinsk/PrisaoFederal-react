import { useRef } from "react";
import { uploadMugshot } from "../../services/imagesService";
import { requestWithToast } from "../../exceptions/toast";

const MugshotsViewer = ({ person, onPersonUpdate }) => {
  const fileInputRef = useRef(null);

  async function handleMugshotUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    try {
      await requestWithToast(
        uploadMugshot(person.id, file),
        "Mugshot added!"
      );
      onPersonUpdate(); // 👈 recarrega a person
    } catch {
      // toast já exibido
    }
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="fw-bold text-uppercase mb-0">{person.name} - Mugshots</h6>
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={() => fileInputRef.current.click()}
        >
          <i className="bi bi-camera me-1"></i> Add Mugshot
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleMugshotUpload}
          onClick={(e) => e.target.value = null} // 👈 idem
        />
      </div>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {person.mugshots?.length > 0 ? (
          person.mugshots.map((mugshot) => (
            <img
              key={mugshot.id}
              src={mugshot.imageUrl}
              alt="mugshot"
              width={150}
              height={150}
              style={{ objectFit: "cover", borderRadius: "8px" }}
            />
          ))
        ) : (
          <p className="text-muted">No mugshots registered.</p>
        )}
      </div>
    </div>
  );
};

export default MugshotsViewer;