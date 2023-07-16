import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BottomBanner from './BottomBanner';

function SlideShow() {

    const settings = {
        dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set duration for each slide
    };
    

  return (
    <div className="slideshow-container">
     <Slider {...settings}>

    <div className="slideshow-slide">
      <img src="https://www.bravarooftile.com/wp-content/uploads/2021/10/composite-cedar-shake-roofs.jpg" alt="First Home" />
    </div>
    <div className="slideshow-slide">
      <img src="https://www.bravarooftile.com/wp-content/uploads/2021/10/composite-spanish-roofs.jpg "alt="Second Home" />
    </div>
   
    </Slider>

    <div className="slideshow-text">
      <p>
        Founded in 1958, City Roofing and Siding is a third-generation, family owned and operated professional home improvement company.

        Our employees take pride in the trades in which they are skilled, and the quality of roofing, siding and windows replacement work they perform in Central CT. Owner supervision every step of the way assures that your project progresses to your 100% satisfaction from start to finish, with your project concerns and desires as the homeowner coming first.

      </p>
    </div>
        <BottomBanner />
  </div>
  );
}

export default SlideShow