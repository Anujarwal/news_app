import { createContext, useReducer } from "react";
import NewsReduser from "./NewsReduser";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const initialState = {
    newsAll: [],
  };
  const [state, newsDispatch] = useReducer(NewsReduser, initialState);

  return (
    <NewsContext.Provider value={{ ...state, newsDispatch }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
