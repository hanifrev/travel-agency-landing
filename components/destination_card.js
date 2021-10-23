import Image from 'next/image'
import data from '../dummy/destination.json'

const Destination_Card = () => {
    return (
        <div className="flex flex-col md:flex-row mx-auto">
            {data.map((item, idx) => (
                <div key={idx}>
                    <div>{item.image}</div>
                    <div>{item.destination}</div>
                    <div>{item.price}</div>
                    <div>{item.time}</div>
                </div>
            ))}
        </div>
    )
}

export default Destination_Card;