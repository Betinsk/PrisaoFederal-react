export function Tabs({ tab, setTab }) {
  return (
    <ul className="nav nav-tabs mb-3">
      {["person", "address", "inmate", "history"].map(t => (
        <li key={t} className="nav-item">
          <button
            className={`nav-link ${tab === t ? "active" : ""}`}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        </li>
      ))}
    </ul>
  );
}