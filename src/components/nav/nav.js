import { useEffect } from 'react';
import './nav.css'
import img from './ham.jpg';
import { useState } from 'react';
import img2 from './federal.png';
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


    return (

        <div className='container-nav'>
            <img className='logo' src={img2} alt=''></img>

        <div className="menu-container">
            <span className='federal'><Link to='/'  onClick={() => setIsOpen(false)}><b>Federal Prision</b></Link></span>
            <div className='menu-links'>
                <div className={`menu ${isOpen ? 'open' : 'open'}`}>
                {window.innerWidth <= 900 && ( // Renderizar o botão apenas quando a largura da janela for menor ou igual a 900 pixels

                    <div className="menu-button" onClick={toggleMenu}>
                        <img src={img} alt=''></img>
                    </div>
                )}
                    {isOpen && (
                        <ul className="">
                            <li><a href='#'>Sign In</a></li>
                            <li><a href='#'>Person Register</a></li>
                            <li><Link to='/imate'
                            onClick={() => setIsOpen(false)}
                            >Imates</Link></li>
                            <li><a href='#'>Services</a></li>
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