import img from './hiring_banner.jpg'
import './hiring.css'
import { Link } from 'react-router-dom'

export const Hiring = () => {
    return (
        <div className='banner-container'>
            <img src={img} alt=''>
                
            </img>

         <Link to={`/hiring`} >  <div className='hiring-text'>
                <h1>WE'RE HIRING</h1>
                <p>
                    Want to create change? Do it from the inside out. Work at the Federal Bureau of Prisons to make a real difference while building a rewarding career. For more information please call our BOP Career Connection Hotline 1-866-307-1045 or email the National Recruitment Team.
                </p> 
                  
                <h2>Come work on the inside </h2>

                </div>
        </Link>
        </div>
    )
}

export default Hiring