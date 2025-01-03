import React, { createContext, useContext, useState } from 'react'

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext)

function LanguageContextProvider({ children }) {
    const [language, setLanguage] = useState('en')

    const toggleLanguage = () => {
        setLanguage((lang) => (lang === 'en' ? 'tr' : 'en'))
    }
    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageContextProvider