import React, { useEffect, useState } from "react";
import "./NewsBar.css";
import NewsCart from "../NewsCart/NewsCart";

export default function NewsBar() {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [newsCategory, setNewsCategory] = useState("Featured News");
  const [allNewsCat, setAllNewsCat] = useState([]);
  const [allNews, setAllNews] = useState([]);

  useEffect(() => {
    getAllCategory();
    getAllNews();
  }, []);

  const getAllCategory = async () => {
    fetch(`${apiUrl}/news/allCat`)
      .then((res) => res.json())
      .then((data) => {
        setAllNewsCat(data);
      });
  };
  const getAllNews = async () => {
    fetch(`${apiUrl}/news/all`)
      .then((res) => res.json())
      .then((data) => {
        setAllNews(data);
      });
  };
  return (
    <div className="NewsBar">
      <h2 className="NewsBar__title mainTitle">Casa Verde / News</h2>
      <p className="NewsBar__text mainsubtitle">
        Helpful guides and practical advice for buying or renting your dream
        house abroad.
      </p>
      <div className="NewsBar__catSelect">
        {allNewsCat.map((cat) => (
          <span
            key={allNewsCat.indexOf(cat)}
            className={
              cat === newsCategory
                ? "NewsBar__catItem activeItem"
                : "NewsBar__catItem"
            }
            name={cat}
            onClick={(event) => {
              setNewsCategory(event.target.getAttribute("name"));
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
              img={item.cover}
              text={item.mainTitle}
              link={`/news/${item._id}`}
            />
          ))}
      </div>
    </div>
  );
}
