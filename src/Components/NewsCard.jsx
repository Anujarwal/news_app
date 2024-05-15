import React, { useContext } from "react";
import ThemeContext from "../Context/Theme/ThemeContext";

const NewsCard = ({ news }) => {
  const { darkMode, themeDispatch } = useContext(ThemeContext);
  const { title, description, url, urlToImage, author, image } = news;
  // console.log(news)
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
    <div
      className={
        darkMode
          ? "navbar navbar-expand-lg bg-dark text-ligh  col-12"
          : "navbar navbar-expand-lg bg-body-tertiary  col-12"
      }
    >
      <div
        className={
          darkMode
            ? "navbar navbar-expand-lg bg-dark text-ligh  card mb-3"
            : "navbar navbar-expand-lg bg-body-tertiary  card mb-3"
        }
      >
        <div
          className={
            darkMode
              ? "navbar navbar-expand-lg bg-dark text-ligh  row g-0"
              : "navbar navbar-expand-lg bg-body-tertiary  row g-0"
          }
        >
          <div
            className={
              darkMode
                ? "navbar navbar-expand-lg bg-dark text-ligh  col-md-4 "
                : "navbar navbar-expand-lg bg-body-tertiary  col-md-4 "
            }
          >
            <img
              
              src={urlToImage}
              className= {
                darkMode
                  ? "navbar navbar-expand-lg bg-dark text-ligh  img-fluid rounded-start "
                  : "navbar navbar-expand-lg bg-body-tertiary  img-fluid rounded-start "
              }
              alt="..."
            />
          </div>
          <div
            className={
              darkMode
                ? "navbar navbar-expand-lg bg-dark text-ligh  col-md-8 "
                : "navbar navbar-expand-lg bg-body-tertiary  col-md-8 "
            }
          >
            <div className="card-body">
              <h5
                className={
                  darkMode
                    ? "navbar navbar-expand-lg bg-dark text-light  card-title "
                    : "navbar navbar-expand-lg bg-body-tertiary  card-title "
                }
              >
                {title}
              </h5>
              <p
                className={
                  darkMode
                    ? "navbar navbar-expand-lg bg-dark text-light  card-text"
                    : "navbar navbar-expand-lg bg-body-tertiary  card-text "
                }
              >
                {description}
              </p>
              <p className="card-text">
                <small className= {
                  darkMode
                    ? "navbar navbar-expand-lg text-light"
                    : " text-body-secondary "
                }>{author}</small>
              </p>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className={
                  darkMode
                    ? "  btn btn-primary btn-sm"
                    : "btn btn-primary btn-sm "
                }
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
