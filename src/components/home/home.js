
import './home.css'
import Imates from '../imate/imates'
import ImateData from '../imate/imateData'
import Nav from '../nav/nav'
const Home = () => {

    return(
        <div className='container'>
            <ImateData>
             <Imates />
             </ImateData>
        </div>
    )

}
export default Home