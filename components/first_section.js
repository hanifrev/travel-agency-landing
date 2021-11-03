/* eslint-disable @next/next/no-img-element */
// import Image from 'next/image'
import Popup_Modal from "./popup_modal";

const First_Section = () => {

    const cta = () => (
        console.log("clicktest")
    )

    return (
        <div className="flex flex-col md:flex-row pt-12 pb-12 md:pt-24 lg:pt-0 lg:h-screen lg:items-center">
            <div className="max-w-screen-sm sm:max-w-screen-md md:max-w-screen-sm w-full">
                <div className="pb-6 uppercase text-sm md:text-xl text-red-600 font-semibold">
                    Best Destinations around the world
                </div>
                <div className="pb-8 text-5xl sm:text-6xl lg:text-84 font-bold">
                    Travel, enjoy and live a new and full life
                </div>
                <div className="pb-8 text-base leading-7">
                    Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
                </div>

                <div className="pb-9 flex flex-col md:flex-row">
                    <div className="md:pr-5">
                        <button onClick={cta} className="bg-yellow-400 hover:bg-yellow-600 w-full md:w-40 lg:w-44 h-14 rounded-xl text-white">
                            Find out More
                        </button>
                    </div>
                    <div className="pt-4 md:pt-0 flex flex-row">
                        <button onClick={cta} className="mx-auto w-full md:w-40 lg:w-44 h-14 rounded-xl text-red-500 ">                            
                            Play Demo
                        </button>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-md w-full mx-auto lg:absolute">
                <img src="https://ik.imagekit.io/icvij1rszoy/travel_agency/New_Project__2__ZDtAo-ASv.png?updatedAt=1634695474309" className="max-w-screen-sm w-full md:pt-16 posimgs1" alt="test" />
            </div>
        </div>

    )
}

export default First_Section;