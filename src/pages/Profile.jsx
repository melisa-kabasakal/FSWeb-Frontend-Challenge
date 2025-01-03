import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useLanguage } from '../contexts/LanguageContext';

function Profile() {
    const [profile, setProfile] = useState(null)
    const { language } = useLanguage()

    useEffect(() => {
        axios.get('/data.json')
            .then(response => {
                setProfile(response.data.profile);
            })
            .catch(error => {
                console.error("Veri çekilemedi:", error);
            });
    }, []);

    if (!profile) {
        return <p>Yükleniyor...</p>;
    }

    return (
        <div className="flex justify-center items-center  bg-customBlue py-8 ">
            <div className=" sm:p-8 bg-customBlue border-solid border-0 sm:ml-0 sm:flex sm:flex-col sm:justify-center sm:items-center md:ml-6 md:items-start  lg:flex-nowrap lg:ml-0 ">
                <h2 className="text-customGreen font-inter font-bold text-[30px]  mb-10 ">{language === 'en' ? "Profile" : "Profil"}</h2>
                <div className="flex flex-col gap-6 md:flex-row md:flex-wrap  lg:flex-nowrap md:items-center lg:flex-row ">
                    <div className="w-[350px] ">
                        <h4 className="text-[20px] text-customWhite mb-3 ">{language === 'en' ? profile.basicInfo.title.en : profile.basicInfo.title.tr}</h4>
                        <ul className="text-customWhite  text-[14px] leading-8 -ml-8 ">
                            <li><strong className="text-customGreen ">{language === 'en' ? profile.basicInfo.dateName.en : profile.basicInfo.dateName.tr} </strong> {profile.basicInfo.dateOfBirth.tr}</li>
                            <li><strong className="text-customGreen ">{language === 'en' ? profile.basicInfo.residense.en : profile.basicInfo.residense.tr} </strong> {profile.basicInfo.city}</li>
                            <li><strong className="text-customGreen ">{language === 'en' ? profile.basicInfo.educationName.en : profile.basicInfo.educationName.tr}</strong> {language === 'en' ? profile.basicInfo.education.en : profile.basicInfo.education.tr}</li>
                            <li><strong className="text-customGreen ">{language === 'en' ? profile.basicInfo.roleName.en : profile.basicInfo.roleName.tr} </strong> {profile.basicInfo.preferredRole}</li>
                        </ul>
                    </div>
                    <img src={profile.img} alt="Profile" className="w-48 h-52 rounded-md mb-4 md:flex-1 lg:flex lg:-ml-8" />
                    <div className="border-solid border-0 max-w-80 md:items-center lg:ml-3">
                        <h3 className="font-inter text-[20px] text-customWhite mb-2  ">{language === 'en' ? "About Me" : "Hakkımda"}</h3>
                        <p className="text-customWhite text-[13px] mb-4  md:max-w-[400px] ">{language === 'en' ? profile.aboutMe.en : profile.aboutMe.tr}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
