import { createContext, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export const DarkModeContext = createContext()

export function DarkModeProvider({ children }) {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', null)

    useEffect(() => {
        if (darkMode === null) {
            const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
            setDarkMode(systemDarkMode)
        }
    }, [])

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }


    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            <div className={darkMode ? 'dark' : ' '}>
                {children}
            </div>
        </DarkModeContext.Provider>
    )
}
