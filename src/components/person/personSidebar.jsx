import { useRef } from "react";
import { uploadProfilePicture } from "../../services/imagesService";
import { requestWithToast } from "../../exceptions/toast";

function getInitials(name = "") {
  return name.split(" ").slice(0, 2).map((n) => n[0]).join("").toUpperCase();
}

const sectionLabelStyle = {
  fontSize: 10, letterSpacing: "0.05em", textTransform: "uppercase",
  color: "var(--bs-secondary-color)", marginBottom: 10,
};

const metaRowStyle = {
  display: "flex", justifyContent: "space-between",
  alignItems: "center", marginBottom: 6,
};

export function PersonSidebar({ person, editing, onEdit, onSave, onCancel, isChanged, onPersonUpdate }) {
  const fileInputRef = useRef(null);
  const isInmate = !!(person?.commitedCrime || person?.arrestDate || person?.sentencedYears);

  async function handleProfileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    try {
      await requestWithToast(uploadProfilePicture(person.id, file), "Profile picture updated!");
      onPersonUpdate();
    } catch {}
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div className="card border" style={{ borderRadius: "var(--bs-border-radius-lg, 12px)" }}>
        <div className="card-body d-flex flex-column align-items-center text-center p-4">

          {/* Avatar */}
          <div
            style={{ position: "relative", marginBottom: 12, cursor: "pointer" }}
            onClick={() => fileInputRef.current.click()}
            title="Click to change photo"
          >
            {person.profilePictureUrl ? (
              <img
                src={person.profilePictureUrl}
                className="rounded-circle border"
                style={{ width: 80, height: 80, objectFit: "cover" }}
                alt="profile"
              />
            ) : (
              <div
                className="rounded-circle border d-flex align-items-center justify-content-center"
                style={{ width: 80, height: 80, fontSize: 26, fontWeight: 500, background: "#E6F1FB", color: "#0C447C" }}
              >
                {getInitials(person.name)}
              </div>
            )}
            <div
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{ position: "absolute", bottom: 0, right: 0, width: 22, height: 22, background: "#185FA5", border: "2px solid white" }}
            >
              <i className="bi bi-camera-fill text-white" style={{ fontSize: 10 }} />
            </div>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleProfileUpload}
            onClick={(e) => (e.target.value = null)}
          />

          {/* Name + badge */}
          <p style={{ fontWeight: 500, fontSize: 15, marginBottom: 2 }}>{person.name}</p>
          <p style={{ fontSize: 11, color: "var(--bs-secondary-color)", fontFamily: "monospace", marginBottom: 8 }}>
            #{person.socialSecurity}
          </p>

          {isInmate && (
            <span style={{ fontSize: 11, padding: "2px 10px", borderRadius: 99, background: "#FCEBEB", color: "#A32D2D", marginBottom: 16 }}>
              Inmate
            </span>
          )}

          {/* Meta */}
          <div style={{ width: "100%", borderTop: "0.5px solid var(--bs-border-color)", paddingTop: 14, marginBottom: 14 }}>
            <div style={sectionLabelStyle}>Details</div>
            {[
              { label: "Gender",     value: person.gender },
              { label: "Birth date", value: person.birthDate },
              ...(isInmate ? [{ label: "Arrest date", value: person.arrestDate }] : []),
            ].map(({ label, value }) => (
              <div key={label} style={metaRowStyle}>
                <span style={{ fontSize: 11, color: "var(--bs-secondary-color)" }}>{label}</span>
                <span style={{ fontSize: 11, fontWeight: 500 }}>{value || "—"}</span>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 6 }}>
            {!editing ? (
              <>
                <button className="btn btn-sm btn-outline-secondary w-100" onClick={onEdit}>Edit profile</button>
                <button className="btn btn-sm w-100" style={{ border: "0.5px solid #F09595", color: "#A32D2D", background: "transparent" }}>
                  Change status
                </button>
              </>
            ) : (
              <>
                <button className="btn btn-sm btn-success w-100" onClick={onSave} disabled={!isChanged}>Save</button>
                <button className="btn btn-sm btn-outline-secondary w-100" onClick={onCancel}>Cancel</button>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}