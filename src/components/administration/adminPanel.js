
import { Link } from 'react-router-dom'
import './adminPanel.css'

function AdminPanel() {

    return (
        <div className="container">
            Admin Panel

            <div className="painelGrid">

                <div className="painelFunctions">

                        <div className="cardFunctions">

                        <Link to="/personConsult ">Consult Persons</Link>

                        </div>

                        
                        <div className="cardFunctions">

                            Person register              

                        </div>

                        
                        <div className="cardFunctions">

                                Imate register               

                        </div>

                </div>

            </div>


        </div>
    )


    }   

    export default AdminPanel