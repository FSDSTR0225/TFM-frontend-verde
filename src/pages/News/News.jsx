import React, { useEffect, useState } from "react";
import "./News.css";
import { useParams } from "react-router";
import newImg from "/images/properties/noimage.png";

export default function News() {
  const params = useParams();

  const [newsID, setNewsID] = useState("");
  const [newsInfo, setNewsInfo] = useState();

  useEffect(() => {
    setNewsID(params.newsId);
  }, [params.newsId]);

  useEffect(() => {
    newsID &&
      fetch(`http://localhost:4000/news/allnews/${newsID}`)
        .then((res) => res.json())
        .then((data) => {
          setNewsInfo(data);
        });
  }, [newsID]);

  return (
    <div className="News">
      <h1 className="News__title mainTitle">{newsInfo && newsInfo.mainTitle}</h1>
      <div className="News__container">
        {newsInfo &&
          newsInfo.items.map((item) => (
            <div key={item.title} className="News__mainWrapper">
              <div className="News__textWrapper">
                <h3 className="News__subtitle mainTitle">{item.title}</h3>
                <p className="News__text">{item.desc}</p>
              </div>
              <div className="News__imageWrapper">
                <img
                  className="News__image"
                  src={item.img ? item.img : newImg}
                  alt="item-image"
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
