import Image from 'next/image'
import data from '../dummy/destination.json'
import {FaLocationArrow} from "react-icons/fa";

const Destination_Card = () => {
    const iconStyle = { marginTop: "7px" }
    return (
        <div className="flex flex-col md:flex-row mx-auto gap-10">
            {data.map((item, idx) => (
                <div key={idx} className="destination-card bg-white rounded-3xl card-shadow">
                    <div>
                        <Image src={item.image} alt="img" width={630} height={915} />
                    </div>
                    <div className="grid grid-cols-2 pt-7 pb-10 text-lg text-gray-600">
                        <div className="pl-8">{item.destination}</div>
                        <div className="pl-20">{item.price}</div>
                        <div className="pl-8 pt-5 flex"><FaLocationArrow style={iconStyle} />{item.time}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Destination_Card;

// for mobile, try to make slider (slick),