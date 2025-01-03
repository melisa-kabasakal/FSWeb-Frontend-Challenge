import { createContext, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export const DarkModeContext = createContext()

export function DarkModeProvider({ children }) {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', null)

    useEffect(() => {
        if (darkMode === null) {
            const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
            setDarkMode(systemDarkMode)
        } else {
            localStorage.setItem('darkMode', JSON.stringify(darkMode));
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            setDarkMode(mediaQuery.matches)
        };

        mediaQuery.addEventListener('change', handleChange)

        return () => {
            mediaQuery.removeEventListener('change', handleChange)
        };
    }, []);

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            <div className={darkMode ? 'dark' : ''}>
                {children}
            </div>
        </DarkModeContext.Provider>
    );
}
