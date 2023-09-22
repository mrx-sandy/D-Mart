import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const SliderComponent = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...sliderSettings}>
      <div>
        <img src="https://hindi.economictimes.com/photo/msid-97473311,imgsize-110100/pic.jpg" alt="" />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="m-b-20"><strong>Welcome To <br /> D-Mart</strong></h1>
              <p className="m-b-40">See how your users experience your website in realtime or view <br /> trends to see any changes in performance over time.</p>
              <p><a className="btn hvr-hover" href="#">Shop New</a></p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src="images/banner-02.jpg" alt="" />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="m-b-20"><strong>Welcome To <br /> Thewayshop</strong></h1>
              <p className="m-b-40">See how your users experience your website in realtime or view <br /> trends to see any changes in performance over time.</p>
              <p><a className="btn hvr-hover" href="#">Shop New</a></p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src="images/banner-03.jpg" alt="" />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="m-b-20"><strong>Welcome To <br /> D-Mart</strong></h1>
              <p className="m-b-40">See how your users experience your website in realtime or view <br /> trends to see any changes in performance over time.</p>
              <p><a className="btn hvr-hover" href="#">Shop New</a></p>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default SliderComponent;
