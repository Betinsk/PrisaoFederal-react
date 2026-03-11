import React from 'react';
import './carrosel.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from './assets/oldprision.png'
import img2 from './assets/clipboard.png'
import img3 from './assets/woman.png'
import img4 from './assets/248.jpg'


const NewsCarousel = ({ newsData }) => {


    const settings = {
    dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 2,
  slidesToScroll: 1,

  autoplay: true,          // ativa rotação automática
  autoplaySpeed: 2000,     // tempo entre slides (3s)

  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 501,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

    return (
        <div className='container-carrosel'>
        <div>
         <Slider {...settings}>
            <div className='item-carrosel'>
              <a href='/#'>Federal ofenders in prision</a>
              <img src={img1} alt='img' />
            </div>

            <div className='item-carrosel'>
              <a href='/#'>Recidivism Among Prison Inmates with Serious Mental Illness</a>
              <img src={img2} alt='img' />
            </div>

          <div className='item-carrosel'>
              <a href='/#'>Pregnant Women in Federal. A Uniquely Vulnerable Population
              </a>
              <img src={img3} alt='img' />
          </div>
          
          <div className='item-carrosel'>
            <a href='/#'>Permanent Mission Change for USP Thomson Announced</a>
            <img src={img4} alt='img' />

          </div>

      </Slider>
    </div>
    </div>
    );
};

export default NewsCarousel;