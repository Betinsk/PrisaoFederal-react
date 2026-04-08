export function Tabs({ tab, setTab, wasInmate, tags }) {
  const visibleTabs = tags.filter((t) => t !== "inmate" || wasInmate);

  const labels = {
    person:   "Personal",
    address:  "Addresses",
    inmate:   "Inmate",
    history:  "History",
    pictures: "Pictures",
  };

  return (
    <div style={{ display: "flex", borderBottom: "0.5px solid var(--bs-border-color)", marginBottom: 20, gap: 0 }}>
      {visibleTabs.map((t) => (
        <button
          key={t}
          onClick={() => setTab(t)}
          style={{
            padding: "8px 16px",
            fontSize: 14,
            border: "none",
            background: "transparent",
            cursor: "pointer",
            color: tab === t ? "#185FA5" : "var(--bs-secondary-color)",
            fontWeight: tab === t ? 500 : 400,
            borderBottom: tab === t ? "2px solid #185FA5" : "2px solid transparent",
            marginBottom: "-0.5px",
            transition: "color .15s, border-color .15s",
            textTransform: "capitalize",
          }}
        >
          {labels[t] ?? t}
        </button>
      ))}
    </div>
  );
}