export default function AdminFooter() {
  return (
    <footer style={{
      background: "#0a2248",
      borderTop: "1px solid rgba(200,168,75,0.2)",
      padding: "10px 32px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 8,
      flexShrink: 0,
    }}>
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
    </footer>
  );
}