import React from 'react'

import Header from '../components/Header'
import HeroContent from '../components/HeroContent'

function Hero() {
    return (
        <div>
            <div className="bg-[linear-gradient(to_right,_#4731D3_80%,_#CBF281_20%)] h-96 w-full">
                <Header />
                <HeroContent />
            </div>

        </div>
    )
}

export default Hero