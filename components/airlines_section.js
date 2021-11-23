/* eslint-disable @next/next/no-img-element */
import data from '../dummy/airlines_logo.json'
import Slider from 'react-slick'

const Airlines = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
      };

    return (
        <div>
            <div className="hidden md:flex flex-row justify-between pt-24 pb-28 ">
                {data.map((item, idx) => (
                    <div key={idx} className="flex flex-row">
                        <img alt="img" src={item.image} className="" />
                    </div>
                ))}
            </div>
            <div className="visible md:hidden">
                <Slider {...settings}>
                    {data.map((item, idx) => (
                        <div key={idx} className="flex flex-col my-auto ">
                            <img alt="img" src={item.imgmobile} className="mx-auto  flex flex-row" />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Airlines