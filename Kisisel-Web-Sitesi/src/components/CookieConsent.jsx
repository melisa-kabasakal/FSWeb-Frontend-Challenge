import React, { useContext } from 'react'
import { CookieContext } from '../contexts/CookieContext'

function CookieConsent() {
    const { cookies, acceptCookies, toRejectCookies } = useContext(CookieContext)
    if (cookies !== null) {
        return null
    }
    return (
        <div className="fixed bottom-0 w-[400px] sm:w-[400px] md:w-[400px] lg:w-[400px] xl:w-[400px] 2xl:w-[400px]  bg-customPurple text-customWhite p-4 flex-col justify-center items-center rounded-lg right-0 mb-56">
            <p className='text-center'>Bu site, size daha iyi bir deneyim sunmak için çerez kullanmaktadır.</p>
            <div className="flex items-center justify-around">
                <button onClick={acceptCookies} className="bg-customBlue p-2 rounded-xl">
                    Kabul Et
                </button>
                <button onClick={toRejectCookies} className="bg-customBlue p-2 rounded-xl">
                    Reddet
                </button>
            </div>
        </div>
    )
}

export default CookieConsent