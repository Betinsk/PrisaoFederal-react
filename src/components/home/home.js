
import './home.css'
import Imates from '../imate/imates'
import ImateData from '../imate/imateData'
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