import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "./SwiperReact.css";

// import required modules
import {
  Keyboard,
  Scrollbar,
  FreeMode,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

export default function SwiperReact() {
  return (
    <div className="SwiperReact">
      <h1 className="swiper__title mainTitle">We have properties in all of the Spain</h1>
      <h3 className="swiper__subtitle mainsubtitle">Please check our latest updates</h3>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        freeMode={true}
        scrollbar={false}
        navigation={true}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[
          FreeMode,
          Pagination,
          Navigation,
          Scrollbar,
          Keyboard,
          Autoplay,
        ]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./images/cities/madrid/madrid4.jpg" />
          <div className="textCarous">
            <p className="textCarous__title">Madrid is always beautifull ! </p>
            <p className="textCarous__text">
              Madrid, Spain's capital and largest city, is a vibrant hub of
              culture, history, and modernity, located in the center of the
              Iberian Peninsula. It's known for its rich artistic heritage,
              stunning architecture, and thriving nightlife. Madrid also boasts
              a strong economy, particularly in services, and is a major center
              for tourism and business.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/cities/barcelona/barca2.jpg" />
          <div className="textCarous">
            <p className="textCarous__title">Vamos a Barcelona ! </p>
            <p className="textCarous__text">
              Barcelona is a vibrant Mediterranean city, the capital of
              Catalonia, and a major cultural and commercial center in Spain.
              It's known for its unique blend of history, art, culture, and
              modern life, offering a dynamic and multifaceted experience. The
              city's rich architecture,is a major draw for visitors.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/cities/valencia/valencia1.jpg" />
          <div className="textCarous">
            <p className="textCarous__title">Valencia es muy elegante ! </p>
            <p className="textCarous__text">
              Valencia is a vibrant and historic Spanish city, located on the
              Mediterranean coast and known for its rich cultural heritage and
              modern attractions. It's the third largest city in Spain, with a
              population of over 791,000. Valencia boasts a blend of ancient
              traditions and modern innovations, making it a fascinating place
              to explore.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/cities/sevilla/sevilla1.jpg" />
          <div className="textCarous">
            <p className="textCarous__title">Ahora Sevilla ! </p>
            <p className="textCarous__text">
              Seville, also known as Sevilla in Spanish, is a vibrant city in
              Andalusia, Spain. It's the capital of Andalusia and the
              fourth-largest city in Spain. Known for its rich history, cultural
              heritage, and stunning architecture, Seville is a popular
              destination for tourists.Seville is a popular destination for
              tourists.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/cities/zaragoza/zaragoza3.jpg" />
          <div className="textCarous">
            <p className="textCarous__title">Zaragoza, Magnifica ! </p>
            <p className="textCarous__text">
              Zaragoza, a city with over 2,000 years of history, stands as a
              crossroads of cultures and a dynamic, modern metropolis in Spain.
              Located on the Ebro River and at a strategic point between Madrid,
              Barcelona, and Bilbao, Zaragoza offers a rich heritage, vibrant
              culture, and a welcoming atmosphere.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/cities/madrid/madrid5.jpg" />
          <div className="textCarous">
            <p className="textCarous__title">Madrid is very important ! </p>
            <p className="textCarous__text">
              Madrid, Spain's capital and largest city, is a vibrant hub of
              culture, history, and modernity, located in the center of the
              Iberian Peninsula. It's known for its rich artistic heritage,
              stunning architecture, and thriving nightlife. Madrid also boasts
              a strong economy, particularly in services, and is a major center
              for tourism and business.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/cities/barcelona/barca4.jpg" />
          <div className="textCarous">
            <p className="textCarous__title">Barcelona, Que tal ? </p>
            <p className="textCarous__text">
              Barcelona is a vibrant Mediterranean city, the capital of
              Catalonia, and a major cultural and commercial center in Spain.
              It's known for its unique blend of history, art, culture, and
              modern life, offering a dynamic and multifaceted experience. The
              city's rich architecture,is a major draw for visitors.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
