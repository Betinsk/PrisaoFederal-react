import React from 'react';

function Footer() {
  return (
    <footer style={{ background: '#e2dee0', color: '#970909', padding: '2.5rem 0 1rem' }}>
      <div className="container">
        <div className="row g-4">

          <div className="col-12 col-md-4">
            <h5 className="text-white fw-500 mb-3">United States Federal Prison</h5>
            <p className="mb-1 small">📍 3828 Piermont Dr, Albuquerque, NM</p>
            <p className="mb-1 small">📞 (505) 117-8987</p>
            <span className="badge bg-secondary mt-2">Official Government Facility</span>
          </div>

          <div className="col-6 col-md-2">
            <h5 className="text-white fw-500 mb-3">Institution</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-1"><a href="/sobre" className="text-secondary text-decoration-none">About Prison</a></li>
              <li className="mb-1"><a href="/detentos" className="text-secondary text-decoration-none">Inmates</a></li>
              <li className="mb-1"><a href="/visitas" className="text-secondary text-decoration-none">Visitors</a></li>
              <li className="mb-1"><a href="/noticias" className="text-secondary text-decoration-none">News</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2">
            <h5 className="text-white fw-500 mb-3">Resources</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-1"><a href="#" className="text-secondary text-decoration-none">Staff Directory</a></li>
              <li className="mb-1"><a href="#" className="text-secondary text-decoration-none">Programs</a></li>
              <li className="mb-1"><a href="#" className="text-secondary text-decoration-none">Regulations</a></li>
              <li className="mb-1"><a href="#" className="text-secondary text-decoration-none">Contact</a></li>
            </ul>
          </div>

          <div className="col-12 col-md-4">
            <h5 className="text-white fw-500 mb-3">Emergency Contact</h5>
            <p className="small mb-1">For emergencies related to inmates:</p>
            <p className="text-white fs-5 fw-500 mb-0">(505) 117-8987</p>
            <p className="text-muted" style={{ fontSize: '12px' }}>Available 24/7</p>
          </div>

        </div>

        <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '1.5rem 0 1rem' }} />

        <div className="row align-items-center">
          <div className="col-12 col-sm-6 mb-2 mb-sm-0">
            <small className="text-muted">&copy; 2025 U.S. Federal Bureau of Prisons. All rights reserved.</small>
          </div>
          <div className="col-12 col-sm-6 text-sm-end">
            <a href="#" className="text-muted text-decoration-none me-3 small">Privacy Policy</a>
            <a href="#" className="text-muted text-decoration-none small">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;