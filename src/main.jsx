import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./Context/Theme/ThemeContext.jsx";
import { WeatherProvider } from "./Context/weather/weatherContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <WeatherProvider>
        <App />
      </WeatherProvider>
    </ThemeProvider>
  </React.StrictMode>
);
