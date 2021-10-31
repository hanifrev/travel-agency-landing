import Image from 'next/image'
import data from '../dummy/destination.json'
import {FaLocationArrow} from "react-icons/fa";

const Destination_Card = () => {
    const iconStyle = { marginTop: "7px", marginRight: "10px", color: "#000000" }
    return (
        <div className="flex flex-col md:flex-row mx-auto gap-10">
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
    )
}

export default Destination_Card;

// for mobile, try to make slider (slick),