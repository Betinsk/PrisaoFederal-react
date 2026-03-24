
import { Link } from "react-router-dom"
import Logout from "../login/LogOut"
import AuthContext from "../../context/appContext";
import { useContext } from "react";

export default function NavBar() {

  const { user } = useContext(AuthContext); 

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">

        {user ? (

          <div className="container-fluid">
            <a className="navbar-brand" href="/#">Federal Prision</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to='/personRegister' className="nav-link" >Person Register</Link>
                </li>
                <li className="nav-item">
                  <Link to='/adminPanel' className="nav-link" >Admin Panel</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Imates</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Person
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Person Register</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Logout />
                </li>

              </ul>
            </div>
          </div>


        ) : (
          <>

             <div className="container-fluid">
            <a className="navbar-brand" href="/#">Federal Prision</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Join us 
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">View Opportunities</a></li>
                    <li><a className="dropdown-item" href="#">Want to create change?</a></li>
                    <li><a className="dropdown-item" href="#">Work at the Federal Bureau of Prisons.</a></li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link to='/login' className="nav-link" >Login</Link>
                </li>
              </ul>
            </div>
          </div>
          </>
        )}
      </nav>
    </>
  )
}
