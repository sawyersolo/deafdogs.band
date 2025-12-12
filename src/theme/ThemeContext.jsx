import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('stringbreaker') // stringbreaker | colossus

  useEffect(() => {
    const stored = window.localStorage.getItem('deafdogs-theme')
    if (stored === 'stringbreaker' || stored === 'colossus') {
      setTheme(stored)
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme === 'stringbreaker' ? 'stringbreaker' : 'colossus')
    window.localStorage.setItem('deafdogs-theme', theme)
  }, [theme])

  const toggle = () => {
    setTheme(prev => (prev === 'stringbreaker' ? 'colossus' : 'stringbreaker'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
