import React, { useContext, useEffect } from "react";
import { fetchWeather } from "../Context/weather/weatherAction";
import WeatherContext from "../Context/weather/weatherContext";
import ThemeContext from "../Context/Theme/ThemeContext";


const WeatherCard = () => {
  // const { darkMode } = useContext(ThemeContext);
  const { darkMode, themeDispatch } = useContext(ThemeContext);
  const {weather , dispatch} = useContext(WeatherContext)

  const getWeather = async (topic) => {
    const data = await fetchWeather(topic);

    dispatch({
      type: "GET_WEATHER",
      payload: data,
    });
  };

  useEffect(() => {
    getWeather("Indore");
  }, []);

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
    <div className="col-md-4 col-sm-12">
      <div className={
        darkMode
          ? "navbar navbar-expand-lg bg-dark text-ligh shadow-lg card p-5"
          : "navbar navbar-expand-lg bg-body-tertiary shadow-lg card p-5"
      }>
        <h4 className={darkMode ? "navbar-brand text-light" : "navbar-brand"}>Today Weather</h4>
        <h1  className={darkMode ? "navbar-brand text-light" : "navbar-brand"} >{weather?.current?.temp_c}°</h1>
        <h2  className={darkMode ? "navbar-brand text-light" : "navbar-brand"}>{weather?.location?.name}</h2>
        <img
         className={darkMode ? "navbar-brand text-light" : "navbar-brand"}
          src="//cdn.weatherapi.com/weather/64x64/night/143.png"
          alt=""
          style={{ width: "50px" }}
        />
        <h1  className={darkMode ? "navbar-brand text-light" : "navbar-brand"}>{weather?.current?.condition?.text}</h1>
      </div>
    </div>
  );
};

export default WeatherCard;
