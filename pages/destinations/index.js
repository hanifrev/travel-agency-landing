/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import {FaLocationArrow} from "react-icons/fa";
import data from '../../dummy/destinations_full.json'
import Image from 'next/image'

export default function Destination() {
    const iconStyle = { marginTop: "7px", marginRight: "10px", color: "#000000" }
    return (
        <div className="sec1_bg">
            <div className="px-9 sm:px-16 md:px-11 lg:px-0 max-w-screen-lg w-full mx-auto overflow-hidden"
            style={{ fontFamily: ['Nunito', 'sans-serif'], }}>
                <Head>
                    <title>Destination</title>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800;900&family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"
                    />
                </Head>
                <Navbar 
                    uselogo 
                    logosrc="https://ik.imagekit.io/icvij1rszoy/travel_agency/0012273862_10__1___3__AbercB-Jp.png?updatedAt=1634633949156"
                    logoClass="w-20"  
                />
                <div className="">
                    <div className="flex justify-center font-bold text-3xl md:text-4xl pt-8">Destinations List</div>
                    <div className="flex flex-col md:flex-row justify-center gap-10 flex-wrap py-10 items-center">
                        {data.map((item, idx) => (
                            <div key={idx} className="destination-card bg-white rounded-3xl card-shadow text-lg text-gray-600">
                                <div>
                                    <Image src={item.image} alt="img" width={630} height={672} />
                                </div>
                                <div className="grid grid-cols-2 pt-6 pb-1">
                                    <div className="pl-5">{item.destination}</div>
                                    <div className="pl-20">{item.price}</div>
                                </div>
                                <div className="pl-5 pt-4 pb-9 flex"><FaLocationArrow style={iconStyle} />{item.time}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};