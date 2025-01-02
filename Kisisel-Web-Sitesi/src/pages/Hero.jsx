import React from 'react'

import Header from '../components/Header'
import HeroContent from '../components/HeroContent'


function Hero() {
    return (
        <div>
            <div className="bg-[linear-gradient(to_right,_#4731D3_75%,_#CBF281_25%)] h-[600px] w-[100%] flex flex-col  items-center md:flex md:items-center sm:h-[700px] md:justify-center">
                <Header />
                <HeroContent />
            </div>

        </div>
    )
}

export default Hero