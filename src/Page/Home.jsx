import React, { useContext, useEffect } from "react";
import Carousal from "../Components/Carousal";
import WeatherCard from "../Components/WeatherCard";
import NewsCard from "../Components/NewsCard";
import NewsContext from "../Context/News/NewsContext";
import { fetchNews } from "../Context/News/NewsAction";
import ThemeContext from "../Context/Theme/ThemeContext";

const Home = () => {
  const { darkMode, themeDispatch } = useContext(ThemeContext);
  const { newsAll, newsDispatch } = useContext(NewsContext);

  // console.log(newsAll);s

  const getNews = async (topic) => {
    const data = await fetchNews(topic);

    newsDispatch({
      type: "GET_NEWS",
      payload: data,
    });
  };
  // console.log(fetchNews())

  useEffect(() => {
    getNews("bhopal");
  }, []);



  // console.log(newsAll)

  const ThemeChange = () => {
    if (darkMode) {
      themeDispatch({
        type: "LIGHT_MODE",
        payload: false,
      });
    } else {
      themeDispatch({
        type: "DARK_MODE",
        payload: true,
      });
    }
  };

  if (!newsAll || newsAll.length === 0) {
    return (
      <h1 className="text-secondary text-center my-3 display-1">
        {" "}
        Loading....
      </h1>
    );
  }

  return (
    <>
      <Carousal />

      <div
        className={
          darkMode
            ? "navbar navbar-expand-lg bg-dark text-ligh container-fluid p-5"
            : "navbar navbar-expand-lg bg-body-tertiary container-fluid p-5 "
        }
      >
        <h3 className="text-center MY-3">Top News</h3>

        <section>
          <div className="row g-3">
            <WeatherCard />
            <div className="col-md-8 col-sm-12">
              {newsAll?.map((news, index) => (
                <NewsCard key={index} news={news} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
