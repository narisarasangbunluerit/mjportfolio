import React from "react";
import "./certificates.css";
import { Data } from "./Data";

// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/pagination/pagination.min.css";

// import required modules
import { Navigation, Pagination } from "swiper";

const Certificates = () => {
  return (
    <section className="certificates section" id="certificates">
      <h2 className="section__title">Certificates</h2>
      <span className="section__subtitle">Self-Learning</span>

      <Swiper
        className="certificates__container"
        loop={true}
        grabCursor={true}
        // slidesPerView={1}
        // autoHeight={true}
        spaceBetween={0}
        // navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
        modules={[Navigation, Pagination]}
        // className="mySwiper"
      >
        {Data.map(({ image }) => {
          return (
            <SwiperSlide className="certificates__card key={id}">
              <img src={image} alt="" className="certificates__img" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Certificates;
