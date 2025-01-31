import React from "react";
import Slider from "react-slick";

const Carousel2 = () => {
  const settings = {
    dots: false, // Hide navigation dots
    infinite: true, // Infinite loop for automatic sliding
    speed: 300, // Transition speed (300ms, faster than before)
    autoplay: true, // Enable automatic slide transition
    autoplaySpeed: 2000, // 2 seconds delay between slides (faster than before)
    slidesToShow: 1, // Show 1 image at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    arrows: false, // Hide the navigation arrows
    fade: false, // Disable fade effect to make it slide smoothly
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img className="carousel-image" src="https://images.pexels.com/photos/7129665/pexels-photo-7129665.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 1" />
        </div>
        <div>
          <img className="carousel-image" src="https://images.pexels.com/photos/4827570/pexels-photo-4827570.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 2" />
        </div>
        <div>
          <img className="carousel-image" src="https://images.pexels.com/photos/7130237/pexels-photo-7130237.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 3" />
        </div>
        <div>
          <img className="carousel-image" src="https://images.pexels.com/photos/7549484/pexels-photo-7549484.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 4" />
        </div>
        <div>
          <img className="carousel-image" src="https://images.pexels.com/photos/15587985/pexels-photo-15587985/free-photo-of-a-cat-sitting-on-top-of-some-rocks.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 5" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel2;