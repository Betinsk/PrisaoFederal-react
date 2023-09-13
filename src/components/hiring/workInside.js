
import './hiring.css'
import img1 from './img/section_m_1.jpg'
import img2 from './img/section_m_2.jpg'
import img3 from './img/section_m_3.jpg'
import vid from './fed.mp4'

const WorkInside = () => {

    return (

        <div className="container">

            <div className="hiring-video">
                <video controls>
                     <source src={vid} type="video/mp4" />
                </video>
            </div>


            <div className='hiring-information'>
                <h1>WORK ON THE INSIDE.</h1>
                <p>
                    Want to create change? Do it from the inside out. Work at the Federal Bureau of Prisons. Here you'll make a real difference. As a Federal Bureau of Prisons Nurse, Correctional Officer, or Teacher, you will be a mentor and inspiration, too. You'll change the hearts, minds, and lives of inmates in our care. All while you build a rewarding career as part of our team. Join us here on the inside.
                </p>
            </div>

            <div className='hiring-cards'>

                <div className='hiring-card'>

                    <img
                        src={img1} // Substitua pelo caminho da sua imagem
                        alt="Descrição da imagem"
                    />
                    <div className='hiring-informationCard'>

                        <p className='title'> New Openings </p>
                        <p>  Explore immediate job openings and careers in: Arizona, California, Colorado, Illinois, Kansas, Missouri, and Oregon..   </p>
                    </div>
                </div>

                <div className='hiring-card'>
                    <img
                        src={img2} // Substitua pelo caminho da sua imagem
                        alt="Descrição da imagem"
                    />
                    <div className='hiring-informationCard'>

                        <p className='title'>
                            Prison Life
                        </p>

                        <p>
                            Working here isn't exactly what you think. Federal prisons are clean, secure, and professionally run at every level. See why more than 37,000 people have joined our team.
                        </p>
                    </div>
                </div>

                <div className='hiring-card'>
                    <img
                        src={img3} // Substitua pelo caminho da sua imagem
                        alt="Descrição da imagem"
                    />
                    <div className='hiring-informationCard'>

                        <p className='title'>
                            Opportunities here
                        </p>

                        <p>
                            Discover our wide range of positions, student programs, and different ways you can volunteer at the Federal Bureau of Prisons
                        </p>

                    </div>

                </div>


            </div>

        </div>


    )


}

export default WorkInside