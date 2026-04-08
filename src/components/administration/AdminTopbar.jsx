import { useContext } from "react";
import AuthContext from "../../context/appContext";
import "./admin.css";

export default function AdminTopbar() {
  const { user } = useContext(AuthContext);
  const initials = user?.name?.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase() || "AD";

  return (
    <div className="topbar">
      <div className="d-flex align-items-center gap-3">
        <button
          className="btn btn-sm d-md-none"
          style={{ background: "rgba(255,255,255,0.07)", border: "0.5px solid var(--card-border)", color: "#d8dee8" }}
          data-bs-toggle="offcanvas"
          data-bs-target="#mobileSidebar"
        >
          ☰
        </button>
        <div className="d-none d-sm-block">
          <div className="topbar-sup">Federal Bureau of Prisons — Admin Console</div>
          <div className="topbar-name">Albuquerque Federal Correctional Institution</div>
        </div>
      </div>

      <div className="d-flex align-items-center gap-2">
        <span className="admin-badge d-none d-sm-inline">Administrator</span>
        <div className="avatar-circle">{initials}</div>
        <span className="d-none d-sm-inline" style={{ fontSize: 12, color: "#8aaac8", fontFamily: "'Raleway', sans-serif" }}>
          {user?.name}
        </span>
      </div>
    </div>
  );
}