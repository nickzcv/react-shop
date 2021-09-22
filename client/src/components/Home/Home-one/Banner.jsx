import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';

import woodyBuilder from '../../../assets/img/sliders/woodyBuilder.png';
import monitor from '../../../assets/img/main-slider/monitor.png';
import drone from '../../../assets/img/main-slider/drone.png';

const Banner = () => {
  return (
    <OwlCarousel
      className="owl-theme"
      animateOut='fadeOut'
      items={1}
      loop
      dots={false}
      nav={true}
      navText={[
        "<i class='flaticon-left-arrow'/>",
        "<i class='flaticon-right-arrow' />",
      ]}
    >
      <div className="main-slider-item">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="main-slider-content">
                    <b>Новинка</b>
                    <h1>Развивающая игрушка 3D-панорама Стройка</h1>
                    <p>
                      3D-панорама Стройка отлично подойдет в качестве развивающего пособия, придумывая разные варианты игр и заданий.
                    </p>

                    <div className="slider-btn">
                      <Link to="/shop" className="default-btn">
                        <i className="flaticon-shopping-cart"></i>
                        В корзину
                        <span></span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="main-slider-image">
                    <img src={woodyBuilder} alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-slider-item">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="main-slider-content">
                    <b>Woody</b>
                    <h1>Развивающая игрушка 3D-панорама Стройка</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>

                    <div className="slider-btn">
                      <Link to="/shop" className="default-btn">
                        <i className="flaticon-shopping-cart"></i>
                        Shop Now
                        <span></span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="main-slider-image">
                    <img src={drone} alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-slider-item">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="main-slider-content">
                    <b>Woody</b>
                    <h1>Развивающая игрушка 3D-панорама Стройка</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>

                    <div className="slider-btn">
                      <Link to="/shop" className="default-btn">
                        <i className="flaticon-shopping-cart"></i>
                        Shop Now
                        <span></span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="main-slider-image">
                    <img src={monitor} alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </OwlCarousel>
  );
};

export default Banner;
