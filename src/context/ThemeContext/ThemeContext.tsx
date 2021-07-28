import React, { createContext, useReducer } from "react";
import { themeReducer, ThemeState, lightTheme } from "./themeReducer";

interface ThemeContextProps {
  theme: ThemeState;
  setLightTheme: () => void;
  setDarkTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {
  const [theme, dispatch] = useReducer(themeReducer, lightTheme);

  const setLightTheme = () => {
    dispatch({ type: "set_light_theme" });
  };

  const setDarkTheme = () => {
    dispatch({ type: "set_dark_theme" });
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setDarkTheme,
        setLightTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
