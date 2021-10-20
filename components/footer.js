/* eslint-disable @next/next/no-img-element */
import SocialMedia from "./social_media";

const Footer = () => {
    return (
        <div className="pt-12 pb-4">
            <div className="grid grid-cols-2 md:grid-cols-5">
                <div>
                    <div className="pb-2 md:pb-5">
                        <a href='#'>
                            <img src="https://ik.imagekit.io/icvij1rszoy/travel_agency/0012273862_10__1___2__CeLDnMUfg.png?updatedAt=1634633049940" alt="logo" className="w-20 py-2" />
                        </a>
                    </div>
                    <div className="md:mr-8 text-sm text-gray-700 w-2/3 md:w-full">Book your trip in minute, get full Control for much longer.
                    </div>
                </div>
                <div className="md:pl-3">
                    <div className="pb-8 font-bold text-lg md:text-xl">Company</div>
                    <div className="list-none pb-5 listclass text-gray-700 text-base md:text-lg">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Carrers</a></li>
                        <li><a href="#">Mobile</a></li>
                    </div>
                </div>
                <div className="md:pl-3">
                    <div className="pb-8 font-bold text-lg md:text-xl">Contact</div>
                    <div className="list-none pb-5 listclass text-gray-700 text-base md:text-lg">
                        <li><a href="#">Help/FAQ</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Affilates</a></li>
                    </div>
                </div>
                <div className="md:pl-3">
                    <div className="pb-8 font-bold text-lg md:text-xl">More</div>
                    <div className="list-none pb-5 listclass text-gray-700 text-base md:text-lg">
                        <li><a href="#">Airlinefees</a></li>
                        <li><a href="#">Airline</a></li>
                        <li><a href="#">Low fare tips</a></li>
                    </div>
                </div>
                <div className="hidden md:flex">
                    <SocialMedia fb ig tw disc playstr appstr />
                </div>
            </div>
            <div className="md:hidden pt-6"> 
                {/* mobile viewport only */}
                <SocialMedia fb ig tw disc playstr appstr />
            </div>
            <div className="text-sm mx-auto w-full text-center text-gray-600 pt-8 md:pt-4">
            © NIF 2021 All rights reserved
            </div>
        </div>
    )
}

export default Footer;