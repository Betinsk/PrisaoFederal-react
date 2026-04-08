import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/appContext";
import Logout from "../login/LogOut";
import "./nav.css";

const navLinksAuth = [
  { label: "Person Register", to: "/admin/person-register" },
  { label: "Admin Panel",     to: "/admin" },
  { label: "Inmates",         to: "/admin/inmate-register" },
];

const personDropdown = [
  { label: "Consult Person",  to: "/admin/persons" },
  { label: "Register Person", to: "/admin/person-register" },
];

const joinDropdown = [
  { label: "View Opportunities",        to: "/" },
  { label: "Current Openings",          to: "/" },
  { label: "Work at the Federal Bureau",to: "/" },
];

export default function NavBar() {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  const initials = user?.name
    ?.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase() || "U";

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className="bop-topbar">
        <div className="container d-flex align-items-center gap-3">
          <div className="bop-seal">&#9878;</div>
          <div>
            <div className="bop-brand-title">Federal Bureau of Prisons</div>
            <div className="bop-brand-motto">Courage. Respect. Integrity. Correctional Excellence.</div>
          </div>
        </div>
      </div>

      <nav className="bop-navbar navbar navbar-expand-lg p-0">
        <div className="container">

          <button
            className="bop-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#bopMainNav"
          >
            &#9776;
          </button>

          <div className="collapse navbar-collapse" id="bopMainNav">
            <ul className="navbar-nav">
              {user ? (
                <>
                  {navLinksAuth.map(({ label, to }) => (
                    <li className="nav-item" key={to}>
                      <Link
                        to={to}
                        className={`nav-link bop-nav-link${isActive(to) ? " active-link" : ""}`}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}

                  <li className="nav-item dropdown">
                    <a className="nav-link bop-nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                      Person
                    </a>
                    <ul className="dropdown-menu bop-dropdown-menu">
                      {personDropdown.map(({ label, to }) => (
                        <li key={label}>
                          <Link to={to} className="dropdown-item bop-dropdown-item">{label}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                </>
              ) : (
                <li className="nav-item dropdown">
                  <a className="nav-link bop-nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                    Join Us
                  </a>
                  <ul className="dropdown-menu bop-dropdown-menu">
                    {joinDropdown.map(({ label, to }) => (
                      <li key={label}>
                        <Link to={to} className="dropdown-item bop-dropdown-item">{label}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              )}
            </ul>

            <div className="ms-auto d-flex align-items-center">
              {user ? (
                <>
                  <div className="bop-user-badge d-none d-lg-flex">
                    <div className="bop-user-avatar">{initials}</div>
                    <span>{user.name}</span>
                  </div>
                  <div style={{ padding: "0 14px", borderLeft: "0.5px solid #dde3ed" }}>
                    <Logout className="bop-logout-btn" />
                  </div>
                </>
              ) : (
                <Link to="/login" className="nav-link bop-login-btn">Login</Link>
              )}
            </div>
          </div>

        </div>
      </nav>
    </>
  );
}