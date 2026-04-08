import { useRef } from "react";
import { uploadMugshot } from "../../services/imagesService";
import { requestWithToast } from "../../exceptions/toast";

const MugshotsViewer = ({ person, onPersonUpdate }) => {
  const fileInputRef = useRef(null);

  async function handleMugshotUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    try {
      await requestWithToast(uploadMugshot(person.id, file), "Mugshot added!");
      onPersonUpdate();
    } catch {}
  }

  return (
    <div className="container-fluid">

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, paddingBottom: 8, borderBottom: "0.5px solid var(--bs-border-color)" }}>
        <p style={{ fontSize: 10, letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--bs-secondary-color)", margin: 0 }}>
          Mugshots
        </p>
        <button
          onClick={() => fileInputRef.current.click()}
          style={{ fontSize: 12, padding: "5px 12px", borderRadius: "var(--bs-border-radius)", border: "0.5px solid var(--bs-border-color)", background: "transparent", cursor: "pointer", color: "var(--bs-body-color)", display: "flex", alignItems: "center", gap: 6 }}
        >
          <i className="bi bi-camera" style={{ fontSize: 13 }} />
          Add mugshot
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleMugshotUpload}
          onClick={(e) => (e.target.value = null)}
        />
      </div>

      {/* Grid */}
      {person.mugshots?.length > 0 ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: 12 }}>
          {person.mugshots.map((mugshot) => (
            <div
              key={mugshot.id}
              style={{ aspectRatio: "3/4", borderRadius: "var(--bs-border-radius-lg, 12px)", overflow: "hidden", border: "0.5px solid var(--bs-border-color)" }}
            >
              <img
                src={mugshot.imageUrl}
                alt="mugshot"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          ))}

          {/* Placeholder de upload */}
          <div
            onClick={() => fileInputRef.current.click()}
            style={{ aspectRatio: "3/4", borderRadius: "var(--bs-border-radius-lg, 12px)", border: "0.5px dashed var(--bs-border-color)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--bs-secondary-color)", fontSize: 28, transition: "background .15s" }}
            onMouseEnter={(e) => e.currentTarget.style.background = "var(--bs-tertiary-bg)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
          >
            +
          </div>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: 12 }}>
          <div
            onClick={() => fileInputRef.current.click()}
            style={{ aspectRatio: "3/4", borderRadius: "var(--bs-border-radius-lg, 12px)", border: "0.5px dashed var(--bs-border-color)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--bs-secondary-color)", gap: 8, transition: "background .15s" }}
            onMouseEnter={(e) => e.currentTarget.style.background = "var(--bs-tertiary-bg)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
          >
            <i className="bi bi-camera" style={{ fontSize: 22 }} />
            <span style={{ fontSize: 11 }}>Add mugshot</span>
          </div>
        </div>
      )}

    </div>
  );
};

export default MugshotsViewer;