import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/appContext";
import Logout from "../login/LogOut";

const CSS = `
  .bop-topbar { background: #0d2b55; border-bottom: 3px solid #c8a84b; padding: 10px 0; }
  .bop-seal { width: 64px; height: 64px; min-width: 64px; border-radius: 50%; background: #c8a84b; color: #0d2b55; display: flex; align-items: center; justify-content: center; font-size: 28px; }
  .bop-brand-title { color: #fff; font-size: 22px; font-family: Georgia, serif; letter-spacing: 1px; line-height: 1.2; }
  .bop-brand-motto { color: #a8b8cc; font-size: 12px; font-family: Georgia, serif; font-style: italic; letter-spacing: 0.5px; margin-top: 2px; }
  .bop-navbar { background: #f4f6f9; border-bottom: 1px solid #d0d7e2; padding: 0; }
  .bop-nav-link { font-size: 13px; color: #1a3a60 !important; font-family: Arial, sans-serif; padding: 14px 16px !important; border-right: 0.5px solid #dde3ed; transition: background 0.15s, color 0.15s; }
  .bop-nav-link:hover { background: #e4eaf4 !important; color: #0d2b55 !important; }
  .bop-nav-link.active-link { background: #e4eaf4; color: #0d2b55 !important; border-bottom: 2px solid #c8a84b; }
  .bop-dropdown-menu { border-radius: 0; border: 0.5px solid #d0d7e2; padding: 4px 0; font-family: Arial, sans-serif; font-size: 13px; }
  .bop-dropdown-item { padding: 8px 16px; color: #1a3a60; font-size: 13px; }
  .bop-dropdown-item:hover { background: #e4eaf4; color: #0d2b55; }
  .bop-logout-btn { font-size: 13px; font-family: Arial, sans-serif; border: 1px solid #c8a84b; color: #0d2b55; background: transparent; padding: 6px 16px; cursor: pointer; transition: background 0.15s; margin: auto 0; white-space: nowrap; }
  .bop-logout-btn:hover { background: #c8a84b; color: #fff; }
  .bop-login-btn { font-size: 13px; font-family: Arial, sans-serif; background: #0d2b55; color: #fff !important; padding: 8px 18px !important; border: none; transition: background 0.15s; }
  .bop-login-btn:hover { background: #071a36 !important; color: #fff !important; }
  .bop-user-badge { display: flex; align-items: center; gap: 8px; padding: 8px 14px; font-family: Arial, sans-serif; font-size: 12px; color: #5a6a80; border-left: 0.5px solid #dde3ed; margin-left: auto; }
  .bop-user-avatar { width: 28px; height: 28px; border-radius: 50%; background: #0d2b55; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: bold; }
  .bop-toggler { border: 0.5px solid #c0c8d8; background: transparent; padding: 6px 10px; color: #0d2b55; font-size: 18px; cursor: pointer; }
`;

const navLinksAuth = [
  { label: "Person Register", to: "/personRegister" },
  { label: "Admin Panel", to: "/admin" },
  { label: "Inmates", to: "/imate" },
];

const personDropdown = [
  { label: "Consult Person", to: "/person" },
  { label: "Register Person", to: "/personRegister" },
];

const joinDropdown = [
  { label: "View Opportunities", to: "/" },
  { label: "Current Openings", to: "/" },
  { label: "Work at the Federal Bureau", to: "/" },
];

export default function NavBar() {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  const initials = user?.name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase() || "U";

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <style>{CSS}</style>

      {/* TOPBAR INSTITUCIONAL */}
      <div className="bop-topbar">
        <div className="container d-flex align-items-center gap-3">
          <div className="bop-seal">&#9878;</div>
          <div>
            <div className="bop-brand-title">Federal Bureau of Prisons</div>
            <div className="bop-brand-motto">Courage. Respect. Integrity. Correctional Excellence.</div>
          </div>
        </div>
      </div>

      {/* NAVBAR PRINCIPAL */}
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
                    <a
                      className="nav-link bop-nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      Person
                    </a>
                    <ul className="dropdown-menu bop-dropdown-menu">
                      {personDropdown.map(({ label, to }) => (
                        <li key={label}>
                          <Link to={to} className="dropdown-item bop-dropdown-item">
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link bop-nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      Join Us
                    </a>
                    <ul className="dropdown-menu bop-dropdown-menu">
                      {joinDropdown.map(({ label, to }) => (
                        <li key={label}>
                          <Link to={to} className="dropdown-item bop-dropdown-item">
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                </>
              )}
            </ul>

            {/* LADO DIREITO */}
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
                <Link to="/login" className="nav-link bop-login-btn">
                  Login
                </Link>
              )}
            </div>

          </div>
        </div>
      </nav>
    </>
  );
}