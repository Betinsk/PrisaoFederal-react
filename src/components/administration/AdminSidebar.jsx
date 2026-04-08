import { Link, useLocation } from "react-router-dom";
import "./admin.css";

const navItems = [
  {
    section: "Main",
    items: [
      { name: "Dashboard",          path: "/admin" },
      { name: "Consult Persons",    path: "/admin/persons" },
      { name: "Inmate Registration",path: "/admin/inmate-register" },
      { name: "Person Register",    path: "/admin/person-register" },
    ],
  },
  {
    section: "Operations",
    items: [
      { name: "Visit Control", path: "/admin/visits",    soon: true },
      { name: "Transfers",     path: "/admin/transfers", soon: true },
      { name: "Reports",       path: "/admin/reports",   soon: true },
    ],
  },
  {
    section: "System",
    items: [
      { name: "Settings",  path: "/admin/settings", soon: true },
      { name: "Audit Log", path: "/admin/audit",    soon: true },
    ],
  },
];

function SidebarContent() {
  const location = useLocation();

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

export default function AdminSidebar() {
  return (
    <>
      {/* Desktop */}
      <div className="sidebar d-none d-md-flex flex-column">
        <div className="brand">
          <div className="brand-icon">🏛️</div>
          <div className="brand-sup">U.S. Federal Bureau</div>
          <div className="brand-name">Prison Management</div>
        </div>
        <SidebarContent />
      </div>

      {/* Mobile offcanvas */}
      <div className="offcanvas offcanvas-start offcanvas-custom" tabIndex="-1" id="mobileSidebar">
        <div className="offcanvas-header" style={{ borderBottom: "0.5px solid var(--sidebar-border)" }}>
          <span style={{ fontSize: 13, color: "#d8dee8", fontWeight: 600, fontFamily: "'Raleway', sans-serif" }}>
            Prison Management
          </span>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" />
        </div>
        <div className="offcanvas-body p-0">
          <SidebarContent />
        </div>
      </div>
    </>
  );
}