/* eslint-disable @next/next/no-img-element */
import SocialMedia from "./social_media";

const Footer = () => {
    return (
        <div className="pt-12 pb-12">
            <div className="grid grid-cols-2 md:grid-cols-5">
                <div>
                    <div className="pb-5">
                        <a href='#'>
                            <img src="https://ik.imagekit.io/icvij1rszoy/travel_agency/0012273862_10__1___2__CeLDnMUfg.png?updatedAt=1634633049940" alt="logo" className="w-20 py-2" />
                        </a>
                    </div>
                    <div className="md:mr-8 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                </div>
                <div className="md:pl-3">
                    <div className="pb-8 font-bold">Menu Title</div>
                    <div className="list-none pb-5 listclass">
                        <li><a href="#">lorem ipsum</a></li>
                        <li><a href="#">lorem ipsum</a></li>
                        <li><a href="#">lorem ipsum</a></li>
                    </div>
                </div>
                <div className="md:pl-3">
                    <div className="pb-8 font-bold">Menu Title</div>
                    <div className="list-none pb-5 listclass">
                        <li><a href="#">lorem ipsum</a></li>
                        <li><a href="#">lorem ipsum</a></li>
                        <li><a href="#">lorem ipsum</a></li>
                    </div>
                </div>
                <div className="md:pl-3">
                    <div className="pb-8 font-bold">Menu Title</div>
                    <div className="list-none pb-5 listclass">
                        <li><a href="#">lorem ipsum</a></li>
                        <li><a href="#">lorem ipsum</a></li>
                        <li><a href="#">lorem ipsum</a></li>
                    </div>
                </div>
                <div className="hidden md:flex">
                    <SocialMedia fb ig tw disc playstr appstr />
                </div>
            </div>
            <div className="md:hidden pt-8"> 
                {/* mobile viewport only */}
                <SocialMedia fb ig tw disc playstr appstr />
            </div>
        </div>
    )
}

export default Footer;