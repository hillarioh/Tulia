import React from 'react';
import Footer from './footer';
import {  Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from "swiper";
import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

import slideA from "../assets/images/slide-a.jpg";
import slideB from "../assets/images/slide-b.jpg";
import slideC from "../assets/images/slide-c.jpg";
import slideD from "../assets/images/slide-d.jpg";
import slideE from "../assets/images/slide-e.jpg";
import slideF from "../assets/images/slide-f.jpg";

SwiperCore.use([Navigation, Autoplay, Pagination, EffectFade]);

function Home() {
  return (
    <div className="home">
      <div className="header">
        <div className="slider">
          <Swiper
            effect="fade"
            navigation
            pagination={{ type: "progressbar" }}
            spaceBetween={0}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            slidesPerView={1}
          >
            <SwiperSlide>
              <div>
                <img src={slideA} alt="" style={{ width: "100%" }}></img>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={slideB} alt="" style={{ width: "100%" }}></img>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={slideC} alt="" style={{ width: "100%" }}></img>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={slideD} alt="" style={{ width: "100%" }}></img>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={slideE} alt="" style={{ width: "100%" }}></img>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={slideF} alt="" style={{ width: "100%" }}></img>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <section className="over">
        <div className="overview ov-1">
          <Link className="over-head" to="/program">
            <h2>What we do</h2>
            <div className="hint"></div>
            <p className="over-content">
              We Turn lives around in the community through various program
              running under our chain.
            </p>
          </Link>
        </div>

        <div className="overview ov-2">
          <Link className="over-head" to="/education">
            <h2>Our Impact</h2>
            <div className="hint"></div>
            <p className="over-content">
              Our agenda entails creating positive impact through scuccess in
              our team.
            </p>
          </Link>
        </div>

        <div className="overview ov-3">
          <Link className="over-head" to="/contact">
            <h2>Work with Us</h2>
            <div className="hint"></div>
            <p className="over-content">Get in touch with us.</p>
          </Link>
        </div>
      </section>

      <section className="vision">
        <div className="vis-body">
          <h1>Delivering a Response to COVID-19</h1>
          <p>
            In a time of covid-19 global pandemic we are engaging the community
            to respond to effectively to curb the spread of the disease.
          </p>
          <Link to="/covid">
            <h3>Read More</h3>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;