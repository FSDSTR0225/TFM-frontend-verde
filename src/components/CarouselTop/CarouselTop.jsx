import React from "react";
import "./CarouselTop.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";

export default function CarouselTop() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        freeMode={true}
        spaceBetween={30}
        effect={"fade"}
        navigation={false}
        pagination={{
          clickable: false,
        }}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./images/backgrounds/1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/backgrounds/2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/backgrounds/3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/backgrounds/4.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
