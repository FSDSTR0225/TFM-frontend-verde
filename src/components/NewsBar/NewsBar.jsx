import React, { useEffect, useState } from "react";
import "./NewsBar.css";
import NewsCart from "../NewsCart/NewsCart";

export default function NewsBar() {
  const [newsCategory, setNewsCategory] = useState("Featured News");
  const [allNewsCat, setAllNewsCat] = useState([]);
  const [allNews, setAllNews] = useState([]);

  useEffect(() => {
    getAllCategory();
    getAllNews();
  }, []);

  const getAllCategory = async () => {
    fetch("http://localhost:4000/news/allCat")
      .then((res) => res.json())
      .then((data) => {
        setAllNewsCat(data);
      });
  };
  const getAllNews = async () => {
    fetch("http://localhost:4000/news/all")
      .then((res) => res.json())
      .then((data) => {
        setAllNews(data);
      });
  };
  return (
    <div className="NewsBar">
      <h2 className="NewsBar__title">Casa Verde / News</h2>
      <p className="NewsBar__text">
        Helpful guides and practical advice for buying or renting your dream
        house abroad.
      </p>
      <div className="NewsBar__catSelect">
        {allNewsCat.map((cat) => (
          <span
            key={allNewsCat.indexOf(cat)}
            className={
              cat === newsCategory
                ? "NewsBar__catItem active"
                : "NewsBar__catItem"
            }
            name={cat}
            onClick={(event) => {
              setNewsCategory(event.target.getAttribute("name"));
              console.log(newsCategory);
            }}
          >
            {cat}
          </span>
        ))}
      </div>
      <div className="NewsCart__container">
        {allNews
          .filter((item) => item.category === newsCategory)
          .map((item) => (
            <NewsCart
              key={item._id}
              img="./images/news/news1.jpg"
              text={item.mainTitle}
              link={`/news/${item._id}`}
            />
          ))}
      </div>
    </div>
  );
}
