
import './home.css'
import Imates from '../imate/imates'
import ImateData from '../imate/imateData'
import Hiring from '../hiring/hiring'
const Home = () => {

    return(
        <div className='container'>
            <Hiring/>
            <ImateData>
             <Imates />
             </ImateData>
        </div>
    )

}
export default Home