
import { Link } from 'react-router-dom'
import './adminPanel.css'

function AdminPanel() {

    return (
        <div className="container">
           <h1>Admin Panel</h1> 

            <div className="painelGrid">

                <div className="painelFunctions">

                        <div className="cardFunctions">

                        <Link className='cardFunctionLink' to="/personConsult ">
                            <p>Consult Persons</p>
                        </Link>

                        </div>

                        
                        <div className="cardFunctions">

        
                        <Link className='cardFunctionLink' to="/personRegister ">
                            <p>Person Register</p>
                            </Link>          

                        </div>

                        
                        <div className="cardFunctions">

                        <Link className='cardFunctionLink' to="/imatesList ">
                            
                            <p>Imate Consult</p>

                            </Link>            

                        </div>

                </div>

            </div>


        </div>
    )


    }   

    export default AdminPanel