import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../Context/Theme/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa6";
import NewsContext from "../Context/News/NewsContext";
import { fetchNews } from "../Context/News/NewsAction";

const Navbar = () => {
  const { darkMode, themeDispatch } = useContext(ThemeContext);

  const { newsAll , newsDispatch } = useContext(NewsContext);

  const [text , setText] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetchNews(text)

    newsDispatch({
      type : "GET_NEWS",
      payload : data
    })

    setText("")
  }

  const handleNews =  async (topic) => {
    const data = await fetchNews(topic)

    newsDispatch({
      type : "GET_NEWS",
      payload : data
    })
  }
  

  // console.log(fetchNews())

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

  return (
    <nav
      className={
        darkMode
          ? "navbar navbar-expand-lg bg-dark text-ligh shadow-lg"
          : "navbar navbar-expand-lg bg-body-tertiary shadow-lg"
      }
    >
      <div className="container-fluid">
        <span
          className={darkMode ? "spnbtn text-secondary" : "spnbtn text-warning"}
          onClick={ThemeChange}
        >
          {darkMode ? <FaMoon /> : <FaSun />}
        </span>
        <a
          className={darkMode ? "navbar-brand text-light" : "navbar-brand"}
          href="#"
        >
          News-App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={darkMode ? "nav-link text-light" : "nav-link"}
                aria-current="page"
                href="#"
                onClick={() => handleNews("Indian Sports")}
              >
                Sports news
              </a>
            </li>
            <li className="nav-item">
              <a
                className={darkMode ? "nav-link text-light" : "nav-link active"}
                aria-current="page"
                href="#"
                onClick={() => handleNews("Business")}
              >
                Business news
              </a>
            </li>
            <li className="nav-item">
              <a
                className={darkMode ? "nav-link text-light" : "nav-link active"}
                aria-current="page"
                href="#"
                onClick={() => handleNews("Technology")}
              >
                Technology news
              </a>
            </li>
            <li className="nav-item">
              <a
                className={darkMode ? "nav-link text-light" : "nav-link active"}
                aria-current="page"
                href="#"
                onClick={() => handleNews("Entertainment")}
              >
                Entertainment news
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search"  onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
