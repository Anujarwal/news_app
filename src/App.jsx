import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Page/Home";
import { NewsProvider } from "./Context/News/NewsContext";

const App = () => {
  return (
    <NewsProvider>
      <Navbar />
      <Home />
    </NewsProvider>
  );
};

export default App;
