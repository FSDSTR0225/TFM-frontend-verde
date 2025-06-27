import "./CarouselTop.css";
import { Swiper, SwiperSlide } from "swiper/react";

// import testImg1 from "/images/carousel/1.jpg";
// import testImg2 from "/images/carousel/2.jpg";
// import testImg3 from "/images/carousel/3.jpg";
// import testImg4 from "/images/carousel/4.jpg";
// import testImg5 from "/images/carousel/5.jpg";
// import testImg6 from "/images/carousel/6.jpg";
// import testImg7 from "/images/carousel/7.jpg";
// import testImg8 from "/images/carousel/8.jpg";
// import testImg9 from "/images/carousel/9.jpg";
// import testImg10 from "/images/carousel/10.jpg";
// import testImg11 from "/images/carousel/11.jpg";
// import testImg12 from "/images/carousel/12.jpg";
// import testImg13 from "/images/carousel/13.jpg";
// import testImg14 from "/images/carousel/14.jpg";

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
          <img src="/images/carousel/5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/carousel/2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/carousel/3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/carousel/4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/carousel/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/carousel/6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/carousel/7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/carousel/8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/carousel/9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/carousel/10.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/carousel/11.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/carousel/12.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/carousel/13.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/carousel/14.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
