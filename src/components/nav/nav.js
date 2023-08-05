
import './nav.css'
import { useEffect, useRef, useState } from 'react';
import img from './ham.jpg';

const Nav = () => {

    const dropDownRef = useRef(null);
    const [isActive, setIsActive] = useState(false)
    const onClick = () => setIsActive(!isActive)



    const useOutsideClick = (el, initialState) => {
        const [isActive, setIsActive] = useState(initialState)

        useEffect(() => {
            const onClick = e => {

                if (el.current !== null && !el.current.contains(e.target)) {
                    setIsActive(!isActive);
                }
            }

            if (!isActive) {
                window.addEventListener('click', onClick)
            }

            return () => {
                window.removeEventListener('click', onClick)
            }
        }, [isActive, el])

        return [isActive, setIsActive]
    }

    return (

        <div className='container-nav'>
            <div className="menu-container">
            <span className='federal'><a href='#'><b>Federal Prision</b></a></span>
        
                <nav
                    ref={dropDownRef}
                    className={`menu ${isActive ? "active" : "inactive"}`}>
                        
                    <ul>
                        <li><a href='#'>Sign In</a></li>
                        <li><a href='#'>Person Register</a></li>
                        <li><a href='#'>Locations</a></li>
                        <li><a href='#'>Services</a></li>
                    </ul>
                </nav>
                <button onClick={onClick}
                    className='menu-button'
                >
                    <img src={img} alt='Menu' />
                </button>
                </div>
               
            </div>
    


    )
}

export default Nav