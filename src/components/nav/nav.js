import './nav.css'

import img3 from './bop_logo.png';
import NavBar from './navBar';

const Nav = () => {

    return (

        <div className='container-nav'>
            <img className='logo' src={img3} alt=''></img>

            <NavBar />
        
        </div>
      
    )
}


export default Nav