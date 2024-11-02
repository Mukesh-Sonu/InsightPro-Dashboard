import { createContext, useContext } from "react";
import { Grid } from "antd";
import { useState } from "react";
const { useBreakpoint } = Grid;

const ThemeContext = createContext("light");

const ContextProvider = ({ children }) => {
  const theme = localStorage.getItem("theme") || "light";
  const [appTheme, setAppTheme] = useState(theme);
  const screens = useBreakpoint();
  const isLgScreen = screens.lg;
  const isMdScreen = screens.md;
  const isSmScreen = screens.xs;

  return (
    <ThemeContext.Provider
      value={{
        appTheme,
        setAppTheme,
        isSmScreen,
        isLgScreen,
        isMdScreen,
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
