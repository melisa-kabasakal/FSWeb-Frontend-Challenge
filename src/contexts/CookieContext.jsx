import { createContext, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { toast } from 'react-toastify'

export const CookieContext = createContext()

export function CookieProvider({ children }) {
    const [cookies, setCookies] = useLocalStorage('cookie', null)

    const acceptCookies = () => {
        setCookies(true)
        toast.success("Çerez kullanımı kabul edildi!")
    }
    const toRejectCookies = () => {
        setCookies(false)
        toast.success("Çerez kullanımı rededildi!")
    }

    useEffect(() => {
        if (cookies === true) {

        } else if (cookies === false) {

        }
    }, [cookies])

    return (
        <CookieContext.Provider value={{ cookies, acceptCookies, toRejectCookies }}>
            {children}
        </CookieContext.Provider>
    )
}
