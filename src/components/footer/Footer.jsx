
import "./footer.css";

const footerCols = {
  "About Us": ["About Our Agency", "About Our Facilities", "Historical Information", "Statistics"],
  Inmates: ["Find an Inmate", "First Step Act", "Visiting", "Report a Concern"],
  Careers: ["Explore Opportunities", "Current Openings", "Application Process", "Sign-on Bonuses"],
  Resources: ["Policy & Forms", "Press Releases", "Research & Reports", "Contact Us"],
};

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">

        <div className="footer-top">

          {/* Identity + Contact */}
          <div className="footer-identity">
            <div className="footer-brand">
              <div className="footer-seal">BOP</div>
              <div>
                <div className="footer-agency-name">
                  Federal Bureau<br />of Prisons
                </div>
                <div className="footer-agency-sub">U.S. Department of Justice</div>
              </div>
            </div>
            <div className="footer-contact-label">Main switchboard</div>
            <div className="footer-contact-value">(202) 307-3198</div>
            <div className="footer-contact-label">Emergency line (24/7)</div>
            <div className="footer-contact-value">(505) 117-8987</div>
            <div className="footer-contact-addr">
              📍 320 First St NW<br />Washington, DC 20534
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerCols).map(([col, links]) => (
            <div key={col}>
              <div className="footer-col-title">{col}</div>
              {links.map((link) => (
                <a href="#" className="footer-link" key={link}>{link}</a>
              ))}
            </div>
          ))}

        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <span className="footer-copy">
            Federal Bureau of Prisons &nbsp;&bull;&nbsp; U.S. Department of Justice &nbsp;&bull;&nbsp; An official website of the United States government
          </span>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Accessibility</a>
            <a href="#" className="footer-bottom-link">Disclaimer</a>
            <a href="#" className="footer-bottom-link">FOIA</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
