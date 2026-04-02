import tabs from "./tabs.css";

export function Tabs({ tab, setTab, wasInmate, tags}) {

    {/*recebe o wasInmate e verifica se é ou não, e depois mostra a respequitiva tab */}
    const tabs = tags
    .filter(t => t !== "inmate" || wasInmate);

  return (
    <ul className="nav nav-tabs mb-3">
        {tabs.map(t => (
        <li key={t} className="nav-item">
          <button
            className={`nav-link tab-small ${tab === t ? "active" : ""}`}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        </li>
      ))}
    </ul>
  );
}