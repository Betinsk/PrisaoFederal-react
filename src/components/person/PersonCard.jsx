import { useState } from "react";
import { Link } from "react-router-dom";

function getInitials(name = "") {
  return name.split(" ").slice(0, 2).map((n) => n[0]).join("").toUpperCase();
}

function PersonCard({ person }) {
  const [open, setOpen] = useState(false);
  const isFemale = person.gender?.toLowerCase() === "female";
  const hasAddresses = person.addresses?.length > 0;

  return (
    <div className="card mb-3 border" style={{ borderRadius: "var(--bs-border-radius-lg, 12px)", overflow: "hidden" }}>

      {/* ── Top row ── */}
      <div className="card-body d-flex gap-3 align-items-start">

        {/* Avatar */}
        {person.profilePictureUrl ? (
          <img
            src={person.profilePictureUrl}
            alt={person.name}
            className="rounded-circle flex-shrink-0"
            style={{ width: 52, height: 52, objectFit: "cover" }}
          />
        ) : (
          <div
            className="rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center fw-500"
            style={{
              width: 52, height: 52, fontSize: 16,
              background: isFemale ? "#FBEAF0" : "#E6F1FB",
              color: isFemale ? "#72243E" : "#0C447C",
              border: "0.5px solid rgba(0,0,0,0.08)",
            }}
          >
            {getInitials(person.name)}
          </div>
        )}

        {/* Info */}
        <div className="flex-grow-1 min-w-0">
          <p className="mb-0 fw-500" style={{ fontSize: 15 }}>{person.name}</p>
          <p className="mb-2 text-muted" style={{ fontSize: 11, fontFamily: "monospace" }}>
            {person.socialSecurity}
          </p>

          <div className="row g-1" style={{ fontSize: 12 }}>
            <MetaItem label="Email"      value={person.email} />
            <MetaItem label="Birth date" value={person.birthDate} />
            <MetaItem label="Gender"     value={person.gender} />
            <MetaItem label="Type"       value={person.commitedCrime ? "Inmate" : "Person"} />
          </div>
        </div>

        {/* Actions */}
        <div className="d-flex flex-column align-items-end gap-2 flex-shrink-0">
          <Link
            to={`/person/${person.id}`}
            className="btn btn-sm btn-outline-secondary"
            style={{ fontSize: 12, whiteSpace: "nowrap" }}
          >
            View profile
          </Link>
          <span
            className="badge rounded-pill"
            style={{
              fontSize: 11,
              background: isFemale ? "#FBEAF0" : "#E6F1FB",
              color: isFemale ? "#72243E" : "#0C447C",
            }}
          >
            {person.gender}
          </span>
        </div>
      </div>

      {/* ── Accordion: Addresses ── */}
      {hasAddresses && (
        <>
          <button
            className="btn btn-light w-100 d-flex justify-content-between align-items-center rounded-0 border-top border-bottom-0 border-start-0 border-end-0"
            style={{ fontSize: 12, padding: "8px 16px", color: "var(--bs-secondary-color)" }}
            onClick={() => setOpen((v) => !v)}
          >
            <span>{person.addresses.length} address{person.addresses.length > 1 ? "es" : ""}</span>
            <span style={{ fontSize: 10, transform: open ? "rotate(180deg)" : "none", transition: "transform .2s" }}>&#9660;</span>
          </button>

          {open && (
            <div className="border-top overflow-auto" style={{ padding: "12px 16px" }}>
              <table className="table table-sm table-hover mb-0" style={{ fontSize: 12, tableLayout: "fixed", width: "100%" }}>
                <thead className="table-light">
                  <tr>
                    <th style={{ width: "30%" }}>Street</th>
                    <th style={{ width: "20%" }}>City</th>
                    <th style={{ width: "12%" }}>State</th>
                    <th style={{ width: "18%" }}>Country</th>
                    <th style={{ width: "20%" }}>Complement</th>
                  </tr>
                </thead>
                <tbody>
                  {person.addresses.map((addr, i) => (
                    <tr key={i}>
                      <td className="text-truncate">{addr.street || "—"}</td>
                      <td className="text-truncate">{addr.city || "—"}</td>
                      <td>{addr.state || "—"}</td>
                      <td>{addr.country || "—"}</td>
                      <td className="text-truncate">{addr.addressComplement || "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function MetaItem({ label, value }) {
  return (
    <div className="col-6 col-sm-3">
      <div style={{ fontSize: 10, color: "#999", letterSpacing: "0.04em" }}>{label.toUpperCase()}</div>
      <div className="text-truncate" style={{ fontSize: 12 }}>{value || "—"}</div>
    </div>
  );
}

export default PersonCard;