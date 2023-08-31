import React, { createContext, useState } from 'react'

const themeContext = createContext()

const Contexto = ({ children }) => {
    const [theme, setTheme] = useState("light")
    const toggle = () => {
        setTheme(previous => previous === "light" ? "dark" : "light")
    }
  return (
    <themeContext.Provider value={{ theme, toggle }}>
        { children }
    </themeContext.Provider>
  )
}

export {Contexto, themeContext }