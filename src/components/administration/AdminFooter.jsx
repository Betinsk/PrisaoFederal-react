// AdminFooter.jsx
export default function AdminFooter() {
  return (
    <footer style={{ background: "#0d2b55", borderTop: "2px solid #c8a84b", flexShrink: 0 }}>

      {/* Main footer */}
      <div style={{ padding: "20px 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "20px" }}>

        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <div style={{ width: 28, height: 28, background: "rgba(200,168,75,0.15)", border: "0.5px solid rgba(200,168,75,0.3)", borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>
              🏛️
            </div>
            <span style={{ fontSize: 12, fontWeight: 600, color: "#d8dee8", fontFamily: "'Raleway', sans-serif" }}>
              Prison Management
            </span>
          </div>
          <p style={{ fontSize: 10, color: "#4a6070", fontFamily: "'Raleway', sans-serif", lineHeight: 1.6, margin: 0 }}>
            U.S. Federal Bureau of Prisons<br />
            Admin Console System<br />
            Albuquerque Federal Correctional Institution
          </p>
        </div>

        {/* Quick links */}
        <div>
          <p style={{ fontSize: 9, color: "#c8a84b", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "'Raleway', sans-serif", marginBottom: 8, fontWeight: 600 }}>
            Quick Access
          </p>
          {[
            { label: "Dashboard",          path: "/admin" },
            { label: "Consult Persons",    path: "/admin/persons" },
            { label: "Inmate Registration",path: "/admin/inmate-register" },
            { label: "Person Register",    path: "/admin/person-register" },
          ].map(({ label, path }) => (
            <a key={path} href={path} style={{ display: "block", fontSize: 11, color: "#6a8aaa", fontFamily: "'Raleway', sans-serif", textDecoration: "none", marginBottom: 4, transition: "color .15s" }}
              onMouseEnter={(e) => e.target.style.color = "#c8a84b"}
              onMouseLeave={(e) => e.target.style.color = "#6a8aaa"}
            >
              {label}
            </a>
          ))}
        </div>

        {/* System */}
        <div>
          <p style={{ fontSize: 9, color: "#c8a84b", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "'Raleway', sans-serif", marginBottom: 8, fontWeight: 600 }}>
            System
          </p>
          {["Settings", "Audit Log", "Reports", "Transfers"].map((item) => (
            <span key={item} style={{ display: "block", fontSize: 11, color: "#3a4e68", fontFamily: "'Raleway', sans-serif", marginBottom: 4 }}>
              {item} <span style={{ fontSize: 9, background: "rgba(200,168,75,0.1)", color: "#c8a84b", padding: "1px 4px", borderRadius: 3, border: "0.5px solid rgba(200,168,75,0.2)" }}>Soon</span>
            </span>
          ))}
        </div>

        {/* Contact */}
        <div>
          <p style={{ fontSize: 9, color: "#c8a84b", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "'Raleway', sans-serif", marginBottom: 8, fontWeight: 600 }}>
            Contact
          </p>
          {[
            { label: "Main Switchboard", value: "(202) 307-3198" },
            { label: "Emergency (24/7)", value: "(505) 117-8987" },
            { label: "Address", value: "320 First St NW, Washington, DC 20534" },
          ].map(({ label, value }) => (
            <div key={label} style={{ marginBottom: 8 }}>
              <div style={{ fontSize: 9, color: "#4a6070", fontFamily: "'Raleway', sans-serif", letterSpacing: "0.04em", textTransform: "uppercase" }}>{label}</div>
              <div style={{ fontSize: 11, color: "#8aaac8", fontFamily: "'Raleway', sans-serif" }}>{value}</div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "0.5px solid rgba(200,168,75,0.15)", padding: "10px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
        <span style={{ fontSize: 10, color: "#3a4e68", fontFamily: "'Raleway', sans-serif" }}>
          © {new Date().getFullYear()} Federal Bureau of Prisons — U.S. Department of Justice
        </span>
        <div style={{ display: "flex", gap: 16 }}>
          {["Privacy Policy", "Accessibility", "FOIA"].map((item) => (
            <span key={item} style={{ fontSize: 10, color: "#3a4e68", fontFamily: "'Raleway', sans-serif", cursor: "pointer", transition: "color .15s" }}
              onMouseEnter={(e) => e.target.style.color = "#c8a84b"}
              onMouseLeave={(e) => e.target.style.color = "#3a4e68"}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

    </footer>
  );
}