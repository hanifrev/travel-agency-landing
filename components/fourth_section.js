/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

const Fourth_Section = () => {
    return (
        <div className="flex flex-col md:flex-row pt-24 md:pt-32 pb-12 ">
            <div className="max-w-screen-sm sm:max-w-screen-md md:max-w-screen-sm w-full">
                <div className="flex flex-col">
                    <div className="pb-3 text-lg text-prehead_gray font-semibold">Easy and Fast</div>
                    <div className="pb-10 text-3xl sm:text-4xl md:text-5xl font-bold text-left">Book your next trip in 3 easy steps</div>
                </div>
                <div className="pb-7 max-w-full sm:max-w-90%">
                    {/* this content below should be put into a separate component, but it's okay for now */}
                    <div className="flex pb-12">
                        <div className="my-auto">
                            <Image src="https://ik.imagekit.io/icvij1rszoy/travel_agency/Group_7_arrXn2cRrFE.svg?updatedAt=1635671958576" alt="logo" width="47" height="48" layout="fixed" />
                        </div>
                        <div className="flex flex-col pl-5">
                            <div className="pb-1 text-prehead_gray font-bold text-base">Choose Destination</div>
                            <div className="text-prehead_gray text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </div>
                        </div>
                    </div>

                    <div className="flex pb-12">
                        <div className="my-auto">
                            <Image src="https://ik.imagekit.io/icvij1rszoy/travel_agency/Group_12_WipXXkdgp.svg?updatedAt=1635671958631" alt="logo" width="47" height="48" layout="fixed" />
                        </div>
                        <div className="flex flex-col pl-5">
                            <div className="pb-1 text-prehead_gray font-bold text-base">Make Payment</div>
                            <div className="text-prehead_gray text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </div>
                        </div>
                    </div>

                    <div className="flex pb-12">
                        <div className="my-auto">
                            <Image src="https://ik.imagekit.io/icvij1rszoy/travel_agency/Group_11_kxf15mEdtww.svg?updatedAt=1635671959465" alt="logo" width="47" height="48" layout="fixed" />
                        </div>
                        <div className="flex flex-col pl-5">
                            <div className="pb-1 text-prehead_gray font-bold text-base">Reach Airport on Selected Date</div>
                            <div className="text-prehead_gray text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-md w-full mx-auto">
                <img src="https://ik.imagekit.io/icvij1rszoy/travel_agency/Group_594-min_nNwuIV4Sn.png?updatedAt=1635675832095" className="max-w-150% -mt-28 -mb-28 transform -translate-x-12 md:-translate-y-0 sm:-translate-x-0 sm:max-w-full" alt="test" />
                {/* <Image src="https://ik.imagekit.io/icvij1rszoy/travel_agency/Group_594-min_nNwuIV4Sn.png?updatedAt=1635675832095" alt="images" width="485" height="400" className="" /> */}
            </div>
        </div>
    )
}

export default Fourth_Section;