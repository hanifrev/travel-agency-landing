/* eslint-disable @next/next/no-img-element */
import { FaFacebookSquare, FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa";
import { IconContext } from "react-icons";
// import image from "next/image";

const SocialMedia = ({fb, ig, tw, playstr, appstr, disc, iconClassContainer}) => {
    const iconStyle = { color: "#5E6282", fontSize: "1.2rem" }
    return (
        <div className="max-w-screen-sm mx-auto">
            <div className={`flex flex-row mx-auto gap-6 justify-evenly pb-6 ${iconClassContainer}`}>
                {/* socmedicon */}
                {fb && (
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className >
                        <FaFacebookSquare style={iconStyle} />
                    </a>
                )}
                {ig && (
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className>
                        <FaInstagram style={iconStyle} />
                    </a>
                )}
                {tw && (
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className>
                        <FaTwitter style={iconStyle} />
                    </a>
                )}
                {disc && (
                    <a href="https://discord.com" target="_blank" rel="noreferrer" className>
                        <FaDiscord style={iconStyle} />
                    </a>
                )}
            </div>
            <div className="flex justify-around mx-auto pb-4 text-lg md:text-xl text-gray-700">Discover Our App</div>
            <div className={`flex flex-row mx-auto gap-2 justify-evenly ${iconClassContainer}`}>
                {/* appstore */}
                {playstr && (
                    <a href="https://play.google.com" target="_blank" rel="external noreferrer" className>
                        {/* <image src="https://ik.imagekit.io/icvij1rszoy/travel_agency/Google_Play_4IXJJsdWx.svg?updatedAt=1634621096443" alt="image" width={100} height={35} /> */}
                        <img src="https://ik.imagekit.io/icvij1rszoy/travel_agency/Google_Play_4IXJJsdWx.svg?updatedAt=1634621096443" alt="img" />
                    </a>
                )}
                {appstr && (
                    <a href="https://www.apple.com/app-store/" target="_blank" rel="external noreferrer" className>
                        {/* <image src="https://ik.imagekit.io/icvij1rszoy/travel_agency/Play_Store_hzsHIKR1V.svg?updatedAt=1634621096094" alt="image" width={100} height={35} /> */}
                        <img src="https://ik.imagekit.io/icvij1rszoy/travel_agency/Play_Store_hzsHIKR1V.svg?updatedAt=1634621096094" alt="img" />
                    </a>
                )}
            </div>
        </div>
    )
}

export default SocialMedia