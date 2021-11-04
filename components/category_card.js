/* eslint-disable react/jsx-key */
import Image from 'next/image'
import data from '../dummy/service_cat.json'

const Category_Card = () => {
    return (
        <div className="flex flex-col md:flex-row">
            {data.map((item, idx) => (
                <div key={idx} className="mx-auto pb-8">
                    <div className="w-full mx-auto text-center pb-6">
                        <Image src={item.img} alt='image' width={70} height={70} />
                    </div>
                    <div className="w-full mx-auto text-center pb-4 font-semibold text-xl">{item.title}</div>
                    <div className="w-9/12 mx-auto text-center text-base">{item.description}</div>
                </div>
            ))}
        </div>
    )
}

export default Category_Card;