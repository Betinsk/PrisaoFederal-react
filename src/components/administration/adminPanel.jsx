import { Link } from "react-router-dom";
import AuthContext from "../../context/appContext";
import { useContext } from "react";

function AdminPanel() {

    const { login: loginContext, user } = useContext(AuthContext);


  const functions = [
    { name: "Consult Persons", path: "/person" },
   // { name: "Prisions", path: "/prisions" },
   // { name: "Imate's registration", path: "/imate" },
   // { name: "Addresses", path: "/addresses" },
    { name: "Person Register", path: "/personRegister" },
  //  { name: "Imate Consult", path: "/imatesList" }
  ];

  return (
    <div className="container py-5">

      <div className="text-center mb-5">
        <h2 className="fw-semibold">Admin Panel</h2>
        <span>Olá, {user?.name}</span>
      </div>

      <div className="row g-4">

        {functions.map((item, index) => (
          <div className="col-md-4" key={index}>

            <Link to={item.path} className="text-decoration-none">

              <div className="card border-0 shadow-sm rounded-4 h-100">

                <div className="card-body text-center py-4">

                  <h5 className="text-dark fw-normal">
                    {item.name}
                  </h5>

                </div>

              </div>

            </Link>

          </div>
        ))}

      </div>

    </div>
  );
}

export default AdminPanel;