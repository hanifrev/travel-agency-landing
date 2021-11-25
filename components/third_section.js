import Destination_Card from "./destination_card";
import Link from 'next/link';

const Third_Section = () => {
    return (
        <div className="flex flex-col pt-12 pb-12">
            <div className="flex flex-col mx-auto"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="500"
            >
                <div className="mx-auto pb-3 text-lg text-prehead_gray font-semibold">Top Selling</div>
                <div className="mx-auto pb-16 text-3xl sm:text-4xl md:text-5xl font-bold">Top Destinations</div>
            </div>
            <div className="flex flex-col md:flex-row">
                <Destination_Card />
            </div>
            <div className="flex justify-center pt-10 md:pt-20 pb-0 md:pb-0 text-base md:text-xl font-bold"
                data-aos="zoom-out"
                data-aos-easing="linear"
                data-aos-duration="500"
            >
                <Link href="/destinations" className="">
                    <a className="border-2 border-gray-300 hover:border-yellow-100 px-3 py-2 rounded-md hover:bg-subs_cta focus:bg-yellow-800">More Destinations</a>
                </Link>
            </div>
        </div>
    )
}

export default Third_Section;