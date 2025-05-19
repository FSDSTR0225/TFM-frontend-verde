import React from "react";
import "./Home.css";
import TopMain from "../../components/TopMain/TopMain";
import LinkCart from "../../components/LinkCart/LinkCart";
import BlogCart from "../../components/BlogCart/BlogCart";
import NewsBar from "../../components/NewsBar/NewsBar";
import SwiperReact from "../../components/SwiperReact/SwiperReact";

export default function Home() {
  return (
    <div className="Home">
      <TopMain />
      <SwiperReact />
      <div className="LinkCart__container">
        <LinkCart
          title="Draw your own area"
          img="./images/users/user1.jpg"
          text="Choose the exact area you want to search in on a map.Start drawing your search"
          link="idealistaput property"
        />
        <LinkCart
          title="Publish your listing for free"
          img="./images/users/user2.jpg"
          text="We give you the first two listings for free. Houses, rooms, offices... there's room for everything!"
          link="Add your listing for free"
        />
      </div>
      <div className="BlogCart__container">
        <BlogCart
          title="Take idealista with you, always"
          img="./images/blogCart/3.jpg"
          text="With our app, you will be the first to find out about new properties, changes in your favourites, and messages from the chat."
          link="Link"
          dir="left"
        />
        <BlogCart
          title=" How much is your house worth?"
          img="./images/blogCart/1.png"
          text="A free online valuation in seconds: with a precise price range to buy or rent by analysing market developments and land registry data by comparing similar properties"
          link="Value your house for free"
          dir="right"
        />

        <BlogCart
          title="We find your mortgage"
          img="./images/blogCart/4.jpg"
          text="We work with all banks, answer all your questions and accompany you throughout the process free of charge."
          link="Discover idealista/hipotecas"
          dir="left"
        />
        <BlogCart
          title="Holiday homes in Spain, Italy and Portugal to enjoy spring"
          img="./images/blogCart/5.jpg"
          text="We all want a holiday and to disconnect from everyday life, whether on the beach, in the mountains or in the city. Can you resist a rural getaway? Fireplace, barbecue, garden, swimming pool... the choice is yours."
          link="See spring holiday rentals"
          dir="right"
        />

        <BlogCart
          title="We recommend the most suitable real estate agencies to sell your home"
          img="./images/blogCart/2.jpg"
          text="We select up to 4 agencies, depending on the characteristics of your property, to help you sell quickly."
          link="Find a real estate agency"
          dir="left"
        />
      </div>
      <NewsBar />
    </div>
  );
}
