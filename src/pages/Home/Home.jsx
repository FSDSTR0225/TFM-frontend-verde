import React from "react";
import "./Home.css";
import TopMain from "../../components/TopMain/TopMain";
import BlogCart from "../../components/BlogCart/BlogCart";
import NewsBar from "../../components/NewsBar/NewsBar";
import SwiperReact from "../../components/SwiperReact/SwiperReact";
import TypeWriter from "../../components/TypeWriter/TypeWriter";
import Capabilities from "../../components/Capabilities/Capabilities";
import CardConceptCompo from "../../components/CardConceptCompo/CardConceptCompo";

export default function Home() {
  return (
    <div className="Home">
      <div className="TopMain">
        <div className="TopMain__Wrapper">
          <h1 className="TopMain__title">
            Find your property wherever you like !
          </h1>
          <TopMain />
        </div>
      </div>

      <SwiperReact />
      {/* <TypeWriter /> */}

      <Capabilities />
      <CardConceptCompo />
      <div className="BlogCart__container">
        <BlogCart
          title=" How much is your house worth?"
          img="./images/blogCart/blog1.jpg"
          text="A free online valuation in seconds: with a precise price range to buy or rent by analysing market developments and land registry data by comparing similar properties"
          link="Value your house for free"
          dir="right"
        />

        <BlogCart
          title="We find your mortgage"
          img="./images/blogCart/blog2.jpg"
          text="We work with all banks, answer all your questions and accompany you throughout the process free of charge."
          link="Discover idealista/hipotecas"
          dir="left"
        />
        <BlogCart
          title="We help you sell your property"
          img="./images/blogCart/blog3.jpg"
          text="We will help you to sell your property quickly and easily, with the best advice and the best professionals."
          link="Discover idealista/venta"
          dir="right"
        />
      </div>
      <NewsBar />
    </div>
  );
}
