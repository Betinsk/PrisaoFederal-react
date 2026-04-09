import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/appContext";
import Footer from "../footer/Footer";

const navItems = [
  {
    section: "Main",
    items: [
      { name: "Dashboard", path: "/admin", icon: "grid" },
      { name: "Consult Persons", path: "/person", icon: "users" },
      { name: "Inmate Registration", path: "/imate", icon: "lock" },
      { name: "Person Register", path: "/personRegister", icon: "user-plus" },
    ],
  },
  {
    section: "Operations",
    items: [
      { name: "Visit Control", path: "/visits", icon: "list", soon: true },
      { name: "Transfers", path: "/transfers", icon: "link", soon: true },
      { name: "Reports", path: "/reports", icon: "file", soon: true },
    ],
  },
  {
    section: "System",
    items: [
      { name: "Settings", path: "/settings", icon: "settings", soon: true },
      { name: "Audit Log", path: "/audit", icon: "shield", soon: true },
    ],
  },
];

const stats = [
  { label: "Total Inmates", value: "1,482", sub: "Capacity: 1,600" },
  { label: "Visits Today", value: "34", sub: "Scheduled: 41" },
  { label: "Pending Registrations", value: "7", sub: "Awaiting review" },
  { label: "Alerts", value: "2", sub: "Require action", alert: true },
];

const quickCards = [
  { name: "Consult Persons", path: "/person", desc: "Search registered individuals", icon: "📋" },
  { name: "Inmate Registration", path: "/imate", desc: "Register or update inmates", icon: "🔒" },
  { name: "Person Register", path: "/personRegister", desc: "Add a new person record", icon: "👤" },
  { name: "Reports", path: "/reports", desc: "Generate system reports", icon: "📁", soon: true },
];

const styles = `
  :root {
    --sidebar-bg: #0d2b55;
    --sidebar-border: rgba(255,255,255,0.07);
    --topbar-bg: #0a2248;
    --topbar-border: rgba(200,168,75,0.2);
    --content-bg: #f0f2f5;
    --card-bg: #ffffff;
    --card-border: #dde1ea;
    --accent: #c8a84b;
    --accent-dim: rgba(200,168,75,0.12);
    --text-muted-custom: #8a94a8;
    --text-main: #1a2233;
  }
  body { background: var(--content-bg); color: var(--text-main); }

  .admin-outer {
    margin: 24px 20px 28px;
    border-radius: 10px;
    overflow: hidden;
    border: 0.5px solid #c8cdd8;
    box-shadow: 0 4px 24px rgba(13,43,85,0.10);
  }

  .sidebar { width: 220px; min-width: 220px; background: var(--sidebar-bg); border-right: 0.5px solid var(--sidebar-border); min-height: 100vh; }
  .sidebar .brand { border-bottom: 0.5px solid var(--sidebar-border); padding: 16px 14px 12px; }
  .sidebar .brand-icon { width: 32px; height: 32px; background: var(--accent-dim); border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 15px; margin-bottom: 7px; border: 0.5px solid rgba(200,168,75,0.25); }
  .sidebar .brand-sup { font-size: 9px; color: #4a6070; text-transform: uppercase; letter-spacing: 0.7px; }
  .sidebar .brand-name { font-size: 13px; color: #d8dee8; font-weight: bold; margin-top: 2px; font-family: Georgia, serif; }
  .sidebar .section-label { font-size: 9px; color: #4a6070; font-weight: 600; letter-spacing: 0.9px; text-transform: uppercase; padding: 18px 16px 6px; }

  .nav-item-link { display: flex; align-items: center; gap: 9px; padding: 9px 16px; font-size: 12px; color: #8aaac8; text-decoration: none; border-left: 3px solid transparent; transition: background 0.15s; }
  .nav-item-link:hover { background: rgba(255,255,255,0.04); color: #d8dee8; }
  .nav-item-link.active { border-left-color: var(--accent); background: var(--accent-dim); color: #f0e0a0; }
  .nav-item-disabled { display: flex; align-items: center; gap: 9px; padding: 9px 16px; font-size: 12px; color: #3a4e68; cursor: not-allowed; }
  .soon-badge { font-size: 9px; background: var(--accent-dim); color: var(--accent); padding: 1px 5px; border-radius: 3px; margin-left: auto; border: 0.5px solid rgba(200,168,75,0.2); }

  .topbar { background: var(--topbar-bg); border-bottom: 2px solid var(--accent); height: 50px; padding: 0 20px; }
  .topbar-sup { font-size: 9px; color: #5a7090; text-transform: uppercase; letter-spacing: 0.5px; }
  .topbar-name { font-size: 12px; color: #dce4f0; font-weight: bold; font-family: Georgia, serif; }
  .admin-badge { font-size: 9px; background: var(--accent-dim); color: var(--accent); padding: 2px 9px; border-radius: 3px; font-weight: 600; border: 0.5px solid rgba(200,168,75,0.3); }
  .avatar-circle { width: 30px; height: 30px; border-radius: 50%; background: var(--accent); color: #0d2b55; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 700; }

  .section-title { font-size: 10px; color: var(--text-muted-custom); text-transform: uppercase; letter-spacing: 0.6px; margin-bottom: 3px; }
  .main-title { font-size: 19px; font-weight: bold; color: #0d2b55; margin-bottom: 20px; font-family: Georgia, serif; border-bottom: 2px solid var(--accent); display: inline-block; padding-bottom: 5px; }

  .stat-card { background: var(--card-bg); border: 0.5px solid var(--card-border); border-radius: 6px; padding: 13px 15px; border-top: 3px solid var(--accent); }
  .stat-card.alert-card { border-top-color: #c0392b; }
  .stat-label { font-size: 9px; color: var(--text-muted-custom); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
  .stat-value { font-size: 22px; font-weight: bold; color: #0d2b55; }
  .stat-value.danger { color: #c0392b; }
  .stat-sub { font-size: 11px; color: var(--text-muted-custom); margin-top: 2px; }

  .quick-card { background: var(--card-bg); border: 0.5px solid var(--card-border); border-radius: 6px; padding: 13px 15px; text-decoration: none; color: var(--text-main); display: block; transition: border-color 0.15s, box-shadow 0.15s; border-bottom: 2px solid var(--accent); }
  .quick-card:hover { box-shadow: 0 2px 10px rgba(13,43,85,0.1); color: var(--text-main); }
  .quick-card-icon { width: 30px; height: 30px; background: var(--accent-dim); border-radius: 5px; display: flex; align-items: center; justify-content: center; margin-bottom: 9px; font-size: 14px; border: 0.5px solid rgba(200,168,75,0.25); }

  .offcanvas-custom { background: var(--sidebar-bg); border-right: 0.5px solid var(--sidebar-border); }
`;

function SidebarContent({ location }) {
  return (
    <>
      {navItems.map((group, i) => (
        <div key={group.section} style={i > 0 ? { borderTop: "0.5px solid rgba(255,255,255,0.06)", marginTop: 4 } : {}}>
          <div className="section-label">{group.section}</div>
          {group.items.map((item) =>
            item.soon ? (
              <div key={item.name} className="nav-item-disabled">
                {item.name}
                <span className="soon-badge">Soon</span>
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-item-link${location.pathname === item.path ? " active" : ""}`}
              >
                {item.name}
              </Link>
            )
          )}
        </div>
      ))}
    </>
  );
}

function AdminPanel() {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const initials = user?.name?.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase() || "AD";

  return (
    <div className="container-fluid px-0">
      <style>{styles}</style>

      <div className="admin-outer">
        <div className="d-flex" style={{ minHeight: "100vh", background: "var(--content-bg)" }}>

          {/* SIDEBAR desktop */}
          <div className="sidebar d-none d-md-flex flex-column">
            <div className="brand">
              <div className="brand-icon">🏛️</div>
              <div className="brand-sup">U.S. Federal Bureau</div>
              <div className="brand-name">Prison Management</div>
            </div>
            <SidebarContent location={location} />
          </div>

          {/* OFFCANVAS mobile */}
          <div className="offcanvas offcanvas-start offcanvas-custom" tabIndex="-1" id="mobileSidebar">
            <div className="offcanvas-header" style={{ borderBottom: "0.5px solid var(--sidebar-border)" }}>
              <span style={{ fontSize: 13, color: "#d8dee8", fontWeight: "bold", fontFamily: "Georgia, serif" }}>
                Prison Management
              </span>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" />
            </div>
            <div className="offcanvas-body p-0">
              <SidebarContent location={location} />
            </div>
          </div>

          {/* MAIN */}
          <div className="flex-grow-1 d-flex flex-column" style={{ minWidth: 0 }}>

            {/* TOPBAR */}
            <div className="topbar d-flex align-items-center justify-content-between">
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
                <span className="admin-badge d-none d-sm-inline">ADMINISTRATOR</span>
                <div className="avatar-circle">{initials}</div>
                <span className="d-none d-sm-inline" style={{ fontSize: 12, color: "#8aaac8" }}>
                  {user?.name}
                </span>
              </div>
            </div>

            {/* CONTENT */}
            <div className="flex-grow-1 p-3 p-md-4" style={{ background: "var(--content-bg)" }}>
              <div className="section-title">Overview</div>
              <div className="main-title">Dashboard</div>

              {/* STATS */}
              <div className="row g-3 mb-4">
                {stats.map((s) => (
                  <div key={s.label} className="col-6 col-xl-3">
                    <div className={`stat-card h-100${s.alert ? " alert-card" : ""}`}>
                      <div className="stat-label">{s.label}</div>
                      <div className={`stat-value${s.alert ? " danger" : ""}`}>{s.value}</div>
                      <div className="stat-sub">{s.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* QUICK ACCESS */}
              <div className="section-title mb-3">Quick Access</div>
              <div className="row g-3">
                {quickCards.map((c) => (
                  <div key={c.name} className="col-12 col-sm-6 col-lg-3">
                    <Link
                      to={c.path}
                      className="quick-card"
                      style={c.soon ? { opacity: 0.45, pointerEvents: "none" } : {}}
                    >
                      <div className="quick-card-icon">{c.icon}</div>
                      <div style={{ fontSize: 13, fontWeight: "bold", color: "#0d2b55", marginBottom: 3 }}>
                        {c.name}
                        {c.soon && <span className="soon-badge ms-1">Soon</span>}
                      </div>
                      <div style={{ fontSize: 11, color: "var(--text-muted-custom)" }}>{c.desc}</div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AdminPanel;
