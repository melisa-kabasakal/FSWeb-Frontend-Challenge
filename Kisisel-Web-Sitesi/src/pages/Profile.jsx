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
        <div className="flex justify-center items-center  bg-customBlue">
            <div className="w-[960px] p-8 bg-customBlue border-solid border-0">
                <h2 className="text-customGreen font-inter font-bold text-[30px] text-left mb-6 ml-8">Profile</h2>
                <div className="flex flex-col md:flex-row justify-start gap-6 items-start">
                    <div className="max-w-[350px] w-full ">
                        <h4 className="text-[20px] text-customWhite mb-3 ml-8">Bilgiler</h4>
                        <ul className="text-customWhite mb-3 text-[14px] leading-6 ">
                            <li><strong className="text-customGreen mb-2">Doğum Tarihi </strong> {profile.basicInfo.dateOfBirth}</li>
                            <li><strong className="text-customGreen mb-2">Şehir </strong> {profile.basicInfo.city}</li>
                            <li><strong className="text-customGreen mb-2">Eğitim </strong> {profile.basicInfo.education}</li>
                            <li><strong className="text-customGreen mb-2">Tercih Edilen Rol </strong> {profile.basicInfo.preferredRole}</li>
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
