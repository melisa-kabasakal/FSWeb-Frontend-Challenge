import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getFooter } from "../store/footerActions"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    const dispatch = useDispatch()
    const footerData = useSelector((store) => store.footer.footer)
    const loading = useSelector((store) => store.footer.loading)
    const error = useSelector((store) => store.footer.error)

    useEffect(() => {
        dispatch(getFooter());
    }, [dispatch])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    if (!footerData || footerData.length === 0) {
        return <p>Boş veri</p>
    }

    const { title, msg, email, images } = footerData[0]

    return (
        <footer className="flex flex-col justify-center items-center mt-5">
            <div className="border-solid border-0 w-[400px] flex flex-col justify-center items-center p-4 gap-3">
                <h2 className="text-customBlue font-inter text-[28px]">{title}</h2>
                <p className="font-inter text-center text-[#120B39] text-[16px]">{msg}</p>
                <a href="" className="text-customBlue">
                    {email}

                </a>


                <div className="w-auto flex justify-center items-center gap-4 decoration-sky-600">
                    {images.map((src, index) => (
                        <img key={index} src={src} className="w-8 h-8" />
                    ))}

                </div>
            </div>
        </footer>
    );
};

export default Footer;
