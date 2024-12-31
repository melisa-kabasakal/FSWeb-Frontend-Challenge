import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
    const [profile, setProfile] = useState(null);

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
        <div className="flex justify-center items-center  bg-customBlue py-8">
            <div className="w-[960px] p-8 bg-customBlue border-solid border-0 ml-5">
                <h2 className="text-customGreen font-inter font-bold text-[30px]  mb-10 ">Profile</h2>
                <div className="flex flex-col md:flex-row  gap-6 ">
                    <div className="w-[350px]  ">
                        <h4 className="text-[20px] text-customWhite mb-3 ">Bilgiler</h4>
                        <ul className="text-customWhite  text-[14px] leading-8 -ml-8 ">
                            <li><strong className="text-customGreen ">Doğum Tarihi </strong> {profile.basicInfo.dateOfBirth}</li>
                            <li><strong className="text-customGreen ">Şehir </strong> {profile.basicInfo.city}</li>
                            <li><strong className="text-customGreen ">Eğitim </strong> {profile.basicInfo.education}</li>
                            <li><strong className="text-customGreen ">Tercih Edilen Rol </strong> {profile.basicInfo.preferredRole}</li>
                        </ul>
                    </div>
                    <img src={profile.img} alt="Profile" className="w-48 h-52 rounded-md mb-4 " />
                    <div className="border-solid border-0 max-w-80">
                        <h3 className="font-inter text-[20px] text-customWhite mb-2">Hakkımda</h3>
                        <p className="text-customWhite text-[13px] mb-4 ">{profile.aboutMe}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
