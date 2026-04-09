
function Footer() {
  return (
    <footer style={{
      background: "#0a2248",
      borderTop: "1px solid rgba(200,168,75,0.25)",
      padding: "10px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "8px",
    }}>
      <span style={{ fontSize: 11, color: "#4a6070" }}>
        Federal Bureau of Prisons &nbsp;&bull;&nbsp; U.S. Department of Justice &nbsp;&bull;&nbsp; Official U.S. Government System
      </span>
      <div style={{ display: "flex", gap: 16 }}>
        {["Privacy Policy", "Accessibility", "Disclaimer", "FOIA"].map((l) => (
          <a key={l} href="#" style={{ fontSize: 11, color: "#4a6070", textDecoration: "none" }}
            onMouseEnter={e => e.target.style.color = "#8aaac8"}
            onMouseLeave={e => e.target.style.color = "#4a6070"}
          >{l}</a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
