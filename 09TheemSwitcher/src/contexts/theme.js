import { useContext, createContext } from "react";

export const themeContext = createContext({
    themeMod: 'light',
    darkTheme: () => { },
    lightTheme: () => { }
})

export const ThemeProvider = themeContext.Provider

export default function useTheme(){
    return useContext(themeContext)
}