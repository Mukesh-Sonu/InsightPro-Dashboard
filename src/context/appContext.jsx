import { createContext, useContext } from "react";
import { useState } from "react";

const ThemeContext = createContext("light");

const ContextProvider = ({ children }) => {
  const theme = localStorage.getItem("theme") || "light";
  const [appTheme, setAppTheme] = useState(theme);
  return (
    <ThemeContext.Provider
      value={{
        appTheme,
        setAppTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(ThemeContext);
};

export default ContextProvider;
