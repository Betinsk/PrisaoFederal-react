import { Link } from "react-router-dom";

const stats = [
  { label: "Total Inmates",         value: "1,482", sub: "Capacity: 1,600" },
  { label: "Visits Today",          value: "34",    sub: "Scheduled: 41" },
  { label: "Pending Registrations", value: "7",     sub: "Awaiting review" },
  { label: "Alerts",                value: "2",     sub: "Require action", alert: true },
];

const quickCards = [
  { name: "Consult Persons",    path: "/person",         desc: "Search registered individuals", icon: "📋" },
  { name: "Inmate Registration",path: "/imate",          desc: "Register or update inmates",    icon: "🔒" },
  { name: "Person Register",    path: "/personRegister", desc: "Add a new person record",       icon: "👤" },
  { name: "Reports",            path: "/reports",        desc: "Generate system reports",       icon: "📁", soon: true },
];

export default function AdminDashboard() {
  return (
    <>
      <div className="section-title">Overview</div>
      <div className="main-title">Dashboard</div>

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
              <div className="quick-card-name">
                {c.name}
                {c.soon && <span className="soon-badge ms-1">Soon</span>}
              </div>
              <div className="quick-card-desc">{c.desc}</div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}