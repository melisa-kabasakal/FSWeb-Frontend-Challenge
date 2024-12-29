import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaGithub } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function HeroContent() {
    const [heroData, setHeroData] = useState(null);

    useEffect(() => {

        axios.get('/data.json')
            .then(response => {
                setHeroData(response.data.hero);
            })
            .catch(error => {
                console.error("Veri çekilemedi:", error);
            });
    }, []);

    if (!heroData) {
        return <div>Loading...</div>
    }

    return (

        <div className='flex justify-around border-solid border-0 max-w-[70%] ml-[200px]'>

            <div className='flex flex-row items-center ml-10 mr-4 border-solid border-0 max-w-96'>
                <div className=''>
                    <h4 className='text-[40px] font-inter text-customGreen font-bold border-solid border-0 max-w-80'>
                        Ben bir Frontend Developer'ım...
                    </h4>
                    <p className='text-[15px] font-inter text-customWhite'>
                        Harika bir kullanıcı deneyimiyle sağlam ve ölçeklenebilir frontend ürünleri oluşturmayı seven biriyim.
                    </p>
                    <div className='flex gap-3 mt-4'>
                        <a
                            className='flex justify-center items-center border-solid border-0 w-24 pl-2 py-0.5 pr-4 gap-2 bg-customWhite rounded-md'
                            href={heroData.github}
                            alt='GitHub'
                        >
                            <FaGithub className='' size={30} />
                            <p className='text-[#3730A3] text-[13px]'>Github</p>
                        </a>
                        <a
                            className='flex justify-center items-center border-solid border-[1px] w-24 pl-2 py-2 pr-4 gap-2 bg-customWhite rounded-md'
                            href={heroData.linkedin}
                            alt='Linkedin'
                        >
                            <FontAwesomeIcon icon={faLinkedinIn} />
                            <p className='text-[#3730A3] text-[13px]'>Linkedin</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className='ml-6'>
                <img src={heroData.img} className='w-[200px] h-[250px] border-solid border-0 rounded-2xl ' alt='Profile' />
            </div>
        </div>


    );
}

export default HeroContent;
