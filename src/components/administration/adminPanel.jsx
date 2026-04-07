import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/appContext";
import Nav from "../nav/nav";
import Footer from "../footer/FooterP";

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
    --sidebar-bg: #031736;
    --sidebar-border: rgba(10, 10, 10, 0.07);
    --topbar-bg: #4c6897;
    --topbar-border: rgba(255,255,255,0.08);
    --content-bg: #ffffff;
    --card-bg:    #ffffff; 
    --card-border: #dde1ea; 
    --accent: #4a90d9;
    --text-muted-custom: #040508;
    --text-main:     #000307;
  }
  body { background: var(--content-bg); color: var(--text-main); }
  .sidebar { width: 230px; min-width: 230px; background: var(--sidebar-bg); border-right: 0.5px solid var(--sidebar-border); min-height: 100vh; }
  .sidebar .brand { border-bottom: 0.5px solid var(--sidebar-border); padding: 18px 16px 14px; }
  .sidebar .brand-icon { width: 34px; height: 34px; background: rgba(255,255,255,0.08); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px; margin-bottom: 8px; }
  .sidebar .section-label { font-size: 10px; color: #4a6070; font-weight: 600; letter-spacing: 0.9px; text-transform: uppercase; padding: 14px 16px 5px; }
  .nav-item-link { display: flex; align-items: center; gap: 9px; padding: 7px 16px; font-size: 13px; color: #99a8bc; text-decoration: none; border-left: 3px solid transparent; transition: background 0.15s; }
  .nav-item-link:hover { background: rgba(255,255,255,0.04); color: #d8dee8; }
  .nav-item-link.active { border-left-color: var(--accent); background: rgba(74,144,217,0.1); color: #d8dee8; }
  .nav-item-disabled { display: flex; align-items: center; gap: 9px; padding: 7px 16px; font-size: 13px; color: #4a5568; cursor: not-allowed; }
  .soon-badge { font-size: 9px; background: rgba(74,144,217,0.15); color: #4a90d9; padding: 1px 5px; border-radius: 3px; margin-left: auto; }
  .topbar { background: var(--topbar-bg); border-bottom: 0.5px solid var(--topbar-border); height: 50px; padding: 0 20px; }
  .admin-badge { font-size: 10px; background: rgba(74,144,217,0.15); color: var(--accent); padding: 2px 9px; border-radius: 3px; font-weight: 600; }
  .avatar-circle { width: 30px; height: 30px; border-radius: 50%; background: var(--accent); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 600; }
  .stat-card { background: var(--card-bg); border: 0.5px solid var(--card-border); border-radius: 8px; padding: 14px 16px; }
  .stat-card.alert-card { border-left: 3px solid #c0392b; border-radius: 0 8px 8px 0; }
  .stat-label { font-size: 10px; color: var(--text-muted-custom); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
  .stat-value { font-size: 22px; font-weight: 500; color: #dce4f0; }
  .stat-value.danger { color: #e05555; }
  .stat-sub { font-size: 11px; color: var(--text-muted-custom); margin-top: 2px; }
  .section-title { font-size: 11px; color: var(--text-muted-custom); text-transform: uppercase; letter-spacing: 0.6px; margin-bottom: 4px; }
  .main-title { font-size: 19px; font-weight: 500; color: #dce4f0; margin-bottom: 20px; }
  .quick-card { background: var(--card-bg); border: 0.5px solid var(--card-border); border-radius: 8px; padding: 14px 16px; text-decoration: none; color: var(--text-main); display: block; transition: background 0.15s; }
  .quick-card:hover { background: #2e343d; color: var(--text-main); }
  .quick-card-icon { width: 32px; height: 32px; background: rgba(74,144,217,0.12); border-radius: 6px; display: flex; align-items: center; justify-content: center; margin-bottom: 10px; font-size: 15px; }
  .offcanvas-custom { background: var(--sidebar-bg); border-right: 0.5px solid var(--sidebar-border); }
`;

function SidebarContent({ location }) {
  return (
    <>

      {navItems.map((group) => (
        <div key={group.section}>
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
    
    <div className="container">
       

      <style>{styles}</style>
      <div className="d-flex" style={{ minHeight: "100vh", background: "var(--content-bg)" }}>

        {/* SIDEBAR desktop */}
        <div className="sidebar d-none d-md-flex flex-column">
          <div className="brand">
            <div className="brand-icon">🏛️</div>
            <div style={{ fontSize: 10, color: "#4a6070", textTransform: "uppercase", letterSpacing: 0.5 }}>
              U.S. Federal Bureau
            </div>
            <div style={{ fontSize: 13, color: "#d8dee8", fontWeight: 500, marginTop: 2 }}>
              Prison Management
            </div>
          </div>
          <SidebarContent location={location} />
        </div>

        {/* OFFCANVAS mobile */}
        <div className="offcanvas offcanvas-start offcanvas-custom" tabIndex="-1" id="mobileSidebar">
          <div className="offcanvas-header" style={{ borderBottom: "0.5px solid var(--sidebar-border)" }}>
            <span style={{ fontSize: 13, color: "#d8dee8", fontWeight: 500 }}>Prison Management</span>
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
                <div style={{ fontSize: 10, color: "var(--text-muted-custom)" }}>
                  Federal Bureau of Prisons — Admin Console
                </div>
                <div style={{ fontSize: 13, color: "#dce4f0", fontWeight: 500 }}>
                  Albuquerque Federal Correctional Institution
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <span className="admin-badge d-none d-sm-inline">ADMINISTRATOR</span>
              <div className="avatar-circle">{initials}</div>
              <span className="d-none d-sm-inline" style={{ fontSize: 13, color: "#9aabbc" }}>
                {user?.name}
              </span>
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex-grow-1 p-3 p-md-4">
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
                    <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 3 }}>
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
        <Footer />
    </div>
  
  );
}

export default AdminPanel;