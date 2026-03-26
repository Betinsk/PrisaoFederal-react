
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    const timer = setTimeout(() => {
      if (token) {
        navigate("/adminPanel");
      } else {
        navigate("/");
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="container">
      <h1>404</h1>
      <p>Página não encontrada</p>
    <p>Redirecionando...</p>

    </div>
  );
}