import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../auth/loginService";
import AuthContext from "../../context/appContext";
import "./LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();
  const { login: loginContext } = useContext(AuthContext);

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const token = await login(form.email, form.password);
      loginContext({ name: form.email }, token);
      navigate("/adminPanel");
    } catch {
      setError("Invalid email or password.");
    }
  }

  return (
    <div className="login-page">

      {/* Topbar */}
      <div className="gov-topbar">
        <div className="container d-flex align-items-center gap-2">
          <span style={{ fontSize: 14 }}>&#9873;</span>
          <span>An official website of the United States government</span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="main-navbar navbar p-0">
        <div className="container">
          <Link to="/" className="d-flex align-items-center gap-3 py-2 text-decoration-none">
            <div className="brand-seal">&#9878;</div>
            <div>
              <div className="brand-title">Federal Bureau of Prisons</div>
              <div className="brand-sub">U.S. Department of Justice</div>
            </div>
          </Link>
        </div>
      </nav>

      {/* Login area */}
      <div className="login-body">
        <div className="login-card">

          <div className="login-card-header">
            <div className="login-icon">&#128274;</div>
            <h2 className="login-title">Staff Portal Access</h2>
            <p className="login-subtitle">Authorized personnel only</p>
          </div>

          <div className="login-card-body">
            {error && (
              <div className="login-error">
                &#9888;&nbsp; {error}
              </div>
            )}

            <form onSubmit={handleLogin}>
              <div className="login-field">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="user@bop.gov"
                  required
                />
              </div>

              <div className="login-field">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                />
              </div>

              <button type="submit" className="login-btn">
                Sign In
              </button>
            </form>
          </div>

          <div className="login-card-footer">
            <Link to="/" className="login-back">&#8592; Return to Homepage</Link>
          </div>

        </div>

        <p className="login-disclaimer">
          This is a U.S. Government information system. Unauthorized access is prohibited and subject to criminal prosecution.
        </p>
      </div>
    </div>
  );
}

export default LoginPage;