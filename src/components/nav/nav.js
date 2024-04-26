import { useEffect } from 'react';
import './nav.css'
import img from './ham.jpg';
import { useState } from 'react';
// eslint-disable-next-line
import img2 from './federal.png'; 
import img3 from './bop_logo.png';

import { Link } from 'react-router-dom';

const Nav = () => {

    const [isOpen, setIsOpen] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 900) { // Defina o ponto de ruptura responsiva desejado
            setIsOpen(false);
          } else {
            setIsOpen(true);
          }
        };
    
        handleResize(); // Para definir o estado inicial com base no tamanho da janela
        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        };
      }, []);

      const handleResize = () => {
        if (window.innerWidth <= 900) { // Defina o ponto de ruptura responsiva desejado
          setIsOpen(false);
        } else {
          setIsOpen(true);
        }
      };
  

    return (

        <div className='container-nav'>
            <img className='logo' src={img3} alt=''></img>

        <div className="menu-container">
            <span className='federal'><Link to='/'  onClick={handleResize}
        
                ><b>Federal Prision</b></Link></span>
            <div className='menu-links'>
                <div className={`menu ${isOpen ? 'open' : 'open'}`}>
                {window.innerWidth <= 900 && ( // Renderizar o botão apenas quando a largura da janela for menor ou igual a 900 pixels

                    <div className="menu-button" onClick={toggleMenu}>
                        <img src={img} alt=''></img>
                    </div>
                )}
                    {isOpen && (
                        <ul className="" onClick={handleResize}>
                            <li><a href='/#'>Sign In</a></li>
                            <li><Link to='/personRegister'>Person Register</Link></li>
                            <li><Link to='/adminPanel'>Admin Panel</Link></li>

                            <li><Link to='/imate'
                            >Imates</Link></li>
                            <li><a href='/#'>Services</a></li>
                            {/* ... more menu items */}
                        </ul>
                    )}
                    </div>
                </div>
            </div>

        </div>
      
    )
}


export default Nav