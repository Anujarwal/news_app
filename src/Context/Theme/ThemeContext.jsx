import { createContext, useReducer } from "react";
import { ThemeReduser } from "./ThemeReduser";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

    const initialState = {
        darkMode : true,
    }

    const [state , themeDispatch] = useReducer(ThemeReduser , initialState)

    return(
        <ThemeContext.Provider value={{...state , themeDispatch}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext