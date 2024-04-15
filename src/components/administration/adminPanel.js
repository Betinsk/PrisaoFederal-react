
import { Link } from 'react-router-dom'
import './adminPanel.css'

function AdminPanel() {

    return (
        <div className="container">
            Admin Panel

            <div className="painelGrid">

                <div className="painelFunctions">

                        <div className="cardFunctions">

                        <Link className='cardFunctionLink' to="/personConsult ">Consult Persons</Link>

                        </div>

                        
                        <div className="cardFunctions">

        
                        <Link className='cardFunctionLink' to="/personRegister ">Person Register</Link>          

                        </div>

                        
                        <div className="cardFunctions">

                        <Link className='cardFunctionLink' to="/imate ">Imate's register</Link>            

                        </div>

                </div>

            </div>


        </div>
    )


    }   

    export default AdminPanel