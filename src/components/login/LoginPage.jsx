import { useState,  } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../auth/loginService";
function LoginPage() {

   const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });
  }

  async function handleLogin(e) {
    e.preventDefault();
          console.log("ANTES DO LOGIN");

    try {
      const token = await login(form.email, form.password); 

       navigate("/adminPanel"); // 👈 REDIRECIONA AQUI
 
        console.log("ANTES DO LOGIN");
    } catch (err) {
      setError("Email ou senha inválidos");
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ width: "350px" }}>
        
        <h3 className="text-center mb-4">Login</h3>

        {error && (
          <div className="alert alert-danger">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Senha</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Entrar
          </button>
        </form>

      </div>
    </div>
  );
}

export default LoginPage;