import React, {useEffect, useState} from 'react'
import { ThemeContext, themes } from '../contexts/ThemeContext'

const getTheme = () => {
    const theme = localStorage.getItem('theme');
    if (Object.values(themes).includes(theme)) return theme
    return themes.light
}

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(getTheme)

    useEffect(() => {
        localStorage.setItem('theme', theme);

        let html = document.querySelector("html");
        theme === 'dark' ? html.classList.add('dark') : html.classList.remove('dark');
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider

