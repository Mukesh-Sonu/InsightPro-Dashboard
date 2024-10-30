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
  const isSmScreen = screens.xs;

  console.log(screens);

  return (
    <ThemeContext.Provider
      value={{
        appTheme,
        setAppTheme,
        isSmScreen,
        isLgScreen,
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
