import "./CarouselTop.css";
import { Swiper, SwiperSlide } from "swiper/react";

import testImg1 from "/images/carousel/1.jpg";
import testImg2 from "/images/carousel/2.jpg";
import testImg3 from "/images/carousel/3.jpg";
import testImg4 from "/images/carousel/4.jpg";
import testImg5 from "/images/carousel/5.jpg";
import testImg6 from "/images/carousel/6.jpg";
import testImg7 from "/images/carousel/7.jpg";
import testImg8 from "/images/carousel/8.jpg";
import testImg9 from "/images/carousel/9.jpg";
import testImg10 from "/images/carousel/10.jpg";
import testImg11 from "/images/carousel/11.jpg";
import testImg12 from "/images/carousel/12.jpg";
import testImg13 from "/images/carousel/13.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { Autoplay, EffectCards } from "swiper/modules";

export default function CarouselTop() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectCards , Autoplay]}
        className="CarouselTop"
        id="CarouselTop"
      >
        <SwiperSlide>
          <img src={testImg5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={testImg2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={testImg3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={testImg4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={testImg1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={testImg6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={testImg7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={testImg8} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={testImg9} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={testImg10} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={testImg11} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={testImg12} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={testImg13} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
