
import './home.css'
import Hiring from '../home/hiring/hiring'
import Locate from '../home/locate/locate'
import NewsCarousel from './carrousel-news/carrosel-news'
import { Context } from '../imate/imateData'
import { useContext } from 'react'

const newsDatas = [
    {
      title: 'Notícia 1',
      content: 'Conteúdo da notícia 1',
    },
    {
      title: 'Notícia 2',
      content: 'Conteúdo da notícia 2',
    },
    {
      title: 'Notícia 3',
      content: 'Conteúdo da notícia 3',
    },
  ];



const Home = () => {

    return(
        <div className='container'>
            <Hiring/>
            <div className="imageDiv">
            <NewsCarousel newsData={newsDatas}/>
            </div>
            <Locate/>
        </div>
    )

}
export default Home

/*<ImateData>
<Imates />
</ImateData>*/