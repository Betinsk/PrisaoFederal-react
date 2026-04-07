import { useState } from "react";
import { Link } from "react-router-dom";


const CSS = `
  .bop-wrapper { font-family: Georgia, serif; background: #f0f2f5; color: #1a2233; }
  .gov-topbar { background: #1a2233; border-bottom: 2px solid #c8a84b; padding: 5px 0; font-size: 11px; color: #a8b8cc; font-family: Arial, sans-serif; }
  .main-navbar { background: #0d2b55; }
  .brand-seal { width: 52px; height: 52px; min-width: 52px; border-radius: 50%; background: #c8a84b; color: #0d2b55; display: flex; align-items: center; justify-content: center; font-size: 22px; }
  .brand-title { color: #fff; font-size: 15px; font-weight: bold; line-height: 1.3; }
  .brand-sub { color: #a8b8cc; font-size: 11px; letter-spacing: 0.4px; font-family: Arial, sans-serif; }
  .bop-nav-link { color: #c5d5e8 !important; font-size: 13px; font-family: Arial, sans-serif; padding: 16px !important; text-decoration: none; border-right: 0.5px solid rgba(255,255,255,0.07); display: flex; align-items: center; transition: background 0.15s; }
  .bop-nav-link:hover { background: rgba(255,255,255,0.07) !important; color: #fff !important; }
  .bop-nav-link.highlight { background: rgba(200,168,75,0.15); color: #c8a84b !important; }
  .bop-nav-link.highlight:hover { background: rgba(200,168,75,0.25) !important; }
  .bop-toggler { background: rgba(255,255,255,0.1); border: 0.5px solid rgba(255,255,255,0.25); color: #fff; padding: 6px 12px; font-size: 18px; cursor: pointer; }
  .hero-section { background: #0d2b55; color: #fff; padding: 48px 0; border-bottom: 4px solid #c8a84b; }
  .hero-badge { display: inline-block; background: #c8a84b; color: #0d2b55; font-size: 10px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase; padding: 3px 10px; margin-bottom: 14px; font-family: Arial, sans-serif; }
  .hero-title { font-size: 28px; font-weight: bold; line-height: 1.3; margin-bottom: 12px; }
  .hero-desc { font-size: 14px; color: #a8c0d8; max-width: 520px; line-height: 1.7; font-family: Arial, sans-serif; margin-bottom: 18px; }
  .hero-btn { display: inline-block; background: #c8a84b; color: #0d2b55 !important; font-size: 13px; font-weight: bold; padding: 10px 24px; text-decoration: none; font-family: Arial, sans-serif; transition: background 0.15s; }
  .hero-btn:hover { background: #b8983b; }
  .hero-stats { display: flex; gap: 32px; margin-top: 28px; padding-top: 20px; border-top: 0.5px solid rgba(255,255,255,0.12); flex-wrap: wrap; }
  .hstat-val { font-size: 24px; font-weight: bold; color: #c8a84b; }
  .hstat-lbl { font-size: 11px; color: #7a9ab8; font-family: Arial, sans-serif; margin-top: 2px; }
  .section-eyebrow { font-size: 11px; color: #8a94a8; text-transform: uppercase; letter-spacing: 0.8px; font-family: Arial, sans-serif; margin-bottom: 4px; }
  .section-heading { font-size: 19px; color: #0d2b55; font-weight: bold; margin-bottom: 18px; border-bottom: 2px solid #c8a84b; padding-bottom: 8px; display: inline-block; }
  .news-card { background: #fff; border: 0.5px solid #d8dde8; padding: 16px; height: 100%; }
  .news-tag { font-size: 10px; font-family: Arial, sans-serif; font-weight: bold; letter-spacing: 0.8px; text-transform: uppercase; color: #0d2b55; background: #e8eff8; padding: 2px 7px; display: inline-block; margin-bottom: 8px; }
  .news-date { font-size: 11px; color: #8a94a8; font-family: Arial, sans-serif; margin-bottom: 6px; }
  .news-title { font-size: 14px; color: #0d2b55; font-weight: bold; line-height: 1.4; margin-bottom: 6px; }
  .news-excerpt { font-size: 12px; color: #5a6a80; font-family: Arial, sans-serif; line-height: 1.6; }
  .news-link { font-size: 12px; color: #1a5fa8; font-family: Arial, sans-serif; text-decoration: none; display: inline-block; margin-top: 10px; }
  .news-link:hover { text-decoration: underline; }
  .hiring-card { background: #0d2b55; color: #fff; padding: 18px; height: 100%; }
  .hiring-position { font-size: 14px; font-weight: bold; color: #fff; margin-bottom: 4px; }
  .hiring-bonus { font-size: 13px; color: #c8a84b; font-family: Arial, sans-serif; font-weight: bold; margin-bottom: 6px; }
  .hiring-desc { font-size: 12px; color: #8aaac8; font-family: Arial, sans-serif; line-height: 1.5; }
  .apply-btn { display: inline-block; margin-top: 12px; border: 1px solid #c8a84b; color: #c8a84b; font-size: 11px; font-weight: bold; padding: 6px 14px; text-decoration: none; font-family: Arial, sans-serif; transition: background 0.15s, color 0.15s; }
  .apply-btn:hover { background: #c8a84b; color: #0d2b55; }
  .locate-section { background: #1a3a60; color: #fff; padding: 36px 0; }
  .locate-title { font-size: 22px; font-weight: bold; color: #fff; margin-bottom: 10px; }
  .locate-desc { font-size: 13px; color: #7a9ab8; font-family: Arial, sans-serif; line-height: 1.7; }
  .locate-form { background: #fff; padding: 20px 24px; }
  .locate-form label { font-size: 11px; color: #4a5a78; font-family: Arial, sans-serif; font-weight: bold; display: block; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 0.4px; }
  .locate-form input, .locate-form select { width: 100%; border: 1px solid #c0c8d8; padding: 8px 10px; font-size: 13px; font-family: Arial, sans-serif; color: #1a2233; margin-bottom: 12px; background: #fff; outline: none; border-radius: 0; }
  .locate-form input:focus, .locate-form select:focus { border-color: #0d2b55; }
  .locate-form button { background: #0d2b55; color: #fff; border: none; padding: 10px 22px; font-size: 13px; font-family: Arial, sans-serif; font-weight: bold; cursor: pointer; width: 100%; transition: background 0.15s; }
  .locate-form button:hover { background: #071a36; }
  .quick-links-box { background: #e8ecf2; }
  .ql-item { display: flex; align-items: flex-start; gap: 10px; padding: 10px 16px; border-bottom: 0.5px solid #c8cdd8; text-decoration: none; transition: background 0.12s; }
  .ql-item:last-child { border-bottom: none; }
  .ql-item:hover { background: #dde3ef; }
  .ql-arrow { color: #c8a84b; font-size: 16px; font-weight: bold; flex-shrink: 0; line-height: 1.4; }
  .ql-text { font-size: 13px; color: #1a3a60; font-family: Arial, sans-serif; line-height: 1.4; }
  .facility-card { background: #fff; border: 0.5px solid #d8dde8; padding: 14px; height: 100%; }
  .facility-name { font-size: 13px; font-weight: bold; color: #0d2b55; margin-bottom: 3px; }
  .facility-level { font-size: 11px; color: #8a94a8; font-family: Arial, sans-serif; }
  .facility-more { background: #fff; border: 0.5px solid #d8dde8; padding: 14px; height: 100%; display: flex; align-items: center; justify-content: center; }
  .facility-more a { font-size: 12px; color: #1a5fa8; font-family: Arial, sans-serif; text-decoration: none; font-weight: bold; }
  .facility-more a:hover { text-decoration: underline; }
  .site-footer { background: #0d2b55; color: #a8b8cc; padding: 28px 0 0; border-top: 3px solid #c8a84b; }
  .footer-col-title { font-size: 12px; font-weight: bold; color: #fff; text-transform: uppercase; letter-spacing: 0.6px; font-family: Arial, sans-serif; margin-bottom: 10px; }
  .footer-link { font-size: 12px; color: #8aaac8; font-family: Arial, sans-serif; text-decoration: none; display: block; margin-bottom: 5px; line-height: 1.5; }
  .footer-link:hover { color: #c8a84b; }
  .footer-bottom { margin-top: 20px; padding: 14px 0; border-top: 0.5px solid rgba(255,255,255,0.1); font-size: 11px; color: #5a7090; font-family: Arial, sans-serif; }
`;

const newsData = [
  { tag: "Press Release", date: "April 3, 2026", title: "BOP Announces New Rehabilitation Program for Non-Violent Offenders", excerpt: "The Bureau of Prisons has launched a new vocational training initiative aimed at reducing recidivism among eligible inmates." },
  { tag: "Announcement", date: "March 28, 2026", title: "Updated Visiting Procedures Effective May 1, 2026", excerpt: "Changes to the visitor scheduling system will take effect next month. All visitors must re-register through the new portal." },
  { tag: "Notice", date: "March 15, 2026", title: "First Step Act: Quarterly Progress Report Released", excerpt: "The latest FSA quarterly report shows increased enrollment in evidence-based recidivism reduction programs." },
  { tag: "Alert", date: "March 10, 2026", title: "System Maintenance: Inmate Locator Offline March 22", excerpt: "The online inmate locator will be unavailable from 6:00 AM to 2:00 PM EST on March 22 due to scheduled maintenance." },
];

const hiringData = [
  { position: "Correctional Officer", bonus: "Sign-on bonus: up to $49,000", desc: "Maintain security and order within the institution. No prior experience required." },
  { position: "Clinical Psychologist", bonus: "Sign-on bonus: up to $86,000", desc: "Provide mental health services and assessments for individuals in federal custody." },
  { position: "Registered Nurse", bonus: "Sign-on bonus: up to $38,000", desc: "Deliver healthcare services at a federal correctional facility with full federal benefits." },
];

const facilities = [
  { name: "USP Albuquerque", level: "High Security", state: "NM" },
  { name: "FCI Santa Fe", level: "Medium Security", state: "NM" },
  { name: "FPC Roswell", level: "Minimum Security", state: "NM" },
  { name: "MDC El Paso", level: "Administrative", state: "TX" },
  { name: "FCI Phoenix", level: "Medium Security", state: "AZ" },
];

const quickLinks = [
  "Visit a federal inmate",
  "Report a concern about an inmate",
  "Apply for a position at the BOP",
  "Find a federal correctional facility",
  "Get reentry resources",
  "Contact the Bureau of Prisons",
];

const footerCols = {
  "About Us": ["About Our Agency", "About Our Facilities", "Historical Information", "Statistics"],
  Inmates: ["Find an Inmate", "First Step Act", "Visiting", "Report a Concern"],
  Careers: ["Explore Opportunities", "Current Openings", "Application Process", "Sign-on Bonuses"],
  Resources: ["Policy & Forms", "Press Releases", "Research & Reports", "Contact Us"],
};

export default function Home() {
  const [form, setForm] = useState({ register: "", lastName: "", sex: "" });

  const handleSearch = (e) => {
    e.preventDefault();
    // conecte ao seu contexto/api de busca de detentos
    console.log("Searching:", form);
  };

  return (
    <>
      <style>{CSS}</style>
      <div className="bop-wrapper">

        {/* GOV TOPBAR */}
        <div className="gov-topbar">
          <div className="container d-flex align-items-center gap-2">
            <span style={{ fontSize: 14 }}>&#9873;</span>
            <span>An official website of the United States government</span>
          </div>
        </div>

        {/* NAVBAR */}
        <nav className="main-navbar navbar navbar-expand-lg p-0">
          <div className="container">
            <div className="d-flex align-items-center gap-3 py-2">
              <div className="brand-seal">&#9878;</div>
              <div>
                <div className="brand-title">Federal Bureau of Prisons</div>
                <div className="brand-sub">U.S. Department of Justice</div>
              </div>
            </div>
            <button
              className="bop-toggler d-lg-none ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#bopNav"
            >
              &#9776;
            </button>
            <div className="collapse navbar-collapse" id="bopNav">
              <div className="d-flex flex-column flex-lg-row">
                <Link to="/about" className="bop-nav-link">About Us</Link>
                <Link to="/person" className="bop-nav-link">Inmates</Link>
                <Link to="/locations" className="bop-nav-link">Locations</Link>
                <Link to="/careers" className="bop-nav-link highlight">Careers</Link>
                <Link to="/resources" className="bop-nav-link">Resources</Link>
                <Link to="/contact" className="bop-nav-link">Contact</Link>

                <Link
                  to="/login"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "auto 0 auto 12px",
                    padding: "6px 16px",
                    border: "1px solid #c8a84b",
                    color: "#c8a84b",
                    fontSize: "12px",
                    fontFamily: "Arial, sans-serif",
                    fontWeight: "bold",
                    letterSpacing: "0.5px",
                    textDecoration: "none",
                    transition: "background 0.15s, color 0.15s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "#c8a84b";
                    e.currentTarget.style.color = "#0d2b55";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#c8a84b";
                  }}
                >
                  &#128274; Login
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* HERO */}
        <section className="hero-section">
          <div className="container">
            <span className="hero-badge">Official Federal System</span>
            <h1 className="hero-title">
              Albuquerque Federal<br className="d-none d-sm-block" />Correctional Institution
            </h1>
            <p className="hero-desc">
              Providing safe, humane, cost-efficient, and appropriately secure confinement of individuals in federal custody.
            </p>
            <Link to="/person" className="hero-btn">Find an Inmate</Link>
            <div className="hero-stats">
              <div><div className="hstat-val">1,482</div><div className="hstat-lbl">Inmates in custody</div></div>
              <div><div className="hstat-val">312</div><div className="hstat-lbl">Staff members</div></div>
              <div><div className="hstat-val">Medium</div><div className="hstat-lbl">Security level</div></div>
            </div>
          </div>
        </section>

        {/* NEWS + HIRING */}
        <div className="container py-4">
          <div className="row g-4">

            <div className="col-12 col-lg-8">
              <div className="section-eyebrow">Latest updates</div>
              <h2 className="section-heading">BOP News</h2>
              <div className="row g-3">
                {newsData.map((item) => (
                  <div className="col-12 col-sm-6" key={item.title}>
                    <div className="news-card">
                      <span className="news-tag">{item.tag}</span>
                      <div className="news-date">{item.date}</div>
                      <div className="news-title">{item.title}</div>
                      <div className="news-excerpt">{item.excerpt}</div>
                      <a href="#" className="news-link">Read more &rsaquo;</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="section-eyebrow">We are hiring</div>
              <h2 className="section-heading">Open Positions</h2>
              <div className="d-flex flex-column gap-3">
                {hiringData.map((job) => (
                  <div className="hiring-card" key={job.position}>
                    <div className="hiring-position">{job.position}</div>
                    <div className="hiring-bonus">{job.bonus}</div>
                    <div className="hiring-desc">{job.desc}</div>
                    <a href="#" className="apply-btn">Apply Now</a>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* LOCATE INMATE */}
        <section className="locate-section">
          <div className="container">
            <div className="row g-4 align-items-start">
              <div className="col-12 col-md-6">
                <div className="section-eyebrow" style={{ color: "#7a9ab8" }}>Inmate search</div>
                <h2 className="locate-title">Locate a Federal Inmate</h2>
                <p className="locate-desc">
                  Search for individuals currently or previously held in Bureau of Prisons facilities using their register number, name, or case identifier.
                </p>
              </div>
              <div className="col-12 col-md-6">
                <form className="locate-form" onSubmit={handleSearch}>
                  <label>Register number</label>
                  <input
                    type="text"
                    placeholder="e.g. 12345-678"
                    value={form.register}
                    onChange={(e) => setForm({ ...form, register: e.target.value })}
                  />
                  <label>Last name</label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  />
                  <label>Sex</label>
                  <select
                    value={form.sex}
                    onChange={(e) => setForm({ ...form, sex: e.target.value })}
                  >
                    <option value="">-- Select --</option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                  </select>
                  <button type="submit">Search Inmate</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK LINKS + FACILITIES */}
        <div className="container py-4">
          <div className="row g-4">

            <div className="col-12 col-md-4">
              <div className="section-eyebrow">Quick access</div>
              <h2 className="section-heading">How Do I...</h2>
              <div className="quick-links-box">
                {quickLinks.map((link) => (
                  <a href="#" className="ql-item" key={link}>
                    <span className="ql-arrow">&#8250;</span>
                    <span className="ql-text">{link}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="col-12 col-md-8">
              <div className="section-eyebrow">Locate a facility</div>
              <h2 className="section-heading">Federal Facilities</h2>
              <div className="row g-2">
                {facilities.map((f) => (
                  <div className="col-6 col-sm-4" key={f.name}>
                    <div className="facility-card">
                      <div className="facility-name">{f.name}</div>
                      <div className="facility-level">{f.level} &bull; {f.state}</div>
                    </div>
                  </div>
                ))}
                <div className="col-6 col-sm-4">
                  <div className="facility-more">
                    <a href="#">View all &rsaquo;</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* FOOTER */}
        <footer className="site-footer">
          <div className="container">
            <div className="row g-4">
              {Object.entries(footerCols).map(([col, links]) => (
                <div className="col-6 col-md-3" key={col}>
                  <div className="footer-col-title">{col}</div>
                  {links.map((link) => (
                    <a href="#" className="footer-link" key={link}>{link}</a>
                  ))}
                </div>
              ))}
            </div>
            <div className="footer-bottom">
              Federal Bureau of Prisons &nbsp;&bull;&nbsp; U.S. Department of Justice &nbsp;&bull;&nbsp; An official website of the United States government
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
