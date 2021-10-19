/* eslint-disable @next/next/no-img-element */
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import image from "next/image";

const SocialMedia = ({fb, ig, tw, playstr, appstr}) => {
    return (
        <div>
            <div className="flex flex-row mx-auto gap-6">
                {/* socmedicon */}
                {fb && (
                    <a className>
                        <FaFacebookSquare />
                    </a>
                )}
                {ig && (
                    <a className>
                        <FaInstagram />
                    </a>
                )}
                {tw && (
                    <a className>
                        <FaTwitter />
                    </a>
                )}
            </div>
            <div>Discover Our App</div>
            <div className="flex flex-row mx-auto gap-2">
                {/* appstore */}
                {playstr && (
                    <a className>
                        {/* <image src="https://ik.imagekit.io/icvij1rszoy/travel_agency/Google_Play_4IXJJsdWx.svg?updatedAt=1634621096443" alt="image" width={100} height={35} /> */}
                        <img src="https://ik.imagekit.io/icvij1rszoy/travel_agency/Google_Play_4IXJJsdWx.svg?updatedAt=1634621096443" alt="img" />
                    </a>
                )}
                {appstr && (
                    <a className>
                        {/* <image src="https://ik.imagekit.io/icvij1rszoy/travel_agency/Play_Store_hzsHIKR1V.svg?updatedAt=1634621096094" alt="image" width={100} height={35} /> */}
                        <img src="https://ik.imagekit.io/icvij1rszoy/travel_agency/Play_Store_hzsHIKR1V.svg?updatedAt=1634621096094" alt="img" />
                    </a>
                )}
            </div>
        </div>
    )
}

export default SocialMedia