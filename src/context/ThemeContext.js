import { createContext, useReducer } from "react";
import { TOGGLE_THEME } from "./ActionType";
import { theme_Reducer } from "./reducer/ThemeReducer";


export const ThemeContext = createContext();

const initval = {
    theme: 'light'
}

const ToggleProvider = ({ children }) => {
    const [state, dispatch] = useReducer(theme_Reducer, initval);

    const toggle_theme = (val) => {
        let newTheme = val === 'light' ? 'dark' : 'light'
        dispatch({ type: TOGGLE_THEME, payload: newTheme })
    }

    return (
        <ThemeContext.Provider
            value={{
                ...state,
                toggle_theme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ToggleProvider;
