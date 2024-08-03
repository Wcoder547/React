import { createContext, useContext } from "react";

const Themecontext = createContext({
  thememode: "light",
  darkmode: () => {},
  lightmode: () => {},
});

const Themeprovider = Themecontext.Provider;

function useTheme() {
  return useContext(Themecontext);
}
export { Themecontext, useTheme, Themeprovider };
