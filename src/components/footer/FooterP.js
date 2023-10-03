import React from 'react';
import './footer.css'
function Footer() {
  return (
    <div className="federal-prison-footer">
      <p>United States Federal Prison</p>
      <p>Address: 3828 Piermont Dr, Albuquerque , New Mexico </p>
      <p>Phone: (505) 117-8987</p>
      <div className="footer-links">
        <a href="/sobre">About prision</a>
        <a href="/detentos">Imates</a>
        <a href="/visitas">Visitors</a>
        <a href="/notícias">News</a>
      </div>
    </div>
  );
}

export default Footer;
