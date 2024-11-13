
import { Link } from 'react-router-dom'
import './adminPanel.css'

function AdminPanel() {

    return (
        <div className="container">
            <div className='adminTitle'>
                <h1>Admin Panel</h1>
            </div>


            <div className="painelGrid">

                <div className="painelFunctions">

                    <div className="cardFunctions">

                        <Link className='cardFunctionLink' to="/personConsult ">
                            <p>Consult Persons</p>
                        </Link>

                    </div>

                    <div className="cardFunctions">

                        <Link className='cardFunctionLink' to="/prisions ">
                            <p>Prisions</p>
                        </Link>

                    </div>

                    <div className="cardFunctions">

                        <Link className='cardFunctionLink' to="/imate ">
                            <p>Imate's registration</p>
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